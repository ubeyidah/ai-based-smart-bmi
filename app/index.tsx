import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView className="h-full bg-primary">
      <SafeAreaView className="px-5 flex justify-center h-[100vh]">
        <View className="flex flex-row items-center gap-1 mb-20">
          <Image
            resizeMode="contain"
            className="w-14 h-12"
            source={require("../assets/images/android-chrome-512x512.png")}
          />
          <Text className="text-secondary font-bold text-2xl">SMART BMI</Text>
        </View>
        <Image
          resizeMode="contain"
          className="w-[296px] h-[251px] mb-16"
          source={require("../assets/images/fitness.png")}
        />
        <Text className="w-full text-3xl text-secondary font-extrabold mb-4">
          Get Started with Tracking Your Health!
        </Text>
        <Text className="text-[#C6C3F9] mb-12 text-[15px]">
          Your personalized BMI calculator and health advisor powered by AI.
          Calculate your BMI quickly and receive expert advice tailored to your
          health goals.
        </Text>
        <CustomButton
          text="Get Started"
          onPress={() => {
            router.push("/bmi");
          }}
        />
        <StatusBar backgroundColor="#6C63FF" style="light" />
      </SafeAreaView>
    </ScrollView>
  );
};

export default index;
