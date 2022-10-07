import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import About from "../About"
import Main from "../layout/Main";
import Books from "../Books";
import BookDetails from "../BookDetails";

const routes=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'home',
        element:<Home></Home>},
        {path:'/books',
        loader:async()=>{
            return fetch('https://api.itbook.store/1.0/search/mongodb')
        },
        element:<Books></Books>},
        {path:'/about',element:<About></About>},
        {path:'/book/:isid',
        loader:async({params})=>{
            console.log(params);
         return fetch(`https://api.itbook.store/1.0/books/${params.isid}`)
        },
        element:<BookDetails></BookDetails>}
    ]
}

]);
export default routes;