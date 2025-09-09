import React from 'react'
import { Tabs } from 'expo-router'
import { Image, Text, View } from 'react-native'
import icons from '@/constants/icons'


const TabIcon = ({focused, icon, title}: {focused: boolean, icon: any, title: string}) => (
    <View className='flex-1 mt-3 flex flex-col justify-center items-center'>
        <Image source={icon} tintColor={focused? '#000000' : '#666666'} resizeMode='contain' className='size-6'/>
        <Text className={`text-sm mt-1 w-full text-center ${focused? 'text-black-300 font-bold' : 'text-black-200 font-normal'}`}>{title}</Text>
    </View>
)

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={icons.home} title='Home'/>
                )
            }}
        />

        <Tabs.Screen 
            name="cart"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={icons.cart} title='Cart'/>
                )
            }}
        />

        <Tabs.Screen 
            name="profile"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon focused={focused} icon={icons.user} title='Profile'/>
                )
            }}
        />
    </Tabs>
  )
}

export default _layout