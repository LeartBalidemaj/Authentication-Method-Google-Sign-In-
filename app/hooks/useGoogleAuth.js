import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "../../firebase";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "275315204938-0gjo2vpq0pm0oh9fp17o0hnngtl1ail5.apps.googleusercontent.com",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Google Auth Response:", response);

    if (response?.type === "success") {
      handleSignIn(response);
    } else if (response?.type === "error") {
      console.log("Auth Error:", response.error);
      setError("Authentication failed. Please try again.");
      setLoading(false);
    }
  }, [response]);

  const handleSignIn = async (authResponse) => {
    setLoading(true);
    setError("");

    try {
      const { id_token } = authResponse.params;

      if (!id_token) {
        throw new Error("No ID token received from Google");
      }

      console.log("Received ID token, creating credential...");

      const credential = GoogleAuthProvider.credential(id_token);
      const userCredential = await signInWithCredential(auth, credential);

      console.log("Google sign-in successful!", userCredential.user.email);
    } catch (error) {
      console.error("Google sign in error:", error);
      let errorMessage = "Something went wrong during sign in";

      if (error.code === "auth/account-exists-with-different-credential") {
        errorMessage =
          "An account already exists with this email. Please use email/password login.";
      } else if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "Sign in was cancelled.";
      } else {
        errorMessage = error.message || errorMessage;
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setError("");
    console.log("Starting Google sign in...");
    await promptAsync();
  };

  return {
    signInWithGoogle,
    loading,
    error,
    disabled: !request || loading,
  };
};
