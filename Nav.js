import {createStackNavigator} from 'react-navigation';
import Homepage from './src/Homepage';
import Login from './src/Login';
import ListPost from './src/ListPost';

export const Application = createStackNavigator({
  Home: { screen: Homepage },
  LoginPage: { screen: Login },
  ListPost: {screen: ListPost}
}, 
{
  navigationOptions: {
    header: false
  }
});