import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, getBlogs, deleteBlog } = useContext(Context);

    useEffect(() => {
        getBlogs();
    }, []);

    return ( 
        <View>
            <FlatList
                data={ state }
                keyExtractor={ blog => blog.title }
                renderItem={ ({ item }) => (
                    <TouchableOpacity onPress={ () => navigation.navigate('Details', { id: item._id }) }>
                        <View style={ styles.viewStyle }>
                            <Text style={ styles.textStyle }>{ item.title } - { item._id }</Text>
                            <TouchableOpacity onPress={ () => deleteBlog(item._id) }>
                                <Feather style={ styles.iconStyle } name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ) }
            />
        </View>
     );
}

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={ () => navigation.navigate('Create') }>
                <Feather name="plus" size={ 30 } />
            </TouchableOpacity>
        )
    }
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