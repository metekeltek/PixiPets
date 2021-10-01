export function calculateWellnessDecreasing(wellnessObj){
    var hours = hoursBetweenTodayAndDate(wellnessObj.time);

    if(isDead(wellnessObj)){
        return wellnessObj;
    }

    wellnessObj.hungerState = wellnessObj.hungerState - (2.5 * hours);
    wellnessObj.thirstState = wellnessObj.thirstState - (3 * hours);
    wellnessObj.dirtyState = wellnessObj.dirtyState - (2.1 * hours);
    wellnessObj.lonelyState = wellnessObj.lonelyState - (1.8 * hours);
  
    return wellnessObj;
}

export function hoursBetweenTodayAndDate(date){
    var diff = Math.abs(new Date() - new Date(date));
    var minutes = Math.floor((diff/1000)/60) ;
    var hours = Math.floor(minutes) / 60;

    return hours;
}

export function isDead(wellnessObj){
    if(wellnessObj.hungerState == 0 || wellnessObj.thirstState == 0 || wellnessObj.lonelyState == 0){
        return true;
    }else{
        return false;
    }
}