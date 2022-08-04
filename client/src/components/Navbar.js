import React from 'react';
// import './Components.css'
import { Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Text } from '@mantine/core';



const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <Text size="lg"></Text>
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
                <Tabs.Tab label="Dashboard" value="Dashboard">
                <Text size="lg" color="White">Dashboard</Text>    
                </Tabs.Tab>

                <Tabs.Tab label="page" value="page">
                <Text size="lg" color="White">Yearbook</Text>    
                </Tabs.Tab>

                <Tabs.Tab label="Signature" value="Signature">
                <Text size="lg" color="White">Signature</Text>    
                </Tabs.Tab>

                <Tabs.Tab label="Messages" value="messageboard">
                <Text size="lg" color="White">Messages</Text>    
                </Tabs.Tab>
            </Tabs>
            
                
        </div>
    );
}

export default Navbar;