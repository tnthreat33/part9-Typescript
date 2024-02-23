interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (hours: number[], target: number): Result => {
    const periodLength: number = hours.length;
    const trainingDays: number = hours.filter(hour => hour > 0).length;
    const sum: number = hours.reduce((a, b) => a + b, 0);
    const average: number = sum / periodLength;
    const success: boolean = average >= target;

    let rating: number;
    let ratingDescription: string;
    if (average < target / 2) {
        rating = 1;
        ratingDescription = 'not so good, you should try harder';
    } else if (average < target) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    } else {
        rating = 3;
        ratingDescription = 'excellent, you achieved your target';
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
}

console.log(calculateExercises([5,4,5,5,5,1], 5))

export default calculateExercises;
