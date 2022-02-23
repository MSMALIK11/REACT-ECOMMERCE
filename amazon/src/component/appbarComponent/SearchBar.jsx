import React from 'react'
import { makeStyles,Box,TextField } from '@material-ui/core';
const useStyles=makeStyles((theme)=>({
    root:{
       [theme.breakpoints.down('md')]:{
           display:"none"
       }

    },
    search:{
      backgroundColor:"#fff",
      padding:"5px 10px",
      width:"440px",
      border:"none",
      borderRadius:10,
      paddingLeft:"20px"

    }
}))

const SearchBar = () => {
    const classes=useStyles();
    return (
        <>
        <Box className={classes.root}>
            <TextField placeholder="Search product... " className={classes.search} />

        </Box>
            
        </>
    )
}

export default SearchBar
