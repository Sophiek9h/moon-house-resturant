import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { menueItems } from '@/constants/data'

interface CardProps {
  title: string,
  description: string,
  price: string,
  image: any,
  category?: string
}

export const Cards = ({title, description, price, image, category}: CardProps) => {
  const handlePress = () => {
    router.push({
      pathname: "/(root)/food/[id]",
      params: {
        id: title,
        title,
        description,
        price,
        category: category || 'general'
      }
    });
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      className='flex flex-col bg-white w-52 h-72 rounded-xl px-4 py-4 mt-2 shadow-sm shadow-gray-200'
      activeOpacity={0.8}
    >
      <Image
        source={image}
        resizeMode="contain"
        className="w-full h-36 rounded-xl"
      />
      <Text className='font-nunito-semibold text-lg mt-2 ' numberOfLines={1}>
        {title}
      </Text>
      <Text className='font-nunito-regular text-gray-500 my-1' numberOfLines={1}>
        {description}
      </Text>
      <View className='flex flex-row justify-between items-center mt-2'>
        <Text className='font-nunito-extrabold text-2xl '>${price}</Text>
        <TouchableOpacity className='w-10 h-10 bg-primaryRed px-3 py-2 rounded-full justify-center'>
          <Image
            source={icons.plus}
            resizeMode="contain"
            className="size-4 tint-white"
            style={{ tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export const PopularCards = () => {
  // Get a featured/popular item from your data
  const popularItem = menueItems.find(item => item.category === 'breakfast') || menueItems[0];
  
  const handlePress = () => {
    router.push({
      pathname: "/(root)/food/[id]",
      params: {
        id: popularItem.title,
        title: popularItem.title,
        description: popularItem.description,
        price: popularItem.price,
        category: popularItem.category
      }
    });
  };

  return(
    <TouchableOpacity 
      onPress={handlePress}
      className='flex flex-col bg-white w-full rounded-xl px-4 py-4 mt-4 shadow-sm shadow-gray-200'
      activeOpacity={0.8}
    >
      <Image
        source={popularItem.image}
        resizeMode="cover"
        className="w-full h-48 rounded-xl "
      />
      <Text className='font-nunito-bold text-2xl mt-3'>
        {popularItem.title}
      </Text>
      <Text className='font-nunito-regular text-sm leading-6 text-gray-500 my-2'>
        {popularItem.description}
      </Text>
      <View className='flex flex-row justify-between items-center mt-1'>
        <Text className='font-nunito-extrabold text-3xl'>${popularItem.price}</Text>
        <TouchableOpacity className='w-fit h-12 bg-primaryRed px-3 py-2 rounded-full justify-center'>
          <View className='flex flex-row justify-center items-center gap-2'>
            <Image
              source={icons.cart}
              resizeMode="contain"
              className="size-6 color-white"
              style={{ tintColor: "white" }}
            />
            <Text className='text-white font-nunito text-sm'> Add to cart </Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}