import Cards from "@/components/Cards";
import FoodCategory from "@/components/FoodCategory";
import icons from "@/constants/icons";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="mx-4">
      {/* welcome header */}
      <View className="flex flex-row justify-between items-center mt-16">
        <View className="flex flex-col ">
          <Text className="font-nunito-bold text-2xl">
            Good Morning Sophia
          </Text>
          <Text className="text-base font-nunito-light mt-1">
            Check out today’s Menu
          </Text>
        </View>

        <View className="flex flex-row gap-3">
          <Image source={icons.search} className="size-5"/>
          <Image source={icons.bell} className="size-5"/>
        </View>
      </View>

      {/* menu header */}
      <View className="flex flex-row justify-between items-center mt-8">
        <Text className="text-lg font-nunito-extrabold">
          Moon House Menu
        </Text>

        <View className="flex flex-row justify-between items-center gap-4">
          <Text className="font-nunito-light text-sm">See all</Text>
          <Image source={icons.right} className="size-3" resizeMode="contain"/>
        </View>
      </View>

      {/* food category */}
      <FoodCategory/>

      {/* cards */}
      <Cards/>

      {/* <PopularCards/> */}

    </ScrollView>
  );
}
