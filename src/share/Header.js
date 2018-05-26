import React from 'react';
import {  Text, 
          View,
          StyleSheet } from 'react-native';
export class Header extends React.Component {  
	constructor(props) {
	  super(props);
	  this.state = {
	  	num: 0
	  }

		this.state.num = 100;
	}
  render(){
  	return (
	    <View>
	      <Text style={{fontSize: 50}}>{this.props.headerText}</Text>
	      <Text style={styles.header1}>{this.props.text1}</Text>
	      <Text>Dem den so {this.state.num}</Text>
	    </View>
	  );
  }
}

const styles = StyleSheet.create({
	header1: {
		color: '#ff00ff'
	}
})