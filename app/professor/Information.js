'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, ListItem, Stack, Divider, Grid, Tabs, Tab, Link } from '@mui/material';
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
                    src='date.svg'
                    alt='date'
                    width={23}
                    height={23}
                />
                <Typography sx={{ bgcolor: '#FFD700', ml: 1 }}>
                    {duringtime}
                </Typography>
            </Stack>
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

        </Stack>
    </Stack>
)

const Experience = ({ workplace, position, duringtime }) => (
    <Stack spacing={2}>
        <Typography variant='h6'>
            {workplace}
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.5, sm: 2 }}>
            <Stack direction="row" justifyContent={{ xs: 'flex-start', sm: 'center' }} alignItems="center">
                <Image
                    src='date.svg'
                    alt='date'
                    width={23}
                    height={23}
                />
                <Typography component='span' sx={{ bgcolor: '#FFD700', width: 'fit-content', ml: 1 }}>
                    {duringtime}
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent={{ xs: 'flex-start', sm: 'center' }} alignItems="center">
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
        </Stack>
    </Stack >
)

const MBACourses = [
    { course: '數位金融概論111-1', link: 'https://moodle2.ntust.edu.tw/course/view.php?id=4405', img: 'digital-finance' }
]
const UniversityCourses = [
    { course: '大數據分析導論 111-1', link: 'https://moodle2.ntust.edu.tw/course/view.php?id=4005', img: 'big-data' },
    { course: '大數據分析導論 110-2', link: 'https://moodle2.ntust.edu.tw/course/view.php?id=1790', img: 'big-data' },
    { course: '計算機概論 111-2', link: 'https://moodle2.ntust.edu.tw/course/view.php?id=5832', img: 'computer-science' }
]
const CourseGrid = ({ course, link, img }) => (
    <Stack direction="column" justifyContent="center" alignItems="center"
        spacing={2}
        component={Link}
        href={link}
        target="_blank"
        sx={{
            textDecoration: 'none',
            color: 'inherit',
            bgcolor: 'white',
            height: { xs: 200, sm: 250 },
            transition: "transform 200ms ease-in-out",
            "&:hover": {
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                backgroundColor: "white",
                transform: "scale(1.02)"
            }
        }}>
        <Image
            src={`${img}.svg`}
            alt={img}
            width={100}
            height={100}
        />
        <Typography variant='body1' align="center" sx={{ fontWeight: 600 }}>
            {course}
        </Typography>
    </Stack>
)
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 9, md: 12, lg: 16 }} >
                    {children}
                </Grid>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Information() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ height: '100%' }}>
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

            <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={4} sm={8} md={6}>
                    <CusBox title="經歷">

                        <Experience {...{ workplace: '國立台北商業大學 – 會計資訊系', position: '專案助理教授', duringtime: '2021/08～2022/07' }} />

                        <Divider sx={{ m: 2 }} />

                        <Experience {...{ workplace: '台灣智慧財產運營協會', position: '秘書長', duringtime: '2022/01～2022/07' }} />

                        <Divider sx={{ m: 2 }} />

                        <Experience {...{ workplace: '富邦媒體科技 – 資訊科技處', position: '專案經理', duringtime: '2014/09～2021/07' }} />

                        <Divider sx={{ m: 2 }} />

                        <Experience {...{ workplace: '富邦金控 – 創新科技辦公室', position: '大數據暨人工智慧組組長', duringtime: '2015/10～2020/08' }} />
                    </CusBox>
                </Grid>
                <Grid item xs={4} sm={8} md={6}>
                    <CusBox title="學歷">
                        <Education {...{ school: '國立成功大學工業與資訊管理所', degree: '博士', duringtime: '2009/09～2012/05' }} />

                        <Divider sx={{ m: 2 }} />

                        <Education {...{ school: '國立中正大學醫療與資訊管理所', degree: '碩士', duringtime: '2007/09～2009/07' }} />
                    </CusBox>

                </Grid>
            </Grid>
            <Dots />

            <CusBox title="教授課程">
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        textColor='secondary'
                        indicatorColor='secondary'
                    >
                        <Tab label="MBA" disableRipple {...a11yProps(0)} />
                        <Tab label="大學部" disableRipple {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    {MBACourses.map((mba, index) => (
                        <Grid item xs={4} sm={3} md={4} lg={4} key={index}>
                            <CourseGrid course={mba.course} link={mba.link} img={mba.img} />
                        </Grid>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {UniversityCourses.map((university, index) => (
                        <Grid item xs={4} sm={3} md={4} lg={4} key={index}>
                            <CourseGrid course={university.course} link={university.link} img={university.img} />
                        </Grid>
                    ))}
                </CustomTabPanel>
            </CusBox >
        </Box>
    );
}
