import React, { useState } from 'react'
import { Button, FormControl, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, Box, Typography, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    root: {
        width: "90vh",
        height: "70vh",
        [theme.breakpoints.down('sm')]:{
            width:'60vh'
        }
    },

    
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        backgroundRepeat: "no-repeat",
        height: "70vh",
        background: "#2874f0",
        width: "320px",
        backgroundPosition: "center 85%",
        padding:"45px 35px",
        '& > *': {

            fontSize: "24px",
            color:"#fff",
            fontWeight:"bold"
        },
        [theme.breakpoints.down('sm')]:{
            display:"none"
        }
    },
    main: {
        display: "flex",
        
    },
    rightMain: {
        // width: "520",
        padding: "25px 35px ",
        display: "flex",
        flexDirection: "column",
        flex:1,
    
    


    },
    input: {
        width: 400,
        margin:"20px 0px"

    },
   rightForm:{
       marginTop:"50px"
   },
   togglebtn:{
       color:"blue",
       fontSize:"20px",
       marginTop:"100px",
       cursor:"pointer"
   }
   
}))
const initialValues={
    login:{
        view:"login",
        heading:"login",
        subHeading:" Get access to your Orders, Wishlist and  Recommendations"
    },
    signup:{
        view:"signup",
        heading:"looks like you are new here!",
        subHeading:"signup with your mobile number and get started"
    }
}

const Login = () => {
    const [open, setOpen] = useState(false);
    const[account,setAccount] = useState(initialValues.login)
    const styles = useStyles()

    const dialoghandle = () => {

        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setAccount(initialValues.login)
    }
    const toggleAccount=()=>{
        setAccount(initialValues.signup)
    }
    return (
        <div>
            <Button
                onClick={dialoghandle}
                variant="contained"
            >login</Button>

            <Dialog open={open} onClose={handleClose} >
                <DialogContent className={styles.root}>
                    <FormControl className={styles.form}>
                        <Box className={styles.main}>
                            <Box className={styles.image}>

                                <Typography variant="h5" >{account.heading}  </Typography>
                                <Typography style={{marginTop:"30px"}} >{account.subHeading}</Typography>


                            </Box>
                            {
                                account.view === "login" ?
                           
                            <Box className={styles.rightMain}  >
                                <Box className={styles.rightForm}>
                                <Typography>email</Typography>
                                <TextField id="my-input"
                                    className={styles.input}
                                    placeholder="Enter Your Email.." />
                                <Typography>Password</Typography>
                                <TextField className={styles.input} placeholder="Enter Your Passsword..." />

                                <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>

                                <Typography className={styles.togglebtn} onClick={toggleAccount} >Create an account</Typography>
                                </Box> 

                            </Box>
                            :  <Box className={styles.rightMain}  >
                            <Box className={styles.rightForm}>
      
                            <TextField 
                                className={styles.input}
                                placeholder="Enter Your Email.." />
                            <Typography>Password</Typography>
                            <TextField className={styles.input} placeholder="Enter Your Name..." />
                            <TextField className={styles.input} placeholder="Enter Your Email..." />
                            <TextField className={styles.input} placeholder="Enter Your Passsword..." />
                            <TextField className={styles.input} placeholder="Enter Your Mobile Number ..." />

                            <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>

                            <Typography>Create an account</Typography>
                            </Box> 

                        </Box>
                            
                                
                        }

                        </Box>

                    </FormControl>
                </DialogContent>
            </Dialog>


        </div>
    )
}

export default Login
