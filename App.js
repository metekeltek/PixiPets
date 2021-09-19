import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ViewHeaderScreen from './app/screens/ViewHeaderScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ViewFooterScreen from './app/screens/ViewFooterScreen';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hungerState:100,  
      thirstState:50,
      dirtyState:14,
      lonelyState:40
     };
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
