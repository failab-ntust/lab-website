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
        label: '🎉聖誕期末聚餐-1',
        imgPath: 'lab-photo/lab-photo-1.jpg',
    },
    {
        label: '🎉聖誕期末聚餐-2',
        imgPath: 'lab-photo/lab-photo-2.jpg',
    },
    {
        label: '🎉聖誕期末聚餐-3',
        imgPath: 'lab-photo/lab-photo-3.jpg',
    },
    {
        label: '🎉聖誕期末聚餐-4',
        imgPath: 'lab-photo/lab-photo-4.jpg',
    },
    {
        label: '🎉2024年實驗室聚餐-1',
        imgPath: 'lab-photo/lab-photo-5.jpg',
    },
    {
        label: '🎉2024年實驗室聚餐-2',
        imgPath: 'lab-photo/lab-photo-6.jpg',
    }
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

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
                    <Box key={index} sx={{
                        display: 'block',
                        position: 'relative',
                        paddingTop: '70%'
                    }}>
                        <Box
                            component="img"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                            src={step.imgPath}
                            alt={step.label}
                        />
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
