import React, {Component} from "react"
import {
  StyleSheet,
  View,
  Text,
  Button
} from "react-native"
import { StackNavigator } from "react-navigation"
import Game from "./Game"

class GameSelection extends Component {

  static navigationOptions = ({navigation}) => ({
    title: "Choose a game to play",
  })

  render(){

    const categories = ["Car Colours", "Car Types", "Supermarkets", "Delivery Companies", "Lorries"]

    let buttons = categories.map((category,index) => {
      return(
        <Button 
          key={index}
          onPress={() => navigate("Game", {gameType: category})}
          title={category}
        />
      )
    })

    const { navigate } = this.props.navigation
    return(
      <View>
        {buttons}
      </View>
    )
  }

}

export default GameSelection