import React from 'react';
import {Box,Typography,makeStyles,Grid} from '@material-ui/core';
import img from './images/profile.jpg'

const useStyles= makeStyles((theme)=>({
    root:{
        width:"100%",
        minHeight:"50vh",
        height:"auto",
        background:"pink",
        position:"relative",
        marginBottom:"200px"
        
    },

    infoBox:{
        width:"70%",
        MinHeight:"80vh",
        height:"auto",
        margin:"0px auto",
        background:"#fff",
        boxShadow:"0px 0px 20px rgba(0,0,0,0.4)",
        borderRadius:"50px",
position:"absolute",
left:"15%",
top:"50%",
padding:"0px 30px 30px 30px",
borderBottom:"5px solid blue",

    },
    profileBox:{
        display:"flex",
flexDirection:"column",
alignItems:"center",

    },
    profilePic:{
        width:"150px",
        height:"150px",
        borderRadius:"50%",
        background:"#333",
        marginTop:"-50px",
        border:"4px solid #444"
    },
    profileImg:{
        width:"100%",
     
        borderRadius:"50%",
        
       

    },
    info:{
        textAlign:"left",
        '& > *':{
            fontSize:"20px",
            fontWeight:"bold",
            lineHeight:"40px"

        }
        
    }





}))

const CardProfile = () => {

    const styles= useStyles()
    return (
   <>
   <Box className={styles.root}>
   
        <Box className={styles.infoBox}>


            <Box className={styles.profileBox}>
            <Box className={styles.profilePic}>

<img src={img} alt=""className={styles.profileImg} />
</Box>
            </Box>

<Grid container >
<Grid item sm={6} md={4} lg={4}>
<Box mt={5}  className={styles.info}>
              <Typography>Name : MR SHOAIB </Typography>
              <Typography>Email : msm76441@gmail.com </Typography>
              <Typography>Phone : 7300519548 </Typography>
            </Box>
</Grid>
<Grid item sm={6} md={4} lg={4}>
<Box mt={5} className={styles.info}>
              <Typography>Address : Saharanpur </Typography>
              <Typography>Religion : India </Typography>
              <Typography>Pin : 247121 </Typography>
            </Box>
</Grid>
<Grid item sm={6} md={4} lg={4}>
<Box mt={5} className={styles.info}>
              <Typography>Active order : 3 </Typography>
              <Typography>delivered  : 5 </Typography>
              <Typography>cancled : 1 </Typography>
            </Box>

</Grid>
    
</Grid>


        </Box>
   </Box>




   </>

            
       
    )
}

export default CardProfile
