import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'

interface CardProps {
    title: string,
    description: string,
    price: string,
    image: any
}

export const Cards = ({title, description, price, image}: CardProps) => {
  return (
    <TouchableOpacity className='flex flex-col bg-white w-52 h-72 rounded-xl px-4 py-4 mt-2 shadow-sm shadow-gray-200'>
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
            <Text className='font-nunito-extrabold text-2xl '>{price}</Text>
            <TouchableOpacity className='w-10 h-10 bg-red-700 px-3 py-2 rounded-full justify-center'>
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
    return(
        <TouchableOpacity className='flex flex-col bg-white w-full rounded-xl px-4 py-4 mt-4 shadow-sm shadow-gray-200'>
          <Image
            source={images.eggPlate}
            resizeMode="cover"
            className="w-full h-48 rounded-xl "
          />
          <Text className='font-nunito-bold text-2xl mt-3'>
          Kiki’s Special Breakfast
       </Text>
       <Text className='font-nunito-regular text-sm leading-6 text-gray-500 my-2'>
          Fluffy sunny-side up eggs, sausages, toast, crispy bacon, sweet beans and fresh tomatoes
        </Text> 
        <View className='flex flex-row justify-between items-center mt-1'>
            <Text className='font-nunito-extrabold text-3xl'>$5.99</Text>
            <TouchableOpacity className='w-fit h-12 bg-red-700 px-3 py-2 rounded-full justify-center'>
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

