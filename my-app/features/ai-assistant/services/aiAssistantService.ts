import { AIChatRequest, AIChatResponse } from '../types/ai-assistant.types';

// Fallback logic for when Gemini API is not configured or fails
const getLocalFallbackResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes('night') || lowerMsg.includes('dark')) {
    return 'Traveling at night requires extra caution. Please try to stick to well-lit areas, share your live location with a trusted contact, and avoid taking shortcuts through isolated streets.';
  }
  if (lowerMsg.includes('emergency') || lowerMsg.includes('help')) {
    return 'If you are in an emergency, please use the SOS button immediately. This will alert your emergency contacts. If possible, call your local emergency services (e.g., 100 or 112).';
  }
  if (lowerMsg.includes('location') || lowerMsg.includes('track')) {
    return 'You can use the Live Tracking feature in the app to share your current location with your trusted contacts. They will receive updates until you turn it off.';
  }
  if (lowerMsg.includes('route') || lowerMsg.includes('safe path')) {
    return 'When choosing a route, the app’s Safe Route feature can help you identify well-lit and populated paths based on community reports. Avoid areas marked with high risk.';
  }
  if (lowerMsg.includes('transport') || lowerMsg.includes('bus') || lowerMsg.includes('train')) {
    return 'When using public transport, try to sit near the driver or in well-populated compartments. Keep your belongings secure and stay alert.';
  }
  if (lowerMsg.includes('taxi') || lowerMsg.includes('cab') || lowerMsg.includes('uber')) {
    return 'Before entering a cab, verify the license plate and driver details. Share your ride status with a friend or family member, and follow the route on your own map.';
  }
  if (lowerMsg.includes('harass') || lowerMsg.includes('following')) {
    return 'If you feel you are being followed or harassed, move to a crowded, well-lit public place immediately. Do not go home. Contact a trusted friend or the police.';
  }
  if (lowerMsg.includes('lost phone') || lowerMsg.includes('stolen')) {
    return 'If your phone is lost or stolen, try to find a safe location and use a trusted person’s phone to lock your device remotely. Report the incident to the local authorities.';
  }
  if (lowerMsg.includes('suspicious')) {
    return 'Trust your instincts. If someone or something seems suspicious, maintain your distance and move towards a populated area. You can also report it in the Community section.';
  }

  return 'I can help with general personal-safety questions. You can ask about night travel, emergencies, live-location sharing, safer routes, public transport, or trusted contacts.';
};

import { SYSTEM_INSTRUCTION } from '../constants/assistant.constants';

export const sendMessageToAI = async (request: AIChatRequest): Promise<AIChatResponse> => {
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

  if (!apiKey || apiKey === '') {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      text: getLocalFallbackResponse(request.message),
      isFallback: true,
    };
  }

  try {
    // Format history for Gemini API (must start with user and alternate)
    let formattedHistory = request.history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Remove leading 'model' messages if any, because Gemini requires the first message to be 'user'
    while (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
      formattedHistory.shift();
    }

    // Add current message
    formattedHistory.push({
      role: 'user',
      parts: [{ text: request.message }]
    });

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        contents: formattedHistory,
        generationConfig: {
          temperature: 0.7,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates.length > 0) {
      return {
        text: data.candidates[0].content.parts[0].text,
        isFallback: false,
      };
    } else {
      throw new Error('No response from Gemini API');
    }
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    
    // Return the actual error message for debugging instead of fallback
    return {
      text: `API Error: ${error.message || 'Unknown error'}. Please check console.`,
      isFallback: true,
    };
  }
};
