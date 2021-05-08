import createDataContext from './createDataContext';

const reducer = (state, action) => {
    switch(action.type){
        case 'add_blog':
            return [...state, { id: Math.floor(Math.random() * 999), title: `blog #${state.length + 1}` }];
        case 'delete_blog':
            return state.filter(blog => blog.id !== action.payload);
        default:
            return state;
    }
}

const addBlog = dispatch => {
    return () => {
        dispatch({ type: 'add_blog' });
    }
}

const deleteBlog = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blog', payload: id });
    }
}

export const { Context, Provider } = createDataContext(reducer, { addBlog, deleteBlog }, []);