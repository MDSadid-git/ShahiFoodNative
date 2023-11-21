import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

export default function SingUpScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // setTimeout(() => navigation.navigate("Home"), 6000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-pink-500">
      <View
        style={{
          borderRadius: 16,
          padding: 16,
        }}
      >
        <Text
          style={{ fontSize: 30, textAlign: "center" }}
          className="text-white font-bold "
        >
          Register
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Text className="text-white">Name</Text>
          <TextInput
            className="bg-white/90 mt-1"
            style={{
              borderWidth: 1,
              borderColor: "#A1A1AA",
              borderRadius: 8,
              padding: 8,
            }}
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text className="text-white">Email</Text>
          <TextInput
            className="bg-white/90 mt-1"
            style={{
              borderWidth: 1,
              borderColor: "#A1A1AA",
              borderRadius: 8,
              padding: 8,
            }}
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text className="text-white">Password</Text>
          <TextInput
            className="bg-white/90 mt-1"
            style={{
              borderWidth: 1,
              borderColor: "#A1A1AA",
              borderRadius: 8,
              padding: 8,
            }}
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          className="bg-white/90 mt-1"
          style={{
            padding: 12,
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          <Text
            onPress={() => navigation.navigate("Home")}
            className="text-pink-500 font-bold py-[2px]"
            style={{ textAlign: "center" }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <Text
          className="text-white/90 "
          style={{ marginTop: 10, textAlign: "center" }}
        >
          Already have an account{" "}
          {/* Consider using React Navigation for navigation */}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ color: "black" }}
          >
            Please Login
          </Text>
        </Text>
        <View style={{ borderBottomWidth: 1, marginVertical: 10 }} />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "white",
            padding: 12,
            borderRadius: 8,
            marginTop: 10,
          }}
        >
          <Text
            onPress={() => navigation.navigate("Home")}
            style={{ color: "white", textAlign: "center" }}
          >
            Skip Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
