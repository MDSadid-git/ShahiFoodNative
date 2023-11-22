import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {
  useSharedValue,
  withSpring,
  FadeIn,
  HeartIcon,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
} from "react-native-heroicons/outline";

export default function LoginScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // setTimeout(() => navigation.navigate("Home"), 6000);
  }, []);
  return (
    <View
      className="bg-pink-500"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="p-2 rounded-full mb-5 bg-white"
      >
        <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={{ position: "relative", width: 300 }}>
        <View
          style={{ borderWidth: 2, borderRadius: 16, borderColor: "#E5E7EB" }}
        >
          <Image
            source={require("../../assets/images/Welcome.jpg")} // Replace with the actual path to your profile image
            style={{ width: "100%", height: 160, borderRadius: 16 }}
          />
          <View style={{ padding: 20 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              MD Sadid
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              @Programmer |{" "}
              <Text style={{ color: "black" }}>Sadid@gmail.com</Text>
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 15,
              }}
            >
              {/* Your social media icons go here */}
            </View>
          </View>
          <View
            className="mb-3"
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                2.4M
              </Text>
              <Text>Fans</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                202
              </Text>
              <Text>Followings</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                552
              </Text>
              <Text>Posts</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
