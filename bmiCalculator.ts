const calculateBmi = (heightCm: number, weightKg: number): string => {
    
    const heightM: number = heightCm / 100;
    const bmi: number = weightKg / (heightM * heightM);

    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 24.9) {
        return "Normal (healthy weight)";
    } else if (bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

export default calculateBmi;
