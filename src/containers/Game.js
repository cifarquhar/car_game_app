import React, {Component} from "react"
import {
  StyleSheet,
  ScrollView,
  Text,
  Button
} from "react-native"
import { StackNavigator } from "react-navigation"
import ChoiceButton from "../components/ChoiceButton"

class Game extends Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.gameType,
  })

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
        />
      )
    })

    return(
      <ScrollView>
        {buttons}
      </ScrollView>
    )
  }

}

export default Game