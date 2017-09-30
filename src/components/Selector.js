import React, {Component} from "react"
import { View } from "react-native"
import ModalDropdown from "react-native-modal-dropdown"

class Selector extends Component {


  constructor(props){
    super(props)

    const carColours = ["Black", "White", "Red", "Yellow", "Blue", "Green", "Silver"]

    const carTypes = ["Volvo", "Skoda", "Volkswagen", "Ford", "Aston Martin", "Ferrari", "Porsche", "Lamborghini", "Audi", "Smart", "Peugeot", "Renault", "Honda", "Mercedes", "Infiniti", 
                      "Vauxhall", "Nissan", "Toyota", "BMW", "Jaguar"]

    const supermarkets = ["Waitrose", "Tesco", "Sainsbury's", "Co-op", "Morrisons", "Asda", "Lidl", "Aldi", "M&S Food", "Iceland"]

    const deliveries = ["Royal Mail", "Parcel Force", "DPD", "TNT", "Hermes", "Yodel", "Reed Bordall", "Tufnell", "UPS", "DHL", "FedEx", "UK Mail", "DX", "P&O"]

    const lorries = ["Next", "Maersk", "Kuhne+Nagel", "Nisa", "Argos", "Debenhams", "John Lewis", "House of Fraser", "Boots", "Pollock", "JBT", "FreshLinc", "Currie", "Eddie Stobart", "M&S"]

    const categories = ["Car Colours", "Car Types", "Supermarkets", "Delivery Companies", "Lorries"]

  }




  render(){
    return (
      <View> 
        <ModalDropdown options={["Car Colours", "Car Types", "Supermarkets", "Delivery Companies", "Lorries"]}/>
      </View>
    )
  } 

}

export default Selector