import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  AppState, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ViewHeaderScreen from './app/screens/ViewHeaderScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ViewFooterScreen from './app/screens/ViewFooterScreen';
import {syncData, updateData} from './app/utility/DatabaseFunctions';
import { isDead } from './app/utility/ExtensionFunctions';
import DeathScreen from './app/screens/DeathScreen';
import { Audio } from 'expo-av';
import { Platform } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setWellnessStats = this.setWellnessStats.bind(this);
    syncData(this.setWellnessStats);
    this.state = { 
      appState: AppState.currentState
     };
  }

  async componentDidMount(){
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: false,
      playThroughEarpieceAndroid: true
    });

    this.sound = new Audio.Sound();
    this.eatSound = new Audio.Sound();
    this.drinkSound = new Audio.Sound();
    this.washSound = new Audio.Sound();
    this.playSound = new Audio.Sound();



    const status = {
      shouldPlay: false
    };

    await this.eatSound.loadAsync(require('./app/sounds/eat.mp3'), status, false );
    await this.drinkSound.loadAsync(require('./app/sounds/drink.mp3'), status, false );
    await this.washSound.loadAsync(require('./app/sounds/wash.mp3'), status, false );
    await this.playSound.loadAsync(require('./app/sounds/ball.mp3'), status, false );

    await this.sound.loadAsync(require('./app/sounds/soundtrack.mp3'), status, false );

    await this.sound.stopAsync();

    await this.sound.setIsLoopingAsync(true);
    await this.sound.playAsync();
  }

  async playEatSound(){
    await this.eatSound.setVolumeAsync(1.0);
    await this.eatSound.playAsync();
  }
  async stopEatSound(){
    await this.eatSound.stopAsync();
  }

  async playDrinkSound(){
    await this.drinkSound.playAsync();
  }
  async stopDrinkSound(){
    await this.drinkSound.stopAsync();
  }

  async playWashSound(){
    await this.washSound.playAsync();
  }
  async stopWashSound(){
    await this.washSound.stopAsync();
  }

  async playPlaySound(){
    await this.playSound.playAsync();
  }
  async stopPlaySound(){
    await this.playSound.stopAsync();
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
    if(this.state.hungerState<=70){
      this.playEatSound();
      this.setState({
        hungerState:this.state.hungerState+30,
        feeding:true
      });
    }else{
      this.playEatSound();
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
      this.stopEatSound();
      this.setState({
        feeding:false
      });
  }, 1500);
  }

  increaseThirstStateAndSync() {
    if(this.state.thirstState<=70){
      this.playDrinkSound();
      this.setState({
        thirstState:this.state.thirstState+30,
        drinking:true
      });
    }else{
      this.playDrinkSound();
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
      this.stopDrinkSound();
      this.setState({
        drinking:false
      });
  }, 1500);
  }

  increaseDirtyStateAndSync() {
    this.playWashSound();
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
      this.stopWashSound();
      this.setState({
        washing:false
      });
  }, 2100);
  }

  increaseLonelyStateAndSync() {
    this.playPlaySound();
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
      this.stopPlaySound();
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
          <ViewFooterScreen data={this.state} feedingDisabled={this.state.feeding} drinkingDisabled={this.state.drinking} washingDisabled={this.state.washing} playingDisabled={this.state.playing} feedFunction={this.increaseHungerStateAndSync.bind(this)} waterFunction={this.increaseThirstStateAndSync.bind(this)} cleanFunction={this.increaseDirtyStateAndSync.bind(this)} playFunction={this.increaseLonelyStateAndSync.bind(this)} style={{ flex: 0.4 }} />
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

