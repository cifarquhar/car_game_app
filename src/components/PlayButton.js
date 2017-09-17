import React, {Component} from "react"
import {StyleSheet,
        View,
        Button
} from "react-native"

class PlayButton extends Component {

  render(){
    return (
      <Button
        title="Play"
        onPress={() => console.log("pressed")}
      />
    )
  }

}

export default PlayButton