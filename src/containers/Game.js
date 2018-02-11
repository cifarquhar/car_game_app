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
    this.state = {
      score: 0
    }
    this.targetScore = 0
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.gameType,
  })

  checkWinner(){
    const s = this.state
    if (s.score === this.targetScore){
      Alert.alert("Congratulations, you found them all!")
    }
  }

  handlePress(){
    this.setState({score: this.state.score + 1})
    this.checkWinner()
  }

  render(){

    let buttonNames = []

    switch (this.props.navigation.state.params.gameType){
      case "Car Colours":
        buttonNames = ["Black", "White", "Red", "Yellow", "Blue", "Green", "Silver"]
        this.targetScore = 7
        break
      case "Car Types":
        buttonNames = ["Volvo", "Skoda", "Volkswagen", "Ford", "Aston Martin", "Ferrari", "Porsche", "Lamborghini", "Audi", "Smart", "Peugeot", "Renault", "Honda", "Mercedes", "Infiniti", 
                      "Vauxhall", "Nissan", "Toyota", "BMW", "Jaguar", "Hyundai", "Citroen"]
        this.targetScore = 22
        break
      case "Supermarkets":
        buttonNames = ["Waitrose", "Tesco", "Sainsbury's", "Co-op", "Morrisons", "Asda", "Lidl", "Aldi", "M&S Food", "Iceland"]
        this.targetScore = 10
        break
      case "Delivery Companies": 
        buttonNames = ["Royal Mail", "Parcel Force", "DPD", "TNT", "Hermes", "Yodel", "Reed Bordall", "Tufnell", "UPS", "DHL", "FedEx", "UK Mail", "DX", "P&O"]
        this.targetScore = 14
        break
      case "Lorries":
        buttonNames = ["Next", "Maersk", "Kuhne+Nagel", "Nisa", "Argos", "Debenhams", "John Lewis", "House of Fraser", "Boots", "Pollock", "JBT", "FreshLinc", "Currie", "Eddie Stobart", "M&S"]
        this.targetScore = 15
        break
      default:
        buttonNames = []
    }

    let buttons = buttonNames.map((name,index) => {
      return(
        <Button 
          key={index}
          title={name}
          onPress={this.handlePress.bind(this)}
        />
      )
    })

    return(
      <View>
        <Score score={this.state.score}/>
        <ScrollView>
          {buttons}
        </ScrollView>
      </View>
    )
  }

}

export default Game