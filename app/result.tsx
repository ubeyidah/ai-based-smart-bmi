import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";
import { calculateBMI, identifyBMICategory } from "@/libs/bmi";
import BmiChart from "@/components/BmiChart";
import CustomButton from "@/components/CustomButton";
import { isOnline } from "@/libs/utils";
import Markdown from "react-native-markdown-display";

type dataType = {
  height: string;
  weight: string;
  age: string;
  gender: string;
};

const ResultPage = () => {
  const { data } = useLocalSearchParams();
  const info: dataType = JSON.parse(data as string);
  const bmi = calculateBMI(+info.weight, +info.height);
  const resultText = identifyBMICategory(bmi);
  const [advice, setAdvice] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const genAdvice = async () => {
    try {
      setLoading(true);
      const hasInternet = await isOnline();
      if (!hasInternet) {
        return alert(
          "You are offline. Connect to the internet to get AI Powered Advice."
        );
      }
      const uri =
        "https://smart-bmi-calculator-api-advice-1.onrender.com/advice";
      const res = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bmi,
          height: info.height,
          weight: info.weight,
          age: info.age,
          gender: info.gender,
        }),
      });
      const data = await res.json();
      setAdvice(data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="h-full flex justify-center px-4">
        <View className="mx-auto mt-6">
          <BmiChart bmi={bmi} />
          <Text className="text-2xl font-bold text-center text-primary mt-6">
            Your BMI Result is {bmi}
          </Text>
          <Text className="text-md text-center text-gray-500">
            which is in the {resultText} range.
          </Text>
        </View>
        {!advice && (
          <CustomButton
            text="Get AI Powered Advice"
            onPress={genAdvice}
            buttonStyle="bg-primary mt-[420px]"
            textStyle="text-sm text-white"
            loading={loading}
          />
        )}
        {advice && (
          <View className="mt-8">
            <Markdown
              style={{
                heading1: { fontSize: 20, fontWeight: "bold", color: "#333" },
                heading2: { fontSize: 20, fontWeight: "bold", color: "#333" },
              }}
            >
              {advice}
            </Markdown>
          </View>
        )}
        <StatusBar backgroundColor="#fff" style="dark" />
      </View>
    </ScrollView>
  );
};

export default ResultPage;
