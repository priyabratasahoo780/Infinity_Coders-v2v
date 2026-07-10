import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";

// Yeh file Clerk ke Google OAuth callback ko handle karti hai
// Route: /--/oauth-native-callback
export default function OAuthNativeCallback() {
  useEffect(() => {
    // Browser session complete karo taaki Clerk token receive kar sake
    WebBrowser.maybeCompleteAuthSession();
  }, []);

  // Kuch render nahi karna — Clerk automatically handle karega
  return null;
}
