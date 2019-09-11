import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, Text, StyleSheet
} from 'react-native';
import { addPoint } from '../actions/GameActions';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create( {
  box: {
    width: '48%',
    height: 120,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    alignContent: 'center'
  },
  text: {
    color: '#222222',
    fontSize: 24,
    textAlign: 'center'
  },
  touchableBox: {
    paddingTop: 44,
    height: '100%',
    display: 'flex',
    alignContent: 'center'
  }
});

class Box extends Component {
  constructor(props) {
    super(props);
    this.checkWord = this.checkWord.bind(this);
  }

  checkWord(){
    const { word } = this.props;
    if(word === "jQuery"){
      this.props.addPoint();
    }

    if(this.props.onPress){
      this.props.onPress();
    }
  }


  render() {
    return (
      <View style={{ ...styles.box, backgroundColor: this.props.backgroundColor }}>
        <TouchableOpacity style={styles.touchableBox} onPress={() => {this.checkWord()} }>
          <Text style={styles.text}>{this.props.word}</Text>
        </TouchableOpacity>
      </View>   
    );
  }
}

const mapStateToProps = state => ({
  highscore: state.game.highscore
});

export default connect(mapStateToProps, { addPoint })(Box);
