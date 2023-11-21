import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  BellIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/outline";

export default function HomeScreen() {
  return (
    <View className="bg-pink-500 ">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-7"
      >
        {/* All Imgage and bell icon area start */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ width: hp(5), height: hp(5) }}
          />
          <BellIcon size={hp(4)} color={"white"} />
        </View>
        {/* All Imgage and bell icon area end */}

        {/* Greeting area start  */}
        <View className="mx-4 space-y-2 mb-2">
          <Text className="text-white mt-3 font-bold text-lg">Hi, Sadid</Text>
          <Text className="text-white mt-3 font-bold text-2xl">
            Make Your own <Text className="text-pink-500 bg-white">Food</Text>
          </Text>
        </View>
        {/* Greeting area end */}

        {/* search area start */}
        <View className="max-4 flex-row justify-between items-center rounded-full bg-gray-100 p-[6px] m-3 ">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            className="pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-2">
            <MagnifyingGlassCircleIcon
              size={hp(3.5)}
              strokeWidth={2}
              color={"gray"}
            />
          </View>
        </View>
        {/* search area end */}
      </ScrollView>
    </View>
  );
}
