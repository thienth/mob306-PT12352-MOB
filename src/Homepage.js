import React from 'react';
import { YellowBox, 
          StyleSheet, 
          Text, 
          View,
          TouchableOpacity } from 'react-native';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    
  }

  static navigationOptions = {
    title: 'Homepage',
  };

  render() {
    return (
        <View style={{marginTop: 100}}>
          
          <Text>Homepage page</Text>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('LoginPage')}
            style={{backgroundColor: 'green', width: '100%', height: 40}}>
            <Text>Go to Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('ListPost')}
            style={{backgroundColor: 'orange', width: '100%', height: 40}}>
            <Text>Go to List Post</Text>
          </TouchableOpacity>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
