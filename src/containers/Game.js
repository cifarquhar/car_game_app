import React, {Component} from "react"
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
  Alert
} from "react-native"
import { StackNavigator } from "react-navigation"
import ChoiceButton from "../components/ChoiceButton"
import Score from "../components/Score"

class Game extends Component {

  constructor(props){
    super(props)

    let playerScore = 0
    this.playerScore = playerScore  
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.gameType,
  })

  checkWinner(category,score){
    if (score = category.length){
      Alert.alert("Congratulations, you found them all!")
    }
  }

  handlePress(category){
    this.playerScore += 1
    this.checkWinner(category,this.playerScore)
  }

  render(){

    let buttonNames = []

    switch (this.props.navigation.state.params.gameType){
      case "Car Colours":
        buttonNames = ["Black", "White", "Red", "Yellow", "Blue", "Green", "Silver"]
        break
      case "Car Types":
        buttonNames = ["Volvo", "Skoda", "Volkswagen", "Ford", "Aston Martin", "Ferrari", "Porsche", "Lamborghini", "Audi", "Smart", "Peugeot", "Renault", "Honda", "Mercedes", "Infiniti", 
                      "Vauxhall", "Nissan", "Toyota", "BMW", "Jaguar", "Hyundai", "Citroen"]
        break
      case "Supermarkets":
        buttonNames = ["Waitrose", "Tesco", "Sainsbury's", "Co-op", "Morrisons", "Asda", "Lidl", "Aldi", "M&S Food", "Iceland"]
        break
      case "Delivery Companies": 
        buttonNames = ["Royal Mail", "Parcel Force", "DPD", "TNT", "Hermes", "Yodel", "Reed Bordall", "Tufnell", "UPS", "DHL", "FedEx", "UK Mail", "DX", "P&O"]
        break
      case "Lorries":
        buttonNames = ["Next", "Maersk", "Kuhne+Nagel", "Nisa", "Argos", "Debenhams", "John Lewis", "House of Fraser", "Boots", "Pollock", "JBT", "FreshLinc", "Currie", "Eddie Stobart", "M&S"]
        break
      default:
        buttonNames = []
    }

    let buttons = buttonNames.map((name,index) => {
      return(
        <ChoiceButton 
          key={index}
          title={name}
          // onPress={this.handlePress(buttonNames)}
        />
      )
    })

    return(
      <View>
        <Score score={this.playerScore}/>
        <ScrollView>
          {buttons}
        </ScrollView>
      </View>
    )
  }

}

export default Game