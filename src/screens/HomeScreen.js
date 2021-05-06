import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';

const HomeScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);

    return ( 
        <View>
            <Text>Home screen</Text>
            <TouchableOpacity onPress={ () => addBlogPost() }>
                <Text>Click me</Text>
            </TouchableOpacity>
            <FlatList
                data={ data }
                keyExtractor={ blogPost => blogPost.title }
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