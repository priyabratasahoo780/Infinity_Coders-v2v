import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Mic, Send } from 'lucide-react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  isLoading?: boolean;
}

export function ChatInput({ value, onChangeText, onSend, isLoading }: Props) {
  const inputRef = useRef<TextInput>(null);

  const handleVoiceInput = () => {
    Alert.alert('Coming Soon', 'Voice input will be available soon.');
  };

  const isSendDisabled = !value.trim() || isLoading;

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Ask me anything about safety..."
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          multiline
          maxLength={500}
        />
        <TouchableOpacity 
          style={styles.micButton} 
          onPress={handleVoiceInput}
          accessibilityRole="button"
          accessibilityLabel="Voice input"
        >
          <Mic size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={[styles.sendButton, isSendDisabled && styles.sendButtonDisabled]}
        onPress={onSend}
        disabled={isSendDisabled}
        accessibilityRole="button"
        accessibilityLabel="Send message"
      >
        <Send size={18} color="#FFFFFF" style={{ marginLeft: -2 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFD',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E7E3F2',
    paddingHorizontal: 16,
    minHeight: 48,
    marginRight: 12,
  },
  input: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 15,
    color: '#10153A',
    maxHeight: 120,
  },
  micButton: {
    padding: 8,
    marginRight: -8,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6D35E8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6D35E8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  sendButtonDisabled: {
    backgroundColor: '#D1C4F9',
    shadowOpacity: 0,
    elevation: 0,
  },
});
