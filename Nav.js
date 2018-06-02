import {createStackNavigator} from 'react-navigation';
import Homepage from './src/Homepage';
import Login from './src/Login';
import ListPost from './src/ListPost';
import Detail from './src/Detail';

export const Application = createStackNavigator({
  Home: { screen: ListPost },
  LoginPage: { screen: Login },
  DetailPost: { screen: Detail }
}, 
{
  navigationOptions: {
    header: false
  }
});