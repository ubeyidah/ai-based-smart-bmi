import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CircleIconButton = ({
  icon,
  onPress,
}: {
  icon: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-primary rounded-full w-10 h-10 flex items-center justify-center"
      onPress={onPress}
    >
      <Text className="text-3xl font-bold text-white ">{icon}</Text>
    </TouchableOpacity>
  );
};

export default CircleIconButton;

const styles = StyleSheet.create({});
