import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import Card from "@/components/Card";
import CardBord from "@/components/CardBord";
import { useRouter } from "expo-router";

const page = () => {
  const [userInfo, setuserInfo] = useState({
    age: "25",
    weight: "50",
    height: "",
    gender: "",
  });
  const router = useRouter();
  const addOrRemove = (value: number, type: "age" | "weight") => {
    if (value == -1) {
      if (+userInfo[type] <= 1) return;
      setuserInfo((prev) => ({
        ...prev,
        [type]: (+prev[type] - 1).toString(),
      }));
    } else if (value == 1) {
      if (
        (type == "age" && userInfo.age.length > 3) ||
        (type == "weight" && userInfo.weight.length > 4)
      )
        return;
      setuserInfo((prev) => ({
        ...prev,
        [type]: (+prev[type] + 1).toString(),
      }));
    }
  };

  const calculate = () => {
    if (
      !userInfo.age ||
      !userInfo.weight ||
      !userInfo.height ||
      !userInfo.gender
    ) {
      alert("Please fill all the fields to calculate your BMI");
      return;
    }
    router.push({
      pathname: "/result",
      params: { data: JSON.stringify(userInfo) },
    });
  };
  return (
    <SafeAreaView className="bg-mainbg h-full">
      <ScrollView className="px-3">
        <View className="h-[90vh] flex justify-center">
          <View className="flex flex-row justify-between w-full">
            <Card
              title="Age"
              selector="age"
              onAdd={addOrRemove}
              onRemove={addOrRemove}
              value={userInfo.age}
              onChangeText={(value) =>
                setuserInfo((prev) => ({ ...prev, age: value }))
              }
            />
            <Card
              title="Weight (KG)"
              selector="weight"
              onAdd={addOrRemove}
              onRemove={addOrRemove}
              value={userInfo.weight}
              onChangeText={(value) =>
                setuserInfo((prev) => ({ ...prev, weight: value }))
              }
            />
          </View>
          <View className="relative">
            <TextInput
              placeholder="Enter your height in cm"
              className="w-full text-lg bg-secondary border border-slate-200/70 py-3 px-4 rounded-lg mt-6 focus:border-primary/70"
              cursorColor="#6C63FF"
              autoCorrect
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={userInfo.height}
              onChangeText={(value) =>
                setuserInfo((prev) => ({ ...prev, height: value }))
              }
            />
            <Text className="absolute right-1 bg-mainbg top-7 rounded-md text-lg font-bold py-2 px-4 border-slate-200/70 shadow-xl">
              CM
            </Text>
          </View>
          <View className="flex flex-row justify-between w-full mt-6">
            <CardBord
              type="male"
              error={false}
              focused={userInfo.gender == "male"}
              onPress={() =>
                setuserInfo((prev) => ({ ...prev, gender: "male" }))
              }
            />
            <CardBord
              type="female"
              error={false}
              focused={userInfo.gender == "female"}
              onPress={() =>
                setuserInfo((prev) => ({ ...prev, gender: "female" }))
              }
            />
          </View>

          <CustomButton
            text="Calculate"
            onPress={calculate}
            buttonStyle="bg-primary mt-auto mb-10"
            textStyle="text-white"
          />
        </View>
        <StatusBar backgroundColor="#F4F3FF" style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default page;

const styles = StyleSheet.create({});
