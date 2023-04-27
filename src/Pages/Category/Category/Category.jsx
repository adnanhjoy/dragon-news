import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const newses = useLoaderData()
    console.log(newses)
    return (
        <div>
            <h1>This is Category</h1>
        </div>
    );
};

export default Category;