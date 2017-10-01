import React, {Component} from "react"
import {
  StyleSheet,
  View,
  Text,
  Button
} from "react-native"
import { StackNavigator } from "react-navigation"

class Game extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "<-- name goes here -->",
  })

  render(){
    return(
      <View>
        <Text>Game buttons go in here</Text>
      </View>
    )
  }

}

export default Game