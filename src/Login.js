import React from 'react';
import { YellowBox, 
          StyleSheet, 
          Text, 
          View } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    
  }

  static navigationOptions = {
    title: 'Login page',
  };

  render() {
    return (
        <View style={{marginTop: 100}}>
          
          <Text>Login page</Text>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
