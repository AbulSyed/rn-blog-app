import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {
    const { state, addBlog } = useContext(Context);

    return ( 
        <View>
            <Button
                title="add blog"
                onPress={ () => addBlog() }
            />
            <FlatList
                data={ state }
                keyExtractor={ blog => blog.title }
                renderItem={ ({ item }) => (
                    <View style={ styles.viewStyle }>
                        <Text style={ styles.textStyle }>{ item.title }</Text>
                        <Feather style={ styles.iconStyle } name="trash" />
                    </View>
                ) }
            />
        </View>
     );
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    textStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30
    }
})
 
export default HomeScreen;