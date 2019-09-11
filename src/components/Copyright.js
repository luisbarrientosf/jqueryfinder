import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'lightgray'
  }
});

class Copyright extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Copyright Cleverit</Text>
      </View>
    );
  }
}


export default Copyright;
