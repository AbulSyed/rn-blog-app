import createDataContext from './createDataContext';
import api from '../api/api';

const reducer = (state, action) => {
    switch(action.type){
        case 'get_blogs':
            return action.payload;
        case 'add_blog':
            return [...state, action.payload];
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
    return async (title, content, callback) => {
        const res = await api.post('/blogs', { title, content });
        dispatch({ type: 'add_blog', payload: res.data });
        callback();
    }
}

const deleteBlog = dispatch => {
    return async (id) => {
        await api.delete(`/blogs/${id}`);
        dispatch({ type: 'delete_blog', payload: id });
    }
}

const editBlog = dispatch => {
    return async (id, title, content, callback) => {
        await api.patch(`/blogs/${id}`, { title, content });
        dispatch({ type: 'edit_blog', payload: { _id: id, title, content } });
        callback();
    }
}

export const { Context, Provider } = createDataContext(reducer, { getBlogs, addBlog, deleteBlog, editBlog }, []);