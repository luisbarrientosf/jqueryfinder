import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { randomColor } from 'randomcolor';

import Box from '../components/Box';
import Timer from '../components/Timer';
import Copyright from '../components/Copyright';

const styles = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: '#111111',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '10%',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'lightgray',
    paddingTop: 30,
    paddingBottom: 30
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgray'
  },
  boxesContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});


class PlayGame extends Component {

  POINTS_TO_WIN = 55;
  GAME_TIME_IN_SECONDS = 60;

  constructor(props) {
    super(props);
    this.pressBox = this.pressBox.bind(this);
    this.endGame = this.endGame.bind(this);

    const words = this.shuffleArray(["jQuery", "React-Native", "Vue.js", "Angular"]);
    const colors = [...Array(words.length)].map( () => randomColor({ luminosity: 'light' }) );

    this.state = {
      words,
      colors
    };
  }

  pressBox(){
    const words = this.shuffleArray(this.state.words);
    const colors = [...Array(words.length)].map( () => randomColor({ luminosity: 'light' }));
    this.setState({
      words,
      colors
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  endGame(){ 
    if(this.props.score > this.POINTS_TO_WIN){
      this.props.navigation.navigate('ClearStage');
    }else{
      this.props.navigation.navigate('GameOver');
    }  
  }

  render() {

    const boxes = this.state.words.map((word, index) => {
      return (
        <Box 
          key={`box_${index}`}
          word={word}
          backgroundColor={this.state.colors[index]}
          onPress={this.pressBox}
        /> )
    });

    return (
      <View style={styles.viewContainer}>
        <View>
          <Text style={styles.title}>Find It </Text>
          <Text style={styles.subTitle}>Now</Text>
        </View>
        
        <View style={styles.boxesContainer}>
          {boxes}
        </View>
        <Timer time={this.GAME_TIME_IN_SECONDS} onEnd={() => this.endGame()}/>
        
        <Copyright />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  score: state.game.score,
});

export default connect(mapStateToProps, { })(PlayGame);
