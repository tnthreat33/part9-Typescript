const calculateBmi = (height:number, weight:number) => {
    let bmi = height/weight^2 
    if(bmi > 18.5){
        return "under weight"
    }else if (bmi>= 18.5 && bmi<25){
        return("normal weight")
    }else if(bmi>= 25 && bmi<30){
        return "overweight"
    }else{
        return "obese"
    }
  }

  console.log(calculateBmi(180,74))
  