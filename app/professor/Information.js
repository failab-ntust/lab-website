'use client';
import * as React from 'react';
import { Box, Typography, ListItem, Stack, Divider } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image'

const CusBox = ({ title, children }) => (
    <>
        <ListItem disableGutters>
            <MonetizationOnIcon fontSize="large" sx={{ mr: 1, color: "#FFD700" }} />
            <Typography variant="h5" noWrap sx={{ lineHeight: 'normal', fontWeight: 700 }}>
                {title}
            </Typography>
        </ListItem>
        <Box sx={{ bgcolor: '#F5F5F5', p: { xs: 2, md: 3 }, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
            {children}
        </Box>
    </>
)


const Dots = () => (
    <Stack direction="row" spacing={2} justifyContent="center" m={3} mt={6} >
        {Array.from(Array(3)).map((_, index) => (
            <CircleIcon color='primary' sx={{ fontSize: 15 }} key={index} />
        ))}
    </Stack>
)

const Education = ({ school, degree, duringtime }) => (
    <Stack spacing={2}>
        <Typography variant='h6'>
            {school}
        </Typography>
        <Stack direction="row" spacing={2}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Image
                    src='degree.svg'
                    alt='degree'
                    width={30}
                    height={30}
                />
                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {degree}
                </Typography>
            </Stack>
            <Stack justifyContent="center">
                <Typography sx={{ bgcolor: '#FFD700', px: 1 }}>
                    {duringtime}
                </Typography>
            </Stack>
        </Stack>
    </Stack>
)

const Experience = ({ workplace, position, duringtime }) => (
    <Stack spacing={2}>
        <Typography variant='h6'>
            {workplace}
        </Typography>
        <Stack direction="row" spacing={2}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Image
                    src='job-position.svg'
                    alt='job-position'
                    width={30}
                    height={30}
                />
                <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    {position}
                </Typography>
            </Stack>
            <Stack justifyContent="center">
                <Typography sx={{ bgcolor: '#FFD700', px: 1 }}>
                    {duringtime}
                </Typography>
            </Stack>
        </Stack>
    </Stack>
)

export default function Information() {

    return (
        <>
            <CusBox title="簡介">
                <Typography>
                    Chih-Chieh Chang (CCC) received the Ph.D. degree from the Department of Industrial and Information Management, National Cheng Kung University, Tainan City, Taiwan, in 2012. He is currently an Assistant Professor with the School of Management, National Taiwan University of Science Technology (NTUST), Taipei City, Taiwan. His research interests include machine learning, data mining, digital transformation and financial technology. Due to his past work experience, CCC puts more emphasis on the connection between practice and academic research.
                    <br /><br />
                    His research has been published in some data mining and machine learning related journals, including Decision Support System (Q1), IEEE TCSS (Q2), Journal of Intelligent Manufacturing (Q1), and etc. He also has some conference papers presented in IEEE Big Data and GSIS.
                    <br /><br />
                    Regarding industry experience, he had eight years in Fubon Group including Fintech office and momo, which he focused on promoting using data science and machine learning tools to help enterprises to process digital transformation. He had finished projects: Robo advisor, Chatbot, Cross Domain data analysis platform.
                </Typography>
            </CusBox>

            <Dots />

            <CusBox title="學歷">
                <Education {...{ school: '國立成功大學工業與資訊管理所', degree: '博士', duringtime: '2009/09～2012/05' }} />

                <Divider sx={{ m: 2 }} />

                <Education {...{ school: '國立中正大學醫療與資訊管理所', degree: '碩士', duringtime: '2007/09～2009/07' }} />
            </CusBox>

            <Dots />

            <CusBox title="經歷">

                <Experience {...{ workplace: '國立台北商業大學 – 會計資訊系', position: '專案助理教授', duringtime: '2021/08～2022/07' }} />

                <Divider sx={{ m: 2 }} />

                <Experience {...{ workplace: '台灣智慧財產運營協會', position: '秘書長', duringtime: '2022/01～2022/07' }} />

                <Divider sx={{ m: 2 }} />

                <Experience {...{ workplace: '富邦媒體科技 – 資訊科技處', position: '專案經理', duringtime: '2014/09～2021/07' }} />

                <Divider sx={{ m: 2 }} />

                <Experience {...{ workplace: '富邦金控 – 創新科技辦公室', position: '大數據暨人工智慧組組長', duringtime: '2015/10～2020/08' }} />
            </CusBox>

            <Dots />

            <CusBox title="教授課程">

            </CusBox>
        </>
    );
}
