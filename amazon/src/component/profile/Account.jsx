import React from 'react';
import {Grid,Typography,makeStyles,Box} from '@material-ui/core'
import CardProfile from './CardProfile';
import Rightinfo from './Rightinfo';
const useStyles= makeStyles((theme)=>({
    root:{
        background:"#dfdeafd",
      
    
overflowX:"hidden",


    },
  
}))

const Account = () => {
    const styles= useStyles();
    return (
        <Box className={styles.root}>
       <CardProfile />
       {/* <Rightinfo /> */}
            
        </Box>
    )
}

export default Account

