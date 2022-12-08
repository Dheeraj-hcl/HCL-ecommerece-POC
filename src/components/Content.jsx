import React from 'react';
import MenuExampleVerticalDropdown from "./sidebar"
import GridExampleContainer from './products';
const Content = () => {
    return (
        <div className='content'>
            <div className='sidebar'>
            <MenuExampleVerticalDropdown />
            </div>
            <div className='products'>
            <GridExampleContainer />
            </div>
        </div>
    );
};

export default Content;