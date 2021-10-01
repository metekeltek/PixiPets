import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';


function ViewGifScreen(props) {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.gifContainer}>
            <TouchableWithoutFeedback 
            onPressIn={() => {
                setIsEnabled(previousState => !previousState);
            }}
            onPressOut={() => {
                setIsEnabled(previousState => !previousState);
            }}>
            {renderElement(isEnabled, props.data)}
            </TouchableWithoutFeedback>
        </View>
    );
}

function renderElement(isEnabled, propsData){
    if(propsData.feeding || propsData.drinking || propsData.washing || propsData.playing){
        if(propsData.feeding){
            return (<Image resizeMode='contain' style={styles.gif} source={require('../assets/eatingDog.gif')} />)
        }else if(propsData.drinking){
            return (<Image resizeMode='contain' style={styles.gif} source={require('../assets/drinkingDog.gif')} />)
        }else if(propsData.washing){
            return (<Image resizeMode='contain' style={styles.gif} source={require('../assets/cleaningDog.gif')} />)
        }else if(propsData.playing){
            return (<Image resizeMode='contain' style={styles.gif} source={require('../assets/playingDog.gif')} />)
        }
    }else{
        if(isEnabled){
            return (<Image resizeMode='contain' style={styles.gif} source={require('../assets/happyDog.gif')} />)
        }else{
            return (<Image resizeMode='contain' style={styles.gif} source={require('../assets/dog.gif')}/>)
        }
    }

    
}

const styles = StyleSheet.create({
    gif: {
        width: "100%",
        height: "100%"
    },
    gifContainer: {
        flex: 1,
        width: "100%",
        height: "100%"
    }
})

export default ViewGifScreen;