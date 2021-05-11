import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const DetailsScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id');

    const blogs = state.find(blog => blog.id === id);

    return ( 
        <View>
            <Text>{ blogs.title }</Text>
        </View>
     );
}

const styles = StyleSheet.create({

})
 
export default DetailsScreen;