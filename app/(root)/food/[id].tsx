import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { menueItems } from '@/constants/data';
import icons from '@/constants/icons';

const FoodDetails = () => {
  const { id, title, description, price, category, time, rating} = useLocalSearchParams();
  
  // Find the full item from your data
  const item = menueItems.find(menu => menu.title === id);

    const [quantity, setQuantity] = useState(1);
  
  // Extract numeric price (remove $ sign)
  const basePrice = item ? parseFloat(item.price.replace('$', '')) : 0;
  const totalPrice = (basePrice * quantity).toFixed(2);
  
  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-6">
        <View className='flex flex-row justify-between items-center'>
          {/* Back Button */}
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-10 h-10 justify-center items-center mt-4"
            activeOpacity={0.7}
          >
            <Image 
              source={icons.left} 
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
       
          <View className='flex flex-row gap-3 justify-center items-center'>
          <Image
            source={icons.redHeart}
            className='bg-slate-100 rounded-full p-2 w-10 h-10'
          />
          <Image
            source={icons.cart}
            resizeMode='contain'
          />
       </View>

        </View>

        {item && (
          <>

           <View className='mt-4 '>
              <Text className="text-base text-red-400 font-nunito-semibold mt-2">
                {item.description}
              </Text>
              <Text className="text-2xl font-nunito-bold mt-1">{item.title}</Text>
           </View>

            <Image
              source={item.image}
              className="w-full h-72 rounded-xl mt-4"
              resizeMode="cover"
            />

            <Text className='font-nunito-bold text-xl my-6 leading-6'>
              Description 
            </Text>
            
            <View className='flex flex-row justify-start items-center mb-6 gap-8'>
              <View className='flex flex-row justify-start items-center gap-2'>
                <Image 
                  source={icons.clock}
                  resizeMode='contain'
                  className='size-5'
                />
                <Text className='font-nunito-medium text-gray-600 leading-6'>
                  {item.time}
                </Text>
              </View>

              <View className='flex flex-row justify-start items-center gap-2'>
                <Image 
                  source={icons.star}
                  resizeMode='contain'
                  className='size-5'
                />
                <Text className='font-nunito-medium text-gray-600 leading-6'>
                  {item.rating}
                </Text>
              </View>
        
            </View>

            
              <Text className='font-nunito-regular text-gray-500 leading-6'>
                {item.details}
              </Text>
           
             {/* Counter Section */}
              <View className="flex-row justify-between items-center mt-10">
                <Text className="text-4xl font-nunito-bold">
                  ${totalPrice}
                </Text>
                
                <View className="flex-row items-center gap-4 rounded-full px-4 py-2">
                  
                  <TouchableOpacity 
                    onPress={handleIncrease}
                    className="w-8 h-8 bg-black rounded-full justify-center items-center"
                    activeOpacity={0.7}
                  >
                    <Text className="text-2xl font-nunito-bold text-white">+</Text>
                  </TouchableOpacity>
                  
                  <Text className="text-xl font-nunito-bold">{quantity}</Text>

                  <TouchableOpacity 
                    onPress={handleDecrease}
                    className="w-8 h-8 bg-black rounded-full justify-center items-center"
                    activeOpacity={0.7}
                  >
                    <Text className="text-2xl font-nunito-bold text-white">−</Text>
                  </TouchableOpacity>
                
                </View>
              </View>

            <TouchableOpacity 
              className="w-full bg-primaryRed rounded-full px-4 py-4 justify-center items-center mt-9 mb-10"
              activeOpacity={0.8}
            >
              <View className='flex flex-row justify-center items-center gap-3'>
                <Image
                  source={icons.cart}
                  resizeMode="contain"
                  className=" color-white"
                  style={{ tintColor: "white" }}
                />
                <Text className="text-white text-lg font-nunito-bold">
                Add to Cart
              </Text>
              </View>
              
            </TouchableOpacity>
            
          </>
        )}



      </ScrollView>
    </SafeAreaView>
  );
};

export default FoodDetails;