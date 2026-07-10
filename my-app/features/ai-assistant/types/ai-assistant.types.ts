export type ChatRole = 'user' | 'assistant';

export type AssistantMode = 'gemini' | 'local';

export type ChatMessageStatus = 'sending' | 'sent' | 'failed';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  timestamp: number;
  status: ChatMessageStatus;
  isDemo?: boolean;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  prompt: string;
  theme: string;
}

export interface AIChatRequest {
  message: string;
  history: ChatMessage[];
}

export interface AIChatResponse {
  text: string;
  error?: string;
  isFallback?: boolean;
}
