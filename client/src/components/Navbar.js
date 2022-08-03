import React from 'react';
// import './Components.css'
import { Tabs } from '@mantine/core';
import Dashboard from '../pages/dashboard';
import Signature from '../pages/signature';
import PetCollage from '../pages/petCollage';
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

                <Tabs.Tab label="Main" value="/">
                    Main
                </Tabs.Tab>

                <Tabs.Tab label="Signature" value="signature">
                    Signature
                </Tabs.Tab>
                <Tabs.Tab label="Pets" value="petCollage">
                    Pets
                </Tabs.Tab>
                <Tabs.Tab label="Josh" value="Josh">
                    Josh
                </Tabs.Tab>
                <Tabs.Tab label="Carrie" value="classCollage">
                    Class
                </Tabs.Tab>
                <Tabs.Tab label="Carolyn" value="carolyn">
                    Carolyn
                </Tabs.Tab>
            </Tabs>
        </div>
    );
}

export default Navbar;