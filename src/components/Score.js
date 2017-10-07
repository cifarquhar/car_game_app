import React, { Component } from "react"
import {
  View,
  Text
} from "react-native"

class Score extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <Text>Current score: {this.props.score}</Text>
      </View>
    )
  }

}

export default Score