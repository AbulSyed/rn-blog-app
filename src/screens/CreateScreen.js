import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlog } = useContext(Context);

    return ( 
        <View>
            <TextInput style={ styles.textInput } placeholder="title" value={ title } onChangeText={ value => setTitle(value) } />
            <TextInput style={ styles.textInput } placeholder="content" value={ content } onChangeText={ value => setContent(value) } />
            <Button
                title="add blog"
                onPress={ () => addBlog(title, content, () => {
                    navigation.navigate('Home');
                }) }
            />
        </View>
     );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        borderWidth: 1,
        padding: 5,
        margin: 10
    }
})
 
export default CreateScreen;