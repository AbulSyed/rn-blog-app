import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';

const HomeScreen = () => {
    const value = useContext(BlogContext);
    
    return ( 
        <View>
            <Text>Home screen</Text>
            <Text>{ value }</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    
})
 
export default HomeScreen;