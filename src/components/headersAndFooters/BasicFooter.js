import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

const BasicFooter = (props) => {

    const CopyrightDate = new Date().getFullYear();
 
    return(
        <React.Fragment>
            <Box sx={{ 
                backgroundColor: 'WhiteSmoke', 
                position: 'absolute', 
                bottom: 0, 
                width:'100%',
                display:'flex', 
                flexDirection:'row', 
                columnGap: '1rem', 
                justifyContent:'center', 
                alignItems:'center', 
                height:'4rem', 
                fontSize:'0.5em', 
            }} >
                {props.basicFooterElements.pages.map((page, index) => {
                    return(
                        <Link key={index} to={`/${page}`} style = {{      textDecoration: 'none', 
                        color:'gray',
                        }}>
                            {page}
                        </Link>
                    );
                })}
                <Link to={'/'} style = {{ 
                    textDecoration: 'none',
                    color:'gray',
                }}>
                    Copyright © {CopyrightDate}
                </Link>        
            </Box>
        </React.Fragment>
    );
}

export default BasicFooter;