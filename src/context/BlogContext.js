import createDataContext from './createDataContext';
import api from '../api/api';

const reducer = (state, action) => {
    switch(action.type){
        case 'get_blogs':
            return action.payload;
        case 'add_blog':
            return [...state, { _id: Math.floor(Math.random() * 999), title: action.payload.title, content: action.payload.content }];
        case 'delete_blog':
            return state.filter(blog => blog._id !== action.payload);
        case 'edit_blog':
            return state.map(blog => {
                if(blog._id === action.payload._id){
                    return action.payload;
                }else{
                    return blog;
                }
            })
        default:
            return state;
    }
}

const getBlogs = dispatch => {
    return async () => {
        const res = await api.get('/blogs');
        dispatch({ type: 'get_blogs', payload: res.data });
    }
}

const addBlog = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blog', payload: { title, content } });
        callback();
    }
}

const deleteBlog = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blog', payload: id });
    }
}

const editBlog = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blog', payload: { _id: id, title, content } });
        callback();
    }
}

export const { Context, Provider } = createDataContext(reducer, { getBlogs, addBlog, deleteBlog, editBlog }, []);