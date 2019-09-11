import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  }
});
 
class Timer extends Component {

  intervalId = 0;

  constructor(props) {
    super(props);
    this.state = {
      time: props.time * 10
    }
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount(){
    this.startTimer();
  }

  componentDidUpdate(){
    if(this.state.time === 0){
      clearInterval(this.intervalId);
      this.props.onEnd();
    }
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  startTimer(){
    this.intervalId = setInterval(() => {
      this.setState(prev => ({ time: prev.time - 1}))
    }, 100);
  }

  renderSeconds(time){
    return time % 10 !== 0 ? `${time/10}` : `${time/10}.0`;
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.renderSeconds(this.state.time)}
        </Text>
      </View>
    );
  }
}


export default Timer;
