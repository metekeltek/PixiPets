import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'


class ViewFooterScreen extends React.Component {
    render() {
        return (
            <View style={[ styles.container,{
                flexDirection: "row"
              }]}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.props.feedFunction}>
                        <Image resizeMode='contain' style={styles.image} source={require('../assets/food.png')} />
                        <Text style={styles.text}>Feed</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.props.waterFunction}>
                        <Image resizeMode='contain' style={styles.image} source={require('../assets/water.png')} />
                        <Text style={styles.text}>Water</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.props.cleanFunction}>
                        <Image resizeMode='contain' style={styles.image} source={require('../assets/shower.png')} />
                        <Text style={styles.text}>Wash</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.props.playFunction}>
                        <Image resizeMode='contain' style={styles.image} source={require('../assets/ball.png')} />
                        <Text style={styles.text}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ViewFooterScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        flex: 0.25,
      },
    buttonContainer:{
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center',
        flex:1
    },
    image:{
    },
    text:{
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 19,
        marginTop:5
    }
})