import React from 'react'
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { startOver } from '../utility/DatabaseFunctions';

class DeathScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[ styles.container,{
                flexDirection: "column"
              }]}>
              <View style={[ styles.text1Container,{
                flexDirection: "row",
              }]}>
                <Text style={styles.text1}>Your pet died</Text>
            </View><View style={[ styles.imageContainer,{
                flexDirection: "row"
              }]}>
                <Image resizeMode='contain' style={styles.image} source={require('../assets/deadDog.png')} />
            </View><View style={[ styles.text2Container,{
                flexDirection: "row", 
              }]}>
                <Button style={styles.text2} title="Press here to start again" onPress={() => { startOver(this.props.setWellnessStats);}}></Button>
            </View>
            </View>
            
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1Container: {
        justifyContent: 'center', 
        alignItems: 'flex-end',
        flex: 4,
    },
    imageContainer: {
        flex: 4,
    },
    text2Container: {
        justifyContent: 'center', //Centered horizontally
        alignItems: 'flex-start', //Centered vertically
        flex: 4,
    },
    buttonContainer:{
        flex:1
    },
    text1:{
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 40
    }
    ,
    text2:{
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 40
    },
    button:{
    },
    image: {
        width: "100%",
        height: "100%"
    },
})

export default DeathScreen;