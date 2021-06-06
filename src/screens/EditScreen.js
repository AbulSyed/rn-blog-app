import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state, editBlog } = useContext(Context);
    const id = navigation.getParam('id');
    const blog = state.find(blog => blog._id === id);
    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);

    return ( 
        <View>
            <TextInput style={ styles.textInput } placeholder="title" value={ title } onChangeText={ value => setTitle(value) } />
            <TextInput style={ styles.textInput } placeholder="content" value={ content } onChangeText={ value => setContent(value) } />
            <Button
                title="update blog"
                onPress={ () => editBlog(id, title, content, () => {
                    navigation.pop();
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
 
export default EditScreen;