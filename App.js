import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  AppState, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ViewHeaderScreen from './app/screens/ViewHeaderScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ViewFooterScreen from './app/screens/ViewFooterScreen';
import {syncData} from './app/utility/DatabaseFunctions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setWellnessStats = this.setWellnessStats.bind(this)
    syncData(this.setWellnessStats);
    this.state = { 
      appState: AppState.currentState
     };
  }

  setWellnessStats(wellnessObj){
    this.setState({
      hungerState:wellnessObj.hungerState,
      thirstState:wellnessObj.thirstState,
      dirtyState:wellnessObj.dirtyState,
      lonelyState:wellnessObj.lonelyState
    });
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, {
        flexDirection: "column"
      }]}>
        <ViewHeaderScreen data={this.state} style={{ flex: 0.3}}/>
        <ViewImageScreen data={this.state} style={{ flex: 3}} />
        <ViewFooterScreen data={this.state} style={{ flex: 0.3 }} />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

