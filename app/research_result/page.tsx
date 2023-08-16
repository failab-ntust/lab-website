'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Tabs, Tab, Stepper, Step, StepLabel } from '@mui/material';

import PageTitle from '../PageTitle'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function CustomTabPanel(props: TabPanelProps) {
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
                <Box px={3} sx={{ overflowY: 'auto' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const NSTC = [
    '計畫主持人 111-2410-H-011 -041 -MY2 在保護個人隱私下建構跨產業資料共享框架 2022/10/01 ~ 2024/09/30'
]

const IndustryCooperation = [
    '計畫主持人，運用大數據及人工智慧技術建構風險引擎2.0 2023/01/01~2023/12/31',
    '計畫主持人，企業資安風險評估計畫 2022/10/01~2023/09/30',
    '偕同計畫主持人，數位錢包之資安框架建構-APP及底層技術設計 2022/11/01~2022/12/31'
]

const JournalPaper = [
    'B.-Y. Hsu, P.-Y. Chang, Y.-L.Chen, Y.-C. Ho, C.-C. Chang, C.-Y. Shen, and B.-C. Shia (2022, Nov). Diversity-Optimized Group Extraction in Social Networks. IEEE Transactions on Computational Social Systems . (Accepted).',
    'V. Kumar, R. Kumar, A.-A. Khan, V. Kumar, Y.-C. Chen, and C.-C. Chang (2022, Apr). RAFI: Robust Authentication Framework for IoT based RFID Infrastructure. Sensors, DOI:10.3390/s22093110. (Accepted).',
    'C.-C. Chang , M.-Y. Chang, J.-Y. Jhang, L.-Y. Yeh, and C.-Y. Shen (2022, Feb). Learning to Extract Expert Teams in Social Networks. IEEE Transactions on Computational Social Systems, DOI: 10.1109/TCSS.2022.3152179. (Accepted). 本人為第一作者.',
    'D.-C. Li, P.-H. Hsu, and C.-C. Chang (2014, Apr). A Genetic Algorithm-Based Approach for Single-Machine Scheduling with Learning Effect and Release Time. Mathematical Problems in Engineering, vol. 2014, Article ID 249493, 12 pages, 2014. https://doi.org/10.1155/2014/249493.',
    'D.-C. Li, C.-C.Chang, C.-W. Liu, and W.-C. Chen (2013, May). A New Approach for Manufacturing Forecast Problems with Insufficient Data – the Case of TFT-LCDs. Journal of Intelligent Manufacturing, 24(2), 225-233.',
    'D.-C. Li, C.-C.Chang, C.-W. Liu, and W.-C. Chen (2013, May). A New Approach for Manufacturing Forecast Problems with Insufficient Data – the Case of TFT-LCDs. Journal of Intelligent Manufacturing, 24(2), 225-233.'
]

const ConferencePaper = [
    '張詠盛, 蔣昱弘, 張智傑, 陳駿 （2022年05月）。電影短文評論之情感分析-整合孿生網絡與深度神經網絡。2022人工智慧技術及應用研討會。',
    'C.-C. Chen, K.-W. Lee, Chang C. C., D.-N. Yang, and M.-S. Chen (2013, Oct). Efficient Large Graph Pattern Mining for Big Data in the Cloud. Proc. of the 2013 IEEE International Conference on Big Data.',
    'D.-C. Li, I.-S. Wen, and C.-C. Chang (2013, Jun). A new virtual-sample-generating method based on the heuristics algorithm.. 2013 IEEE International Conference on Grey Systems and Intelligent Services.',
    '利德江*,張智傑,劉巧雯（2011年01月）。擴充資料維度提升小樣本品質預測能力-以TFT-LCDs製造為例。2011第四屆資訊科技應用研討會。',
    '利德江,張智傑*,劉巧雯（2010年12月）。利用資料分群轉換提升良率預測能力-以大尺寸偏光板製造為例。2010電子化企業實務研討暨論文發表會。'
]

const CusStepper = ({ data }: any) => (
    <Stepper orientation="vertical">
        {data.map((item: string, index: number) => (
            <Step active key={index}>
                <StepLabel>
                    <Typography>
                        {item}
                    </Typography>
                </StepLabel>
            </Step>
        ))}
    </Stepper >
)


export default function Result() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box height='100%'>
            <PageTitle title='研究成果' />
            <Box sx={{ bgcolor: '#F5F5F5', borderRadius: 5, minHeight: '88%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        textColor='secondary'
                        indicatorColor='secondary'
                        variant="scrollable"
                    >
                        <Tab disableRipple {...a11yProps(0)}
                            label={
                                <Typography variant="body1" noWrap>
                                    國科會計畫
                                </Typography>
                            } />
                        <Tab disableRipple {...a11yProps(1)}
                            label={
                                <Typography variant="body1" noWrap>
                                    產學合作案
                                </Typography>
                            } />
                        <Tab disableRipple {...a11yProps(2)}
                            label={
                                <Typography variant="body1" noWrap>
                                    Publication
                                </Typography>
                            } />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <CusStepper data={NSTC} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <CusStepper data={IndustryCooperation} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Typography variant='h6' color='secondary'>
                        Journal Paper
                    </Typography>
                    <CusStepper data={JournalPaper} />
                    <br />
                    <Typography variant='h6' color='secondary'>
                        Conference Paper
                    </Typography>
                    <CusStepper data={ConferencePaper} />

                </CustomTabPanel>
            </Box>
        </Box >
    )
}

