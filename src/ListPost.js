import React from 'react';
import { YellowBox, 
          StyleSheet, 
          Text, 
          View,
          ScrollView,
          Image, 
          TouchableOpacity,
          ActivityIndicator } from 'react-native';
import firebase from './fb';

export default class ListPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    };
    this._pressItem = this._pressItem.bind(this);
  }
  static navigationOptions = {
    title: 'Homepage',
  };

  componentDidMount() {
    var postRef = firebase.database().ref('posts');
    postRef.on('value', (snapshot) => {
      
    var posts = [];
    snapshot.forEach((child) => {
      let item = {...child.val()};
      item.key = child.key;

      posts.push({...item});
    });
    this.setState({posts, loading: false});
    });
  }

  _pressItem(post){
    this.props.navigation.navigate('DetailPost', {post});
  }

  render() {
    if(this.state.loading){
      return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
    }else{
      return (
        <ScrollView>
          {this.state.posts.map(
            (row) =>  <View key={row.key} style={styles.item}>
                        <TouchableOpacity onPress={() => this._pressItem(row)}>
                          <Image source={{uri: row.image}} style={styles.itemImg} />
                          <Text style={styles.itemTitle}>{row.title}</Text>
                        </TouchableOpacity>
                        <Text style={styles.shortDesc}>{row.short_desc}</Text>
                      </View>
          )}
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
