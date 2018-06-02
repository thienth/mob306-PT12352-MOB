import React from 'react';
import { YellowBox, 
          StyleSheet, 
          Text, 
          View,
          ScrollView,
          TouchableOpacity,
          ActivityIndicator,
          Image } from 'react-native';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
    
  }

  static navigationOptions = {
    title: 'Detail',
  };

  componentDidMount() {
    const navigation = this.props.navigation;
    var post = navigation.getParam('post', null);
    this.setState({post});
  }
  render() {
    if(this.state.post == null){
      return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
    }else{

      return (
          <ScrollView style={styles.item}>
            <Image source={{uri: this.state.post.image}} style={styles.itemImg} />
            <Text style={styles.itemTitle}>{this.state.post.title}</Text>
            <Text style={styles.shortDesc}>{this.state.post.short_desc}</Text>
            <Text style={styles.shortDesc}>{this.state.post.content}</Text>
          </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  item:{
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  itemImg: {
    width: '100%', 
    height: 150
  },
  itemTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  shortDesc: {
    fontSize: 20
  }
});
