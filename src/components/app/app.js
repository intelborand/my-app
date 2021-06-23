import React from 'react';
import './app.css';

import AppHeadr from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PosrtAddForm from '../post-add-form';


const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'qadwad'},
        {label: 'That is so good', important: false, id: 'sdfdcx'},
        {label: 'I need a break...', important: false, id: 'dhfd'}
    ];


    return (
        <div className="app">
            <AppHeadr/>
            <div className="search-panel d-flex">
                 <SearchPanel/>
                 <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PosrtAddForm/>
        </div>
    )
}

export default App;