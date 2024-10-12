import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

const RootLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="bmi"
        options={{
          title: "SMART BMI CALCULATOR",
          headerStyle: {
            backgroundColor: "#F4F3FF",
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          gestureEnabled: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/info")}
              className="flex items-center border rounded-full w-6 h-6 border-blue-500"
            >
              <Text className="text-lg font-bold text-blue-500 -mt-1">!</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="info"
        options={{
          presentation: "modal",
          headerShadowVisible: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="result"
        options={{
          presentation: "modal",
          headerShadowVisible: false,
          title: "",
        }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
