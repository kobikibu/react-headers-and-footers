import React from 'react';
import Container from '@mui/material/Container';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Home = () => {
    return(
        <React.Fragment>
            <Container maxWidth="sm" sx={{ 
                textAlign:'center', 
                paddingTop:'3em'
            }}>
                <RocketLaunchIcon />
                <h1>Headers & Footers</h1>
                <p>Webpage Built Using React</p>
                <img src="react.png" width='30%'/>
            </Container>
        </React.Fragment>
    );
}

export default Home;