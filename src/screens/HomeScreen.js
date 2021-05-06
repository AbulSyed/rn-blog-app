import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';

const HomeScreen = () => {
    const { state, addBlog } = useContext(BlogContext);

    return ( 
        <View>
            <Text>Home screen</Text>
            <TouchableOpacity onPress={ () => addBlog() }>
                <Text>Click me</Text>
            </TouchableOpacity>
            <FlatList
                data={ state }
                keyExtractor={ blog => blog.title }
                renderItem={ ({ item }) => (
                    <Text>{ item.title }</Text>
                ) }
            />
        </View>
     );
}

const styles = StyleSheet.create({

})
 
export default HomeScreen;