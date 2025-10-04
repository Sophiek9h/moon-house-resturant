import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { auth } from "../firebaseConfig";
import { signInWithCredential, GoogleAuthProvider, onAuthStateChanged, signOut, User } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

interface GlobalContextType {
  loading: boolean;
  isLogged: boolean;
  user: User | null;
  login: () => void;
  logout: () => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType>({
  loading: true,
  isLogged: false,
  user: null,
  login: () => {},
  logout: async () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

interface ProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "995336070306-2b3u9um7bepnpjd9om98bmr2iak2cdkt.apps.googleusercontent.com",
    iosClientId: "995336070306-3jdcjqnj469ggao1b0ifh2h81bn9dma0.apps.googleusercontent.com",
  });

  useEffect(() => {
  // Save auth state to AsyncStorage
  if (user) {
    AsyncStorage.setItem('userLoggedIn', 'true');
  } else {
    AsyncStorage.removeItem('userLoggedIn');
  }
}, [user]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setIsLogged(true);
      } else {
        setUser(null);
        setIsLogged(false);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).catch(error => {
        console.error("Firebase sign in error:", error);
      });
    }
  }, [response]);

  const login = () => promptAsync();

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <GlobalContext.Provider value={{ loading, isLogged, user, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};