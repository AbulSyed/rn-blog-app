import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const DetailsScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id');

    const blog = state.find(blog => blog._id === id);

    return ( 
        <View>
            <Text>{ blog.title }</Text>
            <Text>{ blog.content }</Text>
        </View>
     );
}

DetailsScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={ () => navigation.navigate('Edit', { id: navigation.getParam('id') }) }>
                <Feather name="edit" size={ 30 } />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

})
 
export default DetailsScreen;