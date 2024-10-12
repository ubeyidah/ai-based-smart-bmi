import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CircleIconButton from "./CircleIconButton";

type cardType = {
  value: string;
  onChangeText: (value: string) => void;
  title: string;
  onRemove: (value: number, type: "age" | "weight") => void;
  onAdd: (value: number, type: "age" | "weight") => void;
  selector: "age" | "weight";
};
const Card = ({
  value,
  onChangeText,
  title,
  onRemove,
  onAdd,
  selector,
}: cardType) => {
  return (
    <View className="bg-secondary rounded-lg shadow-xl w-[48%] border border-slate-200/70 flex items-center py-4">
      <Text className="text-lg mb-3">{title}</Text>
      <TextInput
        cursorColor="#ccc"
        onChangeText={onChangeText}
        className="text-5xl font-extrabold text-primary"
        value={value}
      />
      <View className="flex flex-row justify-evenly w-full mt-2">
        <CircleIconButton icon="-" onPress={() => onRemove(-1, selector)} />
        <CircleIconButton icon="+" onPress={() => onAdd(+1, selector)} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
