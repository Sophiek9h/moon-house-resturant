import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/lib/global-provider";
import { router } from "expo-router";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const { login, isLogged, loading } = useGlobalContext();
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    if (!loading && isLogged) {
      router.replace("/");
    }
  }, [isLogged, loading]);

    const handleLogin = async () => {
    setIsSigningIn(true);
    await login();
    // Keep loading state until redirect happens
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center px-6">
      {/* Logo / App Name */}
      <View className="items-center mb-8">
        <Image
          source={images.bikeman}
          className="mb-5"
          resizeMode="contain"
        />
        <Text className="text-2xl font-nunito-bold text-gray-800">
          Welcome to MoonHouse
        </Text>
        <Text className="text-gray-500 mt-2 text-center">
          Sign in to continue
        </Text>
      </View>

      {/* Google Sign-In Button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="flex-row items-center bg-white border border-gray-300 rounded-full px-6 py-3 shadow-md"
        activeOpacity={0.8}
        disabled={isSigningIn}
      >
        {isSigningIn ? (
          <ActivityIndicator size="small" color="#4285F4" />
        ) : (
          <Image
            source={icons.google}
            className="w-6 h-6 mr-1"
          />
        )}
        <Text className="text-gray-700 font-medium ml-3">
          {isSigningIn ? "Signing in..." : "Sign in with Google"}
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text className="mt-8 text-xs text-gray-400">
        By signing in, you agree to our Terms & Privacy Policy
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;