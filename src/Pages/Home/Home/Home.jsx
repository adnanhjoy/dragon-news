import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../../Shared/NewsSummary/NewsSummary';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1>This is Home page {allNews.length}</h1>
            {
                allNews.map(news => <NewsSummary
                    key={news._id}
                    news={news}

                ></NewsSummary>)
            }
        </div>
    );
};

export default Home;