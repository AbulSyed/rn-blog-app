import React, { createContext, useReducer } from 'react';

const BlogContext = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'add_blog':
            return [...state, { title: `blog #${state.length + 1}` }];
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    const addBlog = () => {
        dispatch({ type: 'add_blog' });
    }

    return (
        <BlogContext.Provider value={{ state, addBlog }}>
            { children }
        </BlogContext.Provider>
    )
}

export default BlogContext;