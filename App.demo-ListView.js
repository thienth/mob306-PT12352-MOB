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
YellowBox.ignoreWarnings(['Warning: ...', 'Remote debugger ...']);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      titleDemo: 'PT12352-mob',
      dataSource: ds.cloneWithRows(
          [
            {
              title: 'Bai viet 1',
              img: 'https://i.pinimg.com/originals/61/eb/de/61ebdebd873f35110bb8527e03839d43.jpg',
              desc: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.'
            }, 
            {
              title: 'Bai viet 2',
              img: 'http://123anhdep.net/wp-content/uploads/2016/04/ngam-hinh-anh-nhung-chu-cho-con-de-thuong-xinh-xan-bu-bam-dang-yeu-nhat-2.jpg',
              desc: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.'
            }, 
            {
              title: 'Bai viet 3',
              img: 'https://www.ohay.tv/file/v1/content/2015/09/19-ohay-tv-67106.jpg',
              desc: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.'
            },
            {
              title: 'Bai viet 3',
              img: 'https://www.ohay.tv/file/v1/content/2015/09/19-ohay-tv-67106.jpg',
              desc: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.'
            },
            {
              title: 'Bai viet 3',
              img: 'https://www.ohay.tv/file/v1/content/2015/09/19-ohay-tv-67106.jpg',
              desc: 'ListView also supports more advanced features, including sections with sticky section headers, header and footer support, callbacks on reaching the end of the available data (onEndReached) and on the set of rows that are visible in the device viewport change (onChangeVisibleRows), and several performance optimizations.'
            }
          ]
        ),
    };
  }

  render() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(p) => 
            <View>
              <Image source={{uri: p.img}} style={{width: '100%', height: 150}} />
              <Text>{p.title}</Text>
              <TextInput value={this.state.titleDemo} style={{width: '100%', borderWidth: 1}}/>
              <Text>{p.desc}</Text>
            </View>
          }
        />
    );
  }
}

const styles = StyleSheet.create({
  
});
