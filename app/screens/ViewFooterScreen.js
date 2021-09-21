import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


class ViewFooterScreen extends React.Component {
    render() {
        return (
            <View style={[ styles.container,{
                flexDirection: "row"
              }]}>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Feed" onPress={this.props.feedFunction}></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Give Water" onPress={this.props.waterFunction}></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Wash" onPress={this.props.cleanFunction}></Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Play" onPress={this.props.playFunction}></Button>
                </View>
            </View>
        );
    }
}

export default ViewFooterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
      },
    buttonContainer:{
        flex:1
    }
})