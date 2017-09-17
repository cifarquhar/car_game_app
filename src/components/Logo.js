import React, {Component} from "react"
import {StyleSheet,
        View,
        Text
} from "react-native"


class Logo extends Component {

  render() {
    return(
      <View style={styles.logoBox}>
        <Text style={styles.logoText}>
          App logo goes in here
        </Text>
      </View>
    )
  }

}


const styles = StyleSheet.create({

  logoBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderStyle: "solid",
    // borderWidth: 1 
  },

  logoText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }

})


export default Logo
