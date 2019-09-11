import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { resetScore } from '../actions/GameActions';
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
  button: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  scoreTitle: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'lightgray',
    textAlign: 'center'
  },
});

class GameOver extends Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.resetScore();
      this.props.navigation.navigate('StartGame');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.title}> Game Over !</Text>
        <View>
          <Text style={styles.subTitle}>Your</Text>
          <Text style={styles.scoreTitle}>{this.props.score}</Text>
          <Text style={styles.subTitle}>Score</Text>
        </View>
        
        <Copyright />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  score: state.game.score,
});

export default connect(mapStateToProps, { resetScore })(GameOver);
