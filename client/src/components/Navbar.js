import React from 'react';
// import './Components.css'
import { Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';





const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <Tabs 
                orientation='vertical' 
                variant="outline" 
                onTabChange={(value) => {
                    let path = `/${value}`;
                    if (value === '/'){
                        path = value
                    }
                    navigate(path);
                }}  
                defaultValue="/"
            >

                <Tabs.Tab label="Main" value="students">
                    Main
                </Tabs.Tab>
                <Tabs.Tab label="Signature" value="Signature">
                    Signature
                </Tabs.Tab>
                <Tabs.Tab label="Pets" value="PetCollage">
                    Pets
                </Tabs.Tab>
                <Tabs.Tab label="Class" value="classCollage">
                    Class
                </Tabs.Tab>
                <Tabs.Tab label="Messages" value="messageboard">
                    Messages
                </Tabs.Tab>
            </Tabs>
        </div>
    );
}

export default Navbar;