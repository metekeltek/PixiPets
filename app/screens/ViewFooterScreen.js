import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function ViewFooterScreen() {
    return (
        <View style={[ styles.container,{
            flexDirection: "row"
          }]}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Feed"></Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Give Water"></Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Wash"></Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="Play"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
      },
    buttonContainer:{
        flex:1
    }
})