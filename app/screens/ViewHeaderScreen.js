import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useFonts } from 'expo-font';

class ViewHeaderScreen extends React.Component {
  render() {
    return (
      <View style={ styles.wellnessStatsContainer }>
          <View style={ styles.wellnessStatsRowContainer }>
              <Text style={ styles.wellnessStatsText }>Hunger</Text>
              <View style={styles.wellnessBarContainer} >
                  <View style={[styles.wellnessBar, { width:convertIntoPercentage(this.props.data.hungerState), backgroundColor: calculateColor(this.props.data.hungerState)}]} />
              </View>
          </View>
          <View style={ styles.wellnessStatsRowContainer }>
              <Text style={ styles.wellnessStatsText }>Thirst</Text>
              <View style={styles.wellnessBarContainer} >
                  <View style={[styles.wellnessBar, { width:convertIntoPercentage(this.props.data.thirstState), backgroundColor: calculateColor(this.props.data.thirstState)}]} />
              </View>
          </View>
          <View style={ styles.wellnessStatsRowContainer }>
              <Text style={ styles.wellnessStatsText }>Dirty</Text>
              <View style={styles.wellnessBarContainer} >
                  <View style={[styles.wellnessBar, { width:convertIntoPercentage(this.props.data.dirtyState), backgroundColor: calculateColor(this.props.data.dirtyState)}]} />
              </View>
          </View>
          <View style={ styles.wellnessStatsRowContainer }>
              <Text style={ styles.wellnessStatsText }>Lonely</Text>
              <View style={styles.wellnessBarContainer} >
                  <View style={[styles.wellnessBar, { width:convertIntoPercentage(this.props.data.lonelyState), backgroundColor: calculateColor(this.props.data.lonelyState)}]} />
              </View>
          </View>
      </View>
    );
  }
}

export default ViewHeaderScreen;

function calculateColor(wellnessStat){
  if(wellnessStat>50){
    return "green";
  }else if(wellnessStat>17){
    return "orange";
  }else{
    return "red";
  }
}

function convertIntoPercentage(wellnessStat){
  return String(wellnessStat) + "%";
}

const styles = StyleSheet.create({
      wellnessStatsContainer: {
        flex:0.3,
        flexDirection: "column",
        marginHorizontal: 12
      },
      wellnessStatsRowContainer: {
        flex:3,
        flexDirection: "row"
      },
      wellnessStatsText: {
        flex:1,
        textAlign: "left",
        textAlignVertical: "center",
        fontSize: 19
      },
      button:{
        backgroundColor: "blue",
        height: 400,
        width: 400
      },
      buttonContainer:{
        marginVertical: 50,
        alignItems:"center",
        flex: 1
      },
      wellnessBar:{
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
        width: "50%",
      },
      wellnessBarContainer:{
        flex: 2, 
        margin:5
      },
})