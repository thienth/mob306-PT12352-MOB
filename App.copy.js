import React from 'react';
import { YellowBox, 
          StyleSheet, 
          Text, 
          View,
          Image,
          TextInput,
          TouchableOpacity } from 'react-native';
import {Header} from './src/share/Header';
YellowBox.ignoreWarnings(['Warning: ...', 'Remote debugger ...']);



export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      count: 0
    };

    this.onPressButton = this.onPressButton.bind(this)
  }

  onPressButton(){
    let c = this.state.count;
    c++;
    this.setState({count: c})
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img}
          source={{uri: 'http://hotteen.xyz/wp-content/uploads/2018/01/Xinh-%C4%91%E1%BA%B9p-pha-ch%C3%BAt-sexy-c%E1%BB%A7a-Nguy%E1%BB%85n-Lan-Anh.jpg'}}
          />
        <View>
          <TextInput style={styles.input} placeholder="Email"/>
          <TextInput style={styles.input} placeholder="Password"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '100%',
    height: 300
  },
  input:{
    fontSize: 30,
    marginTop:10,
    width: 300,
    height: 50,
    borderWidth: 1,
    paddingLeft: 10
  }
});
