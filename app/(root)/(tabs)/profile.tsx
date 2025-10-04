import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '@/lib/global-provider';
import { router } from 'expo-router';

const Profile = () => {
  const { user, logout } = useGlobalContext();

  const handleLogout = async () => {
    await logout();
    router.replace('/sing-in');
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-gray-800 mb-8">
          Profile
        </Text>

        {user && (
          <View className="items-center mb-8">
            {/* Profile Image */}
            {user.photoURL && (
              <Image
                source={{ uri: user.photoURL }}
                className="w-24 h-24 rounded-full mb-4"
              />
            )}
            
            {/* Name */}
            <Text className="text-xl font-semibold text-gray-800">
              {user.displayName || 'User'}
            </Text>
            
          </View>
        )}

        <TouchableOpacity
          onPress={handleLogout}
          className="bg-red-500 rounded-full px-8 py-3"
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;