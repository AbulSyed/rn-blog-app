import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const HomeScreen = () => {
    const { state, addBlog } = useContext(Context);

    return ( 
        <View>
            <Text>Home screen</Text>
            <Button
                title="add blog"
                onPress={ () => addBlog() }
            />
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