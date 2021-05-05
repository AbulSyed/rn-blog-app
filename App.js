import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Home: HomeScreen
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
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}