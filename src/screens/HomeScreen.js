import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function HomeScreen() {
  return (
    <View className="bg-pink-500">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6"
      />

      {/* All Imgage and bell icon area start */}
      <View className="mx-4 flex-row justify-between items-center mb-2">
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{ width: hp(20), height: hp(20) }}
        />
      </View>
      {/* All Imgage and bell icon area end */}
      <Text>Home Screen</Text>
    </View>
  );
}
