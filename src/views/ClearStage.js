import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';

import { resetScore } from '../actions/GameActions';
import Copyright from '../components/Copyright';
import imgJQuery from '../assets/jquery.jpg';

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
  imgJQuery: {
    width: '100%',
    height: 140,
    marginTop: '30%',
    borderRadius: 5
  }
});

class ClearStage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(() => {
      this.props.resetScore();
      this.props.navigation.navigate('StartGame');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Image source={imgJQuery} style={styles.imgJQuery}/>
        
        <Copyright />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps, { resetScore })(ClearStage);
