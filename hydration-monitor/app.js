const prompt = require('prompt-sync')({sigint:true});

function getValidatedName(){
    const name = prompt("Enter your name: ").trim();
    if(!name){
        console.log("Name cannot be empty. Please try again.");
        return null;
    }
    return name;
}

function getValidatedWeight(){
    const weightInput = prompt("Enter your weight in kg: ").trim();
    const parsedWeight = parseFloat(weightInput);

    if(isNaN(parsedWeight) || parsedWeight <= 0 || parsedWeight > 300){
        console.log("Invalid weight. Weight must be a positive number below 300kg.");
        return null;
    }
    return parsedWeight;
}

function  getValidatedActivityLevel(){
    const activityLevel = prompt("Enter your activity level (low, medium, high): ").trim().toLowerCase();

    const validLevels = ["low", "medium", "high"];

    if(!validLevels.includes(activityLevel)){
        console.log("Invalid activity level. Please enter 'low', 'medium', or 'high'.");
        return null;
    }
    return activityLevel;
}


function printUserInfo(){
    console.log("======================================");
    console.log("WELCOME TO OUMISSA INSPIRE HYDRATION MONITOR");
    console.log("======================================");

    let validatedName = getValidatedName();

    if(validatedName === null){
        return;
    }

    let validatedWeight = getValidatedWeight();

    if(validatedWeight === null){
        return;
    }

    let validatedActivityLevel = getValidatedActivityLevel();

    if(validatedActivityLevel === null){
        return;
    }

    console.log("Here is your information.");
    console.log(`Name: ${validatedName}`);
    console.log(`Weight: ${validatedWeight} kg`);
    console.log(`Activity Level: ${validatedActivityLevel}`);
}

printUserInfo();