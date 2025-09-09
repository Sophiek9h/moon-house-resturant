import React from 'react'
import { Tabs } from 'expo-router'


// const TabIcon = ({focused, icon, title}: {focused: boolean, icon: any, title: string}) => (
//     <View className='flex-1 mt-3 flex flex-col justify-center items-center'>
//         <Image source={icons} tintColor={focused? '#0061ff' : '#666876'} resizeMode='contain' className='size-6'/>
//         <Text className={`text-xs mt-1 w-full text-center ${focused? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik'}`}>{title}</Text>
//     </View>
// )

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Home",
                headerShown: false,
                // tabBarIcon: () => (
                //     // <TabIcon />
                // )
            }}

        />
    </Tabs>
  )
}

export default _layout