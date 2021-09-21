import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  AppState, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ViewHeaderScreen from './app/screens/ViewHeaderScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ViewFooterScreen from './app/screens/ViewFooterScreen';
import {syncData, updateData} from './app/utility/DatabaseFunctions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.setWellnessStats = this.setWellnessStats.bind(this);
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

  increaseHungerStateAndSync() {
    if(this.state.hungerState<=90){
      this.setState({
        hungerState:this.state.hungerState+10,
      });
    }else{
      this.setState({
        hungerState:100,
      });
    }
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
  }

  increaseThirstStateAndSync() {
    if(this.state.thirstState<=90){
      this.setState({
        thirstState:this.state.thirstState+10,
      });
    }else{
      this.setState({
        thirstState:100,
      });
    }
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
  }

  increaseDirtyStateAndSync() {
    if(this.state.dirtyState<=90){
      this.setState({
        dirtyState:this.state.dirtyState+10,
      });
    }else{
      this.setState({
        dirtyState:100,
      });
    }
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
  }

  increaseLonelyStateAndSync() {
    if(this.state.lonelyState<=90){
      this.setState({
        lonelyState:this.state.lonelyState+10,
      });
    }else{
      this.setState({
        lonelyState:100,
      });
    }
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
  }


  

  render() {
    return (
      <SafeAreaView style={[styles.container, {
        flexDirection: "column"
      }]}>
        <ViewHeaderScreen data={this.state} style={{ flex: 0.3}}/>
        <ViewImageScreen data={this.state} style={{ flex: 3}} />
        <ViewFooterScreen data={this.state} feedFunction={this.increaseHungerStateAndSync.bind(this)} waterFunction={this.increaseThirstStateAndSync.bind(this)} cleanFunction={this.increaseDirtyStateAndSync.bind(this)} playFunction={this.increaseLonelyStateAndSync.bind(this)} style={{ flex: 0.3 }} />
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

