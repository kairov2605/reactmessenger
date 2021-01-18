import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {Message} from '../../components'

const Home = () => {
    return (
        <div className='home'>
            <Message    avatar="https://images.unsplash.com/photo-1608463200257-ef6cf1399f1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80" text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻" data="Mon Jan 18 2021 19:23:21"/>  
        </div>)
}

export default Home;
