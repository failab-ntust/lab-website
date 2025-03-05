import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, MobileStepper, Paper, Typography, Chip, Stack } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// 建立該年份的資料夾，放到public/lab-photo/XXX
// { label: '{year}', text: '{emoji} {text}', photoCount: '{number of the photos}' }
const images = [
    { label: '113', text: '🍸Cheers&Co.餐酒館', photoCount: 34 },
    { label: '112', text: '🎉饗食天堂', photoCount: 2 },
    { label: '111', text: '🎄聖誕期末聚餐', photoCount: 4 },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedLabelIndex, setSelectedLabelIndex] = React.useState(0);

    const selectedLabel = images[selectedLabelIndex]?.label;

    // 根據選擇的標籤動態生成圖片數據
    const filteredImages = React.useMemo(() => {
        const selectedImage = images[selectedLabelIndex];
        if (!selectedImage) return [];
        return Array.from({ length: selectedImage.photoCount }, (_, index) => ({
            label: selectedLabel,
            text: `${selectedImage.text}`,
            src: `lab-photo/${selectedLabel}/${index + 1}.jpg`,
        }));
    }, [selectedLabelIndex, selectedLabel]);

    const maxSteps = filteredImages.length;

    // 處理下一步，並自動切換到下一組圖片
    const handleNext = () => {
        if (activeStep + 1 < maxSteps) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            handleNextGroup();
        }
    };

    // 處理上一步
    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        } else {
            handlePreviousGroup();
        }
    };

    // 切換到下一組圖片
    const handleNextGroup = () => {
        setActiveStep(0);
        setSelectedLabelIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // 切換到上一組圖片
    const handlePreviousGroup = () => {
        setActiveStep(0);
        setSelectedLabelIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // 處理步驟變化
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const filterLabels = images.map((item) => item.label);

    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#F5F5F5', borderRadius: 5 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: '#F5F5F5',
                    borderRadius: 5,
                }}
            >
                <Stack direction="row" spacing={1} sx={{ overflowX: 'auto' }}>
                    {filterLabels.map((label, i) => (
                        <Chip
                            key={i}
                            variant={selectedLabel === label ? 'contained' : 'outlined'}
                            label={`${label} 年`}
                            onClick={() => {
                                setSelectedLabelIndex(i);
                                setActiveStep(0);
                            }}
                            disableRipple
                            sx={{ cursor: 'pointer' }}
                        />
                    ))}
                </Stack>
            </Paper>

            {selectedLabel && (
                <>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                        onTransitionEnd={() => {
                            if (activeStep === maxSteps - 1) {
                                handleNextGroup();
                            }
                        }}
                    >
                        {filteredImages.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'block',
                                    position: 'relative',
                                    paddingTop: '70%',
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                    src={item.src}
                                    alt={item.text}
                                />
                            </Box>
                        ))}
                    </AutoPlaySwipeableViews>
                    <Typography align="center">
                        {filteredImages[activeStep]?.text}-{activeStep + 1}
                    </Typography>

                    <MobileStepper
                        variant="text"
                        sx={{ bgcolor: 'transparent' }}
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <IconButton size="small" onClick={handleNext} disabled={maxSteps <= 1}>
                                <KeyboardArrowRight />
                            </IconButton>
                        }
                        backButton={
                            <IconButton size="small" onClick={handleBack} disabled={maxSteps <= 1}>
                                <KeyboardArrowLeft />
                            </IconButton>
                        }
                    />
                </>
            )}
        </Box>
    );
}

export default SwipeableTextMobileStepper;
