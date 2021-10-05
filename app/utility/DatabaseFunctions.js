import PouchDB from 'pouchdb-react-native'
import { calculateWellnessDecreasing, isDead } from './ExtensionFunctions';

const db = new PouchDB('pixiPetDb')

export function syncData(setWellnessStats) {
    console.log('syncing');
    db.get('X')
    .then((wellnessObj)=>{
        wellnessObj = calculateWellnessDecreasing(wellnessObj);
        setWellnessStats(wellnessObj);
        updateData(wellnessObj);
        console.log('then');
    }).catch((e)=>{
        console.log(e);
        startOver(setWellnessStats);
    })
}

export function updateData(wellnessObj) {
    db.get('X').then((doc)=>{
        db.remove(doc).then(()=>{
            console.log('removed');    
            db.put({
                _id: 'X',
                hungerState: wellnessObj.hungerState,
                thirstState: wellnessObj.thirstState,
                dirtyState:wellnessObj.dirtyState,
                lonelyState:wellnessObj.lonelyState,
                time: new Date()
              }).catch(function(error) {
                console.log('There has been a problem with your put operation: ' + error.message);
                 // ADD THIS THROW error
                  throw error;
                });;
            console.log('putted');
        }).catch(function(error) {
            console.log('There has been a problem with your remove operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });;
    }).catch(function(error) {
        console.log('There has been a problem with your get operation: ' + error.message);
         // ADD THIS THROW error#
         db.put({
            _id: 'X',
            hungerState: wellnessObj.hungerState,
            thirstState: wellnessObj.thirstState,
            dirtyState:wellnessObj.dirtyState,
            lonelyState:wellnessObj.lonelyState,
            time: new Date()
          }).catch(function(error) {
            console.log('There has been a problem with your put operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
        });;
    
}

export function startOver(setWellnessStats){
    console.log("STARTINGOVER")
    var wellnessObj = {
        hungerState: 60,
        thirstState: 70,
        dirtyState:100,
        lonelyState:80
    }
    setWellnessStats(wellnessObj);
    updateData(wellnessObj);
}