import * as React from 'react';
import { Box, IconButton, MobileStepper, Paper, Typography, Chip, Stack } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// 建立該年份的資料夾，放到public/lab-photo/XXX
// { label: '{year}', text: '{emoji} {text}', photoCount: '{number of the photos}' }
const images = [
    { label: '113', text: '🍸Cheers&Co.餐酒館', photoCount: 34 },
    { label: '112', text: '🎉饗食天堂', photoCount: 2 },
    { label: '111', text: '🎄聖誕期末聚餐', photoCount: 4 },
];

function ImageCarousel() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedLabelIndex, setSelectedLabelIndex] = React.useState(0);
    const swiperRef = React.useRef(null);

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
            swiperRef.current?.slideNext();
        } else {
            handleNextGroup();
        }
    };

    // 處理上一步
    const handleBack = () => {
        if (activeStep > 0) {
            swiperRef.current?.slidePrev();
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
                    {images.map((item, i) => (
                        <Chip
                            key={i}
                            variant={selectedLabel === item.label ? 'filled' : 'outlined'}
                            label={`${item.label} 年`}
                            onClick={() => {
                                setSelectedLabelIndex(i);
                                setActiveStep(0);
                            }}
                            sx={{ cursor: 'pointer' }}
                        />
                    ))}
                </Stack>
            </Paper>

            {selectedLabel && (
                <>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => {
                            const newIndex = swiper.realIndex;
                            setActiveStep(newIndex);
                            if (newIndex === maxSteps - 1) {
                                setTimeout(() => handleNextGroup(), 3000); // 切換到下一組
                            }
                        }}
                        loop={false}
                        slidesPerView={1}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {filteredImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{ position: 'relative', paddingTop: '70%' }}>
                                    <Box
                                        component="img"
                                        src={item.src}
                                        alt={item.text}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Typography align="center" sx={{ mt: 1 }}>
                        {filteredImages[activeStep]?.text} - {activeStep + 1}
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

export default ImageCarousel;
