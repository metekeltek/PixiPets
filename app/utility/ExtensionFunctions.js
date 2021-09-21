export function calculateWellnessDecreasing(wellnessObj){
    var hours = hoursBetweenTodayAndDate(wellnessObj.time);
    console.log(wellnessObj.hungerState);
    console.log(wellnessObj.thirstState);
    console.log(wellnessObj.dirtyState);
    console.log(wellnessObj.lonelyState);

    wellnessObj.hungerState = wellnessObj.hungerState - (1.5 * hours);
    wellnessObj.thirstState = wellnessObj.thirstState - (2 * hours);
    wellnessObj.dirtyState = wellnessObj.dirtyState - (1.1 * hours);
    wellnessObj.lonelyState = wellnessObj.lonelyState - (0.8 * hours);

    console.log("after");
    console.log(wellnessObj.hungerState);
    console.log(wellnessObj.thirstState);
    console.log(wellnessObj.dirtyState);
    console.log(wellnessObj.lonelyState);

    
    return wellnessObj;
}

export function hoursBetweenTodayAndDate(date){
    var diff = Math.abs(new Date() - new Date(date));
    var minutes = Math.floor((diff/1000)/60) ;
    var hours = Math.floor(minutes) / 60;

    return hours;
}