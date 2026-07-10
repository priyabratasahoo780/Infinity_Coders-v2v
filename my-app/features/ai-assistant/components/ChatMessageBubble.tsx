import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bot, CheckCheck } from 'lucide-react-native';
import { ChatMessage } from '../types/ai-assistant.types';

interface Props {
  message: ChatMessage;
}

export const ChatMessageBubble = React.memo(({ message }: Props) => {
  const isUser = message.role === 'user';

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  if (isUser) {
    return (
      <View style={[styles.container, styles.userContainer]}>
        <View style={styles.userBubble}>
          <Text style={styles.userText}>{message.content}</Text>
          <View style={styles.userFooter}>
            <Text style={styles.timeText}>{formatTime(message.timestamp)}</Text>
            <CheckCheck size={14} color="#6D35E8" />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.assistantContainer]}>
      <View style={styles.avatarBox}>
        <Bot size={16} color="#6D35E8" />
      </View>
      <View style={styles.assistantBubble}>
        <Text style={styles.assistantText}>{message.content}</Text>
        <Text style={styles.assistantTimeText}>{formatTime(message.timestamp)}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  userContainer: {
    justifyContent: 'flex-end',
  },
  assistantContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  avatarBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F2ECFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 4,
  },
  userBubble: {
    backgroundColor: '#F1EAFF',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderBottomRightRadius: 4,
    maxWidth: '85%',
  },
  assistantBubble: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderBottomLeftRadius: 4,
    maxWidth: '85%',
    borderWidth: 1,
    borderColor: '#E7E3F2',
  },
  userText: {
    color: '#10153A',
    fontSize: 15,
    lineHeight: 22,
  },
  assistantText: {
    color: '#161A3A',
    fontSize: 15,
    lineHeight: 24,
  },
  userFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  timeText: {
    fontSize: 11,
    color: '#596080',
  },
  assistantTimeText: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 6,
  },
});
