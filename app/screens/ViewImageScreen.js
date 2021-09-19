import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';


function ViewGifScreen(props) {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
            onPressIn={() => {
                setIsEnabled(previousState => !previousState);
            }}
            onPressOut={() => {
                setIsEnabled(previousState => !previousState);
            }}>
        {isEnabled ?  <Image resizeMode='contain' style={styles.image} source={require('../assets/happyDog.gif')} />: <Image resizeMode='contain' style={styles.image} source={require('../assets/dog.gif')} />}
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%"
    }
})

export default ViewGifScreen;