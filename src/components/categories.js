import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Categories({ setActiveCaegory, activeCategory }) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categoryData.map((ceta, index) => {
          let isActive = ceta.name == activeCategory;
          let activeButtonClass = isActive ? "bg-white" : "bg-black/30";

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCaegory(ceta.name)}
              className="flex items-center justify-center space-y-1"
            >
              <View className={"rounded-full p-[6px] " + activeButtonClass}>
                <Image
                  source={{ uri: ceta.image }}
                  style={{ width: hp(7), height: hp(7) }}
                  className="rounded-full "
                />
              </View>
              <Text className="text-white" style={{ fontSize: hp(1.6) }}>
                {ceta.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
