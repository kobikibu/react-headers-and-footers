import React from 'react';
import Container from '@mui/material/Container';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Company = () => {
    return(
        <React.Fragment>
            <Container maxWidth="sm" sx={{ 
                textAlign:'center', 
                paddingTop:'3em'
            }}>
                <RocketLaunchIcon />
                <h1>Company Page</h1>
                <p>We Create Web Apps </p>
            </Container>
        </React.Fragment>
    );
}

export default Company;