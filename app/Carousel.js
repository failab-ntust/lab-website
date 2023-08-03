import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, MobileStepper, Paper, Typography } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    // const [showOverlay, setShowOverlay] = React.useState(false);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#F5F5F5', borderRadius: 5, }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: '#F5F5F5', borderRadius: 5,
                }}
            >
                <Typography>{images[activeStep].label}</Typography>
            </Paper>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <Box key={index}
                    // sx={{ position: 'relative' }}
                    // onMouseOver={() => setShowOverlay(true)}
                    // onMouseOut={() => setShowOverlay(false)}
                    >
                        <Box
                            component="img"
                            key={index}
                            sx={{
                                display: 'block',
                                width: '100%',
                                height: '56.25%',
                                overflow: 'hidden'
                            }}
                            src={step.imgPath}
                            alt={step.label}
                        />
                        {/* {showOverlay &&
                            <Box sx={{
                                position: 'absolute', top: 0, width: '100%',
                                height: '100%', bgcolor: '#000000', opacity: 0.5
                            }}>
                                <IconButton size="large" onClick={handleBack} >
                                    <KeyboardArrowLeft />
                                </IconButton>
                                <IconButton size="large" onClick={handleNext}>
                                    <KeyboardArrowRight />
                                </IconButton>
                            </Box>} */}
                    </Box>
                ))}

            </AutoPlaySwipeableViews>

            <MobileStepper
                variant="text"
                sx={{ bgcolor: 'transparent' }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <IconButton size="small" onClick={handleNext}>
                        <KeyboardArrowRight />
                    </IconButton>
                }
                backButton={
                    <IconButton size="small" onClick={handleBack}>
                        <KeyboardArrowLeft />
                    </IconButton>
                }
            />
        </Box >
    );
}

export default SwipeableTextMobileStepper;
