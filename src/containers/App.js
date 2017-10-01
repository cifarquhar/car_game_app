import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from "react-navigation"
import Logo from "../components/Logo"
import PlayButton from "../components/PlayButton"
import Game from "./Game"

class App extends Component {

  static navigationOptions = {
    title: "Welcome to CarGameApp!",
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Logo />
        <Button 
          onPress={() => navigate("Game")}
          title="Play"
        />
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

export default App= StackNavigator({
  Home: {screen: App},
  Game: {screen: Game}
})

