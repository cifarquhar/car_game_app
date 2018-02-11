import React, {Component} from "react"
import {StyleSheet,
        View,
        Button
} from "react-native"

class ChoiceButton extends Component {

  constructor(props){
    super(props)
    this.state = {
      pressed: false
    }

    this.handlePress = this.props.handlePress
  }

  handlePress(){
    this.setState({pressed: true})
  }

  render(){

    let _style

    if (this.state.pressed){
      _style = {color: "green"}
    }
    else {
      _style = {color: "blue"}
    }

    return (
      <Button
        title={this.props.title}
        onPress={this.handlePress}
        style={_style}
      />
    )
  }

}

export default ChoiceButton