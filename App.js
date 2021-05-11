import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from './src/context/BlogContext';
import DetailsScreen from './src/screens/DetailsScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Blogs',
    cardStyle: {
      backgroundColor: '#fff'
    }
  }
})

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}