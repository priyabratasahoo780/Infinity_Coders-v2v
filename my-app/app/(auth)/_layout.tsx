import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="gathering-info" options={{ headerShown: false }} />
      <Stack.Screen name="safety-info" options={{ headerShown: false }} />
      <Stack.Screen name="trusted-contacts" options={{ headerShown: false }} />
      <Stack.Screen name="complete" options={{ headerShown: false }} />
      <Stack.Screen name="otp-verify" options={{ headerShown: false }} />
    </Stack>
  );
}
