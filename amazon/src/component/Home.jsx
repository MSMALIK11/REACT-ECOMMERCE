import React from 'react'
import Appbar from './Appbar'
import TopItem from './TopItem'
import { Box,makeStyles } from '@material-ui/core';



import CarouselImage from './CarouselImage';
import Slider from './Slider';
import Products from './Products';
const useStyles=makeStyles({
    root:{
        margin:"80px 130px 100px 130px",
     
 
    },
    component:{
        padding:"10px",
        backgroundColor:"#F2F2F2",
      
        alignItems:"center",
        // height:"100vh",
        marginBottom:30
       
      
    }
})
function Home() {
    const classes= useStyles()
    return (
        <>
          <Appbar />


        <Box className={classes.root}>
 
   <TopItem />
   
   
        </Box>
      <Box className={classes.component}>
     
      <CarouselImage />
      <Slider />
      </Box>
      <Products />
      
        </>
    )
}

export default Home
