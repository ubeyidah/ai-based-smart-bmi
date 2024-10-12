import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { identifyBMICategoryIndex } from "@/libs/bmi";

const BmiChart = ({ bmi }: { bmi: number }) => {
  const stylesLists = [
    "absolute left-[100px] bottom-4 -rotate-[60deg]",
    "absolute left-[142px] bottom-12 -rotate-[30deg]",
    "absolute right-[142px] bottom-12 rotate-[30deg]",
    "absolute right-[100px] bottom-4 rotate-[60deg]",
  ];
  const index = identifyBMICategoryIndex(bmi);
  const styleCSS = stylesLists[index];

  return (
    <View className="relative origin-bottom">
      <Image
        source={require("../assets/images/bmi-scale.png")}
        resizeMode="contain"
      />
      <View className={styleCSS}>
        <Text className="text-lg">🩸</Text>
      </View>
    </View>
  );
};

export default BmiChart;

const styles = StyleSheet.create({});
