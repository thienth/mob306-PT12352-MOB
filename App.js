import React from 'react';
import { YellowBox, 
          StyleSheet, 
          Text, 
          View,
          Image,
          TextInput,
          ListView,
          ScrollView } from 'react-native';
import {Header} from './src/share/Header';
import { createStackNavigator } from 'react-navigation';
import Login from './src/Login';

YellowBox.ignoreWarnings(['Warning: ...', 'Remote debugger ...']);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleDemo: 'PT12352-mob',
    };
  }

  render() {
    return (
        <View>
          <Image source={{uri: 'http://sohanews.sohacdn.com/2017/photo-4-1486796105206.jpg', cache: 'only-if-cached'}} style={{width: '100%', height: 200}}/>
          <TextInput placeholder="dien ten ban vao day"
            placeholderTextColor="green"
            secureTextEntry={true}
           onChangeText={(val) => this.setState({titleDemo : val})} value={this.state.titleDemo} style={{marginTop: 20, width: '100%', borderWidth: 1}}/>
          <Text>{this.state.titleDemo}</Text>
        </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: App,
  },
  Login: {
    screen: Login
  }
});

const styles = StyleSheet.create({
  
});
