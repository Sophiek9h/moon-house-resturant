import { Cards, PopularCards } from "@/components/Cards";
import FoodCategory from "@/components/FoodCategory";
import { menueItems } from "@/constants/data";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const {user} = useGlobalContext();

  const getGreeting = () => {
  const hour = new Date().getHours();
  
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <SafeAreaView className="mx-6 mt-6">
      <FlatList
        data={[1]}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={() => <PopularCards />}
        contentContainerStyle={{ paddingBottom: 0 }}
        ListHeaderComponent={
          <>
            {/* welcome header */}
            {user && ( 
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-col ">
                <Text className="font-nunito-bold text-2xl">
                  {getGreeting()} {user.displayName?.split(' ')[1]|| 'User'}
                </Text>
                <Text className="text-base font-nunito-light mt-1">
                  Check out today’s Menu
                </Text>
              </View>

              <View className="flex flex-row gap-3">
                <Image source={icons.search} className="size-5" />
                <Image source={icons.bell} className="size-5" />
              </View>
            </View>
            )}

            {/* menu header */}
            <View className="flex flex-row justify-between items-center mt-5">
              <Text className="text-xl font-nunito-bold">Moon House Menu</Text>

              <View className="flex flex-row justify-between items-center gap-4">
                <Text className="font-nunito-light text-sm">See all</Text>
                <Image
                  source={icons.right}
                  className="size-3"
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* food category */}
            <FoodCategory />

            <FlatList
              data={menueItems}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-2"
              contentContainerStyle={{
                paddingRight: 20,
                gap: 10,
              }}
              renderItem={({ item }) => (
                <Cards
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )}
            />

            {/* <PopularCards/> */}
            <Text className="text-xl font-nunito-bold mt-5">
              Popular Breakfast
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
}
