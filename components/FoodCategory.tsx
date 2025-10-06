import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useMemo, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const FoodCategory = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
  params.filter || "All"
);

useEffect(() => {
  if (!params.filter) {
    setSelectedCategory("All");
  }
}, [params.filter]);

const handleCategory = (category: string) => {
  if (selectedCategory === category && category !== "All") {
    setSelectedCategory("All");
    router.setParams({ filter: "All" });
  } else {
    setSelectedCategory(category);
    router.setParams({ filter: category });
  }
};

  // Ensure selected category always comes first
  const sortedCategories = useMemo(() => {
    return [
      ...categories.filter((c) => c.category === selectedCategory),
      ...categories.filter((c) => c.category !== selectedCategory),
    ];
  }, [selectedCategory]);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4 mb-2"
      >
        {sortedCategories.map((items, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategory(items.category)}
            className={`flex flex-row gap-2 mr-3 px-5 py-4 rounded-full font-nunito ${
              selectedCategory === items.category ? "bg-primaryRed" : "bg-red-100"
            }`}
          >
            {/* Show icon if available */}
            {items.image && (
              <Image
                source={items.image}
                resizeMode="contain"
                className="size-5"
                tintColor={
                  selectedCategory === items.category ? "#FFFFFF" : "red"
                }
              />
            )}

            {/* Show text if selected OR if it's "All" */}
            {(selectedCategory === items.category || items.category === "All") && (
              <Text
                className={`${
                  selectedCategory === items.category
                    ? "text-white font-nunito-bold"
                    : "text-red-600 font-nunito-bold"
                }`}
              >
                {items.title}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodCategory;
