import React, {Component} from "react"
import {
  StyleSheet,
  View,
  Text,
  Button
} from "react-native"
import { StackNavigator } from "react-navigation"
import Selector from "../components/Selector"

class Game extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "Choose a game to play",
  })

  render(){
    return(
      <View>
        <Selector />
        <Button
          onPress={() => console.log("pressed")}
          title="Start"
        />
      </View>
    )
  }

}

export default Game