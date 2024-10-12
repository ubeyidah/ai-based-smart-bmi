import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type buttonType = {
  buttonStyle?: string;
  text: string;
  onPress: () => void;
  textStyle?: string;
  loading?: boolean;
};
const CustomButton = ({
  buttonStyle,
  text,
  onPress,
  textStyle,
  loading,
}: buttonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`w-full bg-white rounded-full flex items-center justify-center ${buttonStyle}`}
      disabled={loading}
    >
      <Text className={`text-center text-lg py-4 ${textStyle}`}>
        {loading ? <ActivityIndicator size={"small"} /> : text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
