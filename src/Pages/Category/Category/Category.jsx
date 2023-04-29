import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../../Shared/NewsSummary/NewsSummary';

const Category = () => {
    const newses = useLoaderData()
    return (
        <div>
            <h1>This is Category {newses.length}</h1>
            {
                newses.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                ></NewsSummary>)
            }
        </div>
    );
};

export default Category;