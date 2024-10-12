import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const AppInfo = () => {
  return (
    <ScrollView>
      <View className="flex-1 p-4 bg-white">
        <Text className="text-2xl font-bold text-center text-primary my-4">
          What is BMI?
        </Text>
        <Text className="text-base text-gray-600 mb-4">
          Body Mass Index (BMI) is a simple calculation based on a person’s
          height and weight. It helps identify weight categories that may lead
          to health problems. Although BMI does not directly measure body fat,
          it is a reliable indicator of whether a person is underweight, normal
          weight, overweight, or obese. Our app also provides AI-based advice to
          help you maintain a healthy lifestyle.
        </Text>

        <Text className="text-xl font-semibold text-black mb-2">
          Why Should I Calculate My BMI?
        </Text>
        <Text className="text-base text-gray-600 mb-4">
          Knowing your BMI can help you better understand your overall health.
          Tracking BMI helps you recognize whether you need to gain or lose
          weight to improve your health and fitness. It’s a quick and easy way
          to assess whether you are at risk for certain weight-related
          conditions such as heart disease or diabetes.
        </Text>

        <Text className="text-xl font-semibold text-black mb-2">
          What Do the BMI Values Mean?
        </Text>
        <Text className="text-base text-gray-600 mb-4">
          - <Text className="font-bold">Underweight:</Text> BMI less than 18.5
          {"\n"}- <Text className="font-bold">Normal weight:</Text> BMI between
          18.5 and 24.9{"\n"}- <Text className="font-bold">Overweight:</Text>{" "}
          BMI between 25 and 29.9{"\n"}-{" "}
          <Text className="font-bold">Obesity:</Text> BMI of 30 or greater
        </Text>

        <Text className="text-xl font-semibold text-black mb-2">
          Limitations of BMI
        </Text>
        <Text className="text-base text-gray-600 mb-4">
          BMI does not account for muscle mass, bone density, or overall body
          composition. As a result, athletes and individuals with a muscular
          build may have a high BMI but still be healthy. It’s important to use
          BMI as a general guide alongside other measurements of health.
        </Text>

        <Text className="text-xl font-semibold text-black mb-2">
          Copyright & Terms
        </Text>
        <Text className="text-base text-gray-600 mb-4">
          © 2024 Smart BMI App. All rights reserved. Developed by Ubeyid Oumer.
        </Text>

        <Text className="text-center text-sm text-gray-400 mt-8">
          Version 1.0.0
        </Text>
        <StatusBar backgroundColor="#fff" style="dark" />
      </View>
    </ScrollView>
  );
};

export default AppInfo;
