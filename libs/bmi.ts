export const calculateBMI = (weightKg: number, heightCm: number): number => {
  const heightMeter = heightCm / 100;
  const bmi = weightKg / (heightMeter * heightMeter);
  return parseFloat(bmi.toFixed(2));
};

export const identifyBMICategory = (bmi: number): string => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
};

export const identifyBMICategoryIndex = (bmi: number): number => {
  if (bmi < 18.5) {
    return 0;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 1;
  } else if (bmi >= 25 && bmi < 29.9) {
    return 2;
  } else {
    return 3;
  }
};
