import React from 'react'
import{Typography,Box,Button,makeStyles,Paper} from '@material-ui/core'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { dealData } from './constant/data'
import Countdown from 'react-countdown'
const useStyles= makeStyles((theme)=>({
root:{
backgroundColor:"#fff",
padding:"30px"

},
    container:{
        marginTop:'30px',
        marginBottom:"1px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"20px 30px"
      
    },
    img:{
        height:150
    },
    center:{
        display:"flex",
        alignItems:"center",
      
    },
    dealText:{
        color:"#111",
        fontSize:"24px",
        fontWeight:"bold",
        marginRight:"20px",
    
    },
    timer:{
        color:"#7f7f7f",
        
    }
}))
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      
    }
  };
const Slider = () => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const classes= useStyles()
  const renderer= ({hours,minutes,seconds})=>{
      return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left  </span>
  }
   
    return (
        <>
        <Paper className={classes.container}>
        <Box className={classes.center}><Typography className={classes.dealText}> Deals of the day </Typography>
        <img src={timerURL}  alt="timere" style={{marginRight:'20px'}} />
            <Countdown date={Date.now() + 5.04e+7  } renderer={renderer} />
            </Box>
        <Box>
            <Button variant="contained" size="large" color="primary">View All</Button>
        </Box>


        </Paper>
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        showDots={false}
        centerMode={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
             {
                    dealData.map((item, index) => {
                        return (
                            <Box className={classes.root}>
                                <img src={item.url} alt="banner" className={classes.img} />
                                <Typography>{item.title.shortTitle}</Typography>
                            </Box>
                        )
                    })
                }

        </Carousel>
            
        </>
    )
}

export default Slider
