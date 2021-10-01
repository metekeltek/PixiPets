import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  AppState, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ViewHeaderScreen from './app/screens/ViewHeaderScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ViewFooterScreen from './app/screens/ViewFooterScreen';
import {syncData, updateData} from './app/utility/DatabaseFunctions';
import { isDead } from './app/utility/ExtensionFunctions';
import DeathScreen from './app/screens/DeathScreen';


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
      hungerState:20,
      thirstState:45,
      dirtyState:10,
      lonelyState:55
    });
  }

  increaseHungerStateAndSync() {
    if(this.state.hungerState<=70){
      this.setState({
        hungerState:this.state.hungerState+30,
        feeding:true
      });
    }else{
      this.setState({
        hungerState:100,
        feeding:true
      });
    }
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
    setTimeout(() => {
      this.setState({
        feeding:false
      });
  }, 1500);
  }

  increaseThirstStateAndSync() {
    if(this.state.thirstState<=70){
      this.setState({
        thirstState:this.state.thirstState+30,
        drinking:true
      });
    }else{
      this.setState({
        thirstState:100,
        drinking:true
      });
    }
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
    setTimeout(() => {
      this.setState({
        drinking:false
      });
  }, 1500);
  }

  increaseDirtyStateAndSync() {
    this.setState({
      dirtyState:100,
      washing:true
    });
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
    setTimeout(() => {
      this.setState({
        washing:false
      });
  }, 2100);
  }

  increaseLonelyStateAndSync() {
    this.setState({
      lonelyState:100,
      playing:true
    });
    updateData({
      hungerState:this.state.hungerState,
      thirstState:this.state.thirstState,
      dirtyState:this.state.dirtyState,
      lonelyState:this.state.lonelyState
    });
    setTimeout(() => {
      this.setState({
        playing:false
      });
  }, 3000);
  }



  

  render() {
    if(this.state.hungerState <= 0 || this.state.thirstState <= 0 || this.state.lonelyState <= 0){
      return (
        <SafeAreaView style={[styles.container, {
          flexDirection: "column"
        }]}>
          <DeathScreen setWellnessStats={this.setWellnessStats}></DeathScreen>
         </SafeAreaView>
      );
    }else{
      return (
        <SafeAreaView style={[styles.container, {
          flexDirection: "column"
        }]}>
          <ViewHeaderScreen data={this.state} style={{ flex: 0.3}}/>
          <ViewImageScreen data={this.state} style={{ flex: 2}} />
          <ViewFooterScreen data={this.state} feedFunction={this.increaseHungerStateAndSync.bind(this)} waterFunction={this.increaseThirstStateAndSync.bind(this)} cleanFunction={this.increaseDirtyStateAndSync.bind(this)} playFunction={this.increaseLonelyStateAndSync.bind(this)} style={{ flex: 0.4 }} />
        </SafeAreaView>
      );
    }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

