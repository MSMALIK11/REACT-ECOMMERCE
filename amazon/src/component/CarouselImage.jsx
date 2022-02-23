import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from './constant/data';
import { Box, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  
    bannerimg: {
        width: "100%",
        height: "340px",
        backgroundSize: "cover",
        objectFit: "center"


    }
})

const CarouselImage = () => {
    const classes = useStyles();
    return (
        <>
            <Carousel
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{        
                    style: {
                        backgroundColor: '#fff',
                        borderRadius: 0,
                        color:"#494949",
                        margin:'0',
                        height:"120px",
                        fontSize:50
                    }
                }} 

            >
                {
                    bannerData.map((item, index) => {
                        return (
                            <Box className={classes.root}>
                                <img src={item} alt="banner" className={classes.bannerimg} />
                            </Box>
                        )
                    })
                }

            </Carousel>

        </>
    )
}

export default CarouselImage
