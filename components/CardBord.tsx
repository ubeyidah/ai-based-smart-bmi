import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

type cardBordType = {
  focused: boolean;
  error: boolean;
  type: string;
  onPress: () => void;
};
const CardBord = ({ type, focused, error, onPress }: cardBordType) => {
  const uri =
    type == "male"
      ? require("./../assets/images/male.png")
      : require("./../assets/images/female.png");
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-secondary rounded-lg shadow-xl w-[48%] border-slate-200/70 flex items-center py-4 border-2 ${
        focused ? "border-primary/70 " : ""
      } ${error ? "border-red-600/70" : ""}`}
      onPress={onPress}
    >
      <Image resizeMode="contain" source={uri} className="w-12" />
      <Text className="text-[16px] capitalize">{type}</Text>
    </TouchableOpacity>
  );
};

export default CardBord;

const styles = StyleSheet.create({});
