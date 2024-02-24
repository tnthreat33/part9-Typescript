// calculateBmiScript.ts

import calculateBmi from './bmiCalculator';

const height: number = 181; // in centimeters
const weight: number = 74;  // in kilograms

const result: string = calculateBmi(height, weight);

console.log(result);
