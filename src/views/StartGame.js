import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Copyright from '../components/Copyright';
import imgPlay from '../assets/play.png';

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
  button: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  imgPlay: {
    height: 150,
    width: '50%',
    marginLeft: '25%',
  },
  highscoreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightgray',
    textAlign: 'center'
  },
  highscore: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'lightgray',
    textAlign: 'center'
  }
});

class StartGame extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
  }

  startGame(){
    this.props.navigation.navigate('PlayGame');
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.title}>jQuery Finder</Text>
          <TouchableOpacity 
            onPress={() => this.startGame()}
            style={styles.button}>
            <Image style={styles.imgPlay} source={imgPlay} />  
          </TouchableOpacity>
     
        <View>
          <Text style={styles.highscoreTitle}>Hi-Score</Text>
          <Text style={styles.highscore}>{this.props.highscore}</Text>
        </View>
        <Copyright />
      </View>
    );
  }
}


const mapStateToProps = state => ({
  highscore: state.game.highscore,
});

export default connect(mapStateToProps, {  })(StartGame);
