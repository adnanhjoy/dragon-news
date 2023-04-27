import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: async (params) => {
                    fetch(`http://localhost:5173/category/${params.id}`)
                }
            },
            {
                path: 'news/:id',
                element: <News></News>
            }
        ]
    }
])