import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Logo from "../components/Logo"
import PlayButton from "../components/PlayButton"
import ModalDropdown from "react-native-modal-dropdown"

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <ModalDropdown options={['Game 1', 'Game 2']}/>
        <PlayButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
