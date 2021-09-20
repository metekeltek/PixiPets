import PouchDB from 'pouchdb-react-native'
import { calculateWellnessDecreasing } from './ExtensionFunctions';

const db = new PouchDB('pixiPetDb')

export function syncData(setWellnessStats) {
    console.log('syncing');
    db.get('1')
    .then((wellnessObj)=>{
        wellnessObj = calculateWellnessDecreasing(wellnessObj);
        setWellnessStats(wellnessObj);
        updateData(wellnessObj);
        console.log('then');
    }).catch(()=>{
        console.log("catch");
        var wellnessObj = {
            hungerState: 60,
            thirstState: 70,
            dirtyState:100,
            lonelyState:80
        }
        setWellnessStats(wellnessObj);
        updateData(wellnessObj);
    })
}

export function updateData(wellnessObj) {
    db.get('1').then((doc)=>{
        db.remove(doc).then(()=>{
            console.log('removed');
            db.put({
                _id: '1',
                hungerState: wellnessObj.hungerState,
                thirstState: wellnessObj.thirstState,
                dirtyState:wellnessObj.dirtyState,
                lonelyState:wellnessObj.lonelyState,
                time: new Date().getDate()
              });
            console.log('putted');
        });
    });
    
}