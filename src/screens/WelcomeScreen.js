import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const ring1padding1 = useSharedValue(0);
  const ring1padding2 = useSharedValue(0);
  const navigation = useNavigation();

  useEffect(() => {
    ring1padding1.value = 0;
    ring1padding2.value = 0;

    setTimeout(
      () => (ring1padding2.value = withSpring(ring1padding2.value + hp(6))),
      300
    );
    setTimeout(
      () => (ring1padding1.value = withSpring(ring1padding1.value + hp(5))),
      100
    );
    setTimeout(() => navigation.navigate("Home"), 2000);
  }, []);
  return (
    <View className="bg-pink-500 flex-1 justify-center items-center space-y-10">
      <StatusBar style="light" />

      {/* logo image area with rings */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring1padding1 }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring1padding2 }}
        >
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>
      {/* title and punchline area */}
      <View className="flex items-center space-y-2">
        <Text className="font-bold text-3xl text-white/80">Shahi Foods</Text>
        <Text className="font-bold text-lg text-white/80">
          Food is always right
        </Text>
      </View>
    </View>
  );
}
