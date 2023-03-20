import React from 'react'
import { makeStyles,Box,Grid,Typography } from '@material-ui/core'
import { navData } from './constant/data'

const useStyles=makeStyles({
    root:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between"
    },
    title:{
        textAlign:"center",
        fontWeight:"bold",
        lineHeight:"10px"
    }

})

const TopItem = () => {
const classes=useStyles();

    return (
        <>

       <Box className={classes.root}>
     {navData.map((value)=>{
       return(

        <Box >
        <img src={value.url} style={{width:"120px"}} />
        <Typography className={classes.title}>{value.text}</Typography>

        </Box>
       )
     })}
        </Box>

        </>
    )
}

export default TopItem
