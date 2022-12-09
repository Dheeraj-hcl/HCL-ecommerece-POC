import React from 'react';
import Sidebar from "./sidebar"
import GridExampleContainer from './products';
const Content = () => {
    return (
        <div className='content'>
            <div className='sidebar'>
            <Sidebar />
            </div>
            <div className='products'>
            <GridExampleContainer />
            </div>
        </div>
    );
};

export default Content;