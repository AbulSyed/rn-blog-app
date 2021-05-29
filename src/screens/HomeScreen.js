import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, addBlog, deleteBlog } = useContext(Context);

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
                    <TouchableOpacity onPress={ () => navigation.navigate('Details', { id: item.id }) }>
                        <View style={ styles.viewStyle }>
                            <Text style={ styles.textStyle }>{ item.title } - { item.id }</Text>
                            <TouchableOpacity onPress={ () => deleteBlog(item.id) }>
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
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
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