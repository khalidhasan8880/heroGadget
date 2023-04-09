import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'

const router = createBrowserRouter([
    {
        path:'/', 
        element: <App></App>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/shop',
                element:<Shop></Shop>,
                loader: ()=> fetch('products.json')
            },
            {
                path: '/about',
                element:<About></About>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>

    </RouterProvider>

)
