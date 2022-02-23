import React,{useState} from 'react';
import { Dialog,DialogContent, Typography,makeStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';

const url='https://sd.keepcalms.com/i-w600/thank-you-for-your-order-28.jpg'
const useStyles=makeStyles({
    root:{
        width:"90vh",
        height:"70vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        background:blue[700]
       
    },
    image:{
        width:"100%",
        height:"100%"
    }
})


const DiologThank = ({open}) => {
  
  const styles=useStyles()
    return (
        <Dialog open={open} > 

            <DialogContent className={styles.root}>
               <img src={url} className={styles.image} />
            </DialogContent>
        </Dialog>
    )
}

export default DiologThank
