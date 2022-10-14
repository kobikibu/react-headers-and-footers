import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const BasicHeader = (props) => {

    return(
        <Box sx={{ flexGrow:1 }}>
        <AppBar position="relative" sx={{ backgroundColor:'WhiteSmoke', display:'flex', displayDirection:'row'}} >
            <Toolbar>
            <Typography variant="h6" component="div" color="primary"  sx={{ flexGrow: 1 }}>
            <RocketLaunchIcon />
            {props.basicHeaderElements.brands.map((brand, index) => (
                <div key={index}>
                    {brand}
                </div>
            ))}
             {props.basicHeaderElements.pages.map((page, index) => (
                <div key={index}>
                    {page}
                </div>
            ))}
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default BasicHeader;