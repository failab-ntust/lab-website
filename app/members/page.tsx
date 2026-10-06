'use client'
import { Box, Chip, Grid, Avatar } from '@mui/material'
import PageTitle from '../PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '../SubTitle'
import React from 'react'

const Master = [
    // MBA
    { grade: 'Master', name: '蕭至苓', class: 'MBA', year: '115', imgSrc: '/115/蕭至苓', researchfield: '討論中...', email: 'M11521014@mail.ntust.edu.tw' },
    { grade: 'Master', name: '鄧書妤', class: 'MBA', year: '114', imgSrc: '/114/鄧書妤', researchfield: '討論中...', email: 'M11421016@mail.ntust.edu.tw'},
    { grade: 'Master', name: '李婷芳', class: 'MBA', year: '114', imgSrc: '/114/李婷芳', researchfield: '個人式AI代理人、使用者感知', email: 'M11421003@mail.ntust.edu.tw'},
    { grade: 'Master', name: '尹沛琪', class: 'MBA', year: '114', imgSrc: '/114/尹沛琪', researchfield: '討論中...', email: 'M11421019@mail.ntust.edu.tw'},
    { grade: 'Master', name: '呂采沛', class: 'MBA', year: '114', imgSrc: '/114/呂采沛', researchfield: 'AI代理人、組織管理評估', email: 'M11421025@mail.ntust.edu.tw'},
    { grade: 'Master', name: '余得如', class: 'MBA', year: '113', imgSrc: '/113/余得如', researchfield: '生成式AI、資訊不對稱、消費者行為', email: 'M11321015@mail.ntust.edu.tw' },
    { grade: 'Master', name: '葉芯妤', class: 'MBA', year: '113', imgSrc: '/113/葉芯妤', researchfield: '沉浸式體驗、使用者意圖及感知', email: 'M11321016@mail.ntust.edu.tw' },
    { grade: 'Master', name: '董念耘', class: 'MBA', year: '113', imgSrc: '/113/董念耘', researchfield: 'CSR、ESG、AI資訊揭露、企業價值', email: 'M11321029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蔡雨芳', class: 'MBA', year: '113', imgSrc: '/113/蔡雨芳', researchfield: '多代理人系統、使用者意圖及感知', email: 'M11321022@mail.ntust.edu.tw' },

    // 資管所甲組
    {grade: 'Master', name: '蔡沂庭', class: '資管所甲組', year: '115', imgSrc: '/115/蔡沂庭', researchfield: '討論中...', email: 'M11509106@mail.ntust.edu.tw'},
    { grade: 'Master', name: '潘俊廷', class: '資管所甲組', year: '115', imgSrc: '/115/潘俊廷', researchfield: '討論中...', email: 'M11509110@mail.ntust.edu.tw'},
    { grade: 'Master', name: '張姿儀', class: '資管所甲組', year: '114', imgSrc: '/114/張姿儀', researchfield: 'Agent架構優化、代理人式自動化溝通', email: 'M11409127@mail.ntust.edu.tw'},
    { grade: 'Master', name: '徐澍萭', class: '資管所甲組', year: '114', imgSrc: '/114/Benson', researchfield: 'LLM Agent、人類行為模擬', email: 'M11409111@mail.ntust.edu.tw' },
    { grade: 'Master', name: 'TRAN THI LUU LY', class: '資管所甲組', year: '113', imgSrc: '/113/TRAN THI LUU LY', researchfield: '資料分析與AI應用 Data Analysis and AI applications', email: 'M11309813@mail.ntust.edu.tw' },
    { grade: 'Master', name: '張尹寧', class: '資管所甲組', year: '112', imgSrc: '/112/張尹寧', researchfield: '聯邦式學習、圖神經學習', email: 'M11209123@mail.ntust.edu.tw' },

    // 人工智慧所
    { grade: 'Master', name: '林吉', class: '人工智慧所', year: '114', imgSrc: '/114/林吉', researchfield: '資訊安全', co_advisor:'羅乃維院長',email: 'M11452033@mail.ntust.edu.tw'},
    { grade: 'Master', name: '蔡芷芸', class: '人工智慧所', year: '114', imgSrc: '/114/蔡芷芸', researchfield: '人工智慧、機器學習', email: 'M11452026@mail.ntust.edu.tw'},
]

const _PhD = [
    { grade: 'PhD', name: '林銘鴻', class: 'AI跨域', year: '113', imgSrc: '/113/林銘鴻', researchfield: '資訊安全與個資保護標準', email: 'D11352002@mail.ntust.edu.tw' },
    //休學{ grade: 'PhD', name: '吳宥霆', class: 'AI跨域', year: '112', imgSrc: '/112/吳宥霆', researchfield: '信用評等、資料探勘、資訊安全與個資保護標準', email: 'D11252005@mail.ntust.edu.tw' }
]


const Undergraduate = [
    { grade: 'Undergraduate', name: '鄭佳茵', class: '管理學士班', year: '112', imgSrc: '/112/鄭佳茵', researchfield: '金融科技', email: 'B11233034@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '賴思穎', class: '管理學士班', year: '112', imgSrc: '/112/賴思穎', researchfield: '金融科技', email: 'B11233029@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '鍾佳諭', class: '管理學士班', year: '112', imgSrc: '/112/鍾佳諭', researchfield: '金融科技', email: 'B11233032@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '陳儀珊', class: '管理學士班', year: '112', imgSrc: '/112/陳儀珊', researchfield: '資料科學 參數最佳化', email: 'B11233030@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '陳玟君', class: '管理學士班', year: '112', imgSrc: '/112/陳玟君', researchfield: '資料科學 參數最佳化', email: 'B11233026@mail.ntust.edu.tw'},
    { grade: 'Undergraduate', name: '林易逵', class: '管理學士班', year: '112', imgSrc: '/112/林易逵', researchfield: '資料科學 參數最佳化', email: 'B11233001@mail.ntust.edu.tw'},
    

   ]

const EMBA = [
    { grade: 'EMBA', name: '李惠昭', class:'管研所',year: '115', imgSrc: '/115/李惠昭', researchfield: '討論中...', email: 'm11516122@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '羅偉倫', class:'管研所',year: '115', imgSrc: '/115/羅偉倫', researchfield: '討論中...', email: 'm11516126@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '黃建勳', class:'管研所',year: '114', imgSrc: '/114/黃建勳', researchfield: '討論中...', email: 'M11416220@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '朱正光', class:'管研所',year: '114', imgSrc: '/114/朱正光', researchfield: 'AI Agent產業應用、組織管理', email: 'M11416112@mail.ntust.edu.tw' },
    { grade: 'EMBA', name: '甘桂杭', class:'管研所',year: '114', imgSrc: '/114/甘桂杭', researchfield: 'ESG、跨產業轉型', email: 'M11416224@mail.ntust.edu.tw'}

]

const CusGrid = ({ data }: any) => (
    <Box py={2}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
            {data?.length ? data.map((person: any, index: number) => (
                <Grid size={{ xs: 4, sm: 4, md: 6, lg: 8 }} key={index}>
                    <PersonCard {...{ person }} />
                </Grid>
            )) : (
                <Grid size={{ xs: 4, sm: 8, md: 12, lg: 16 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        alt="we_want_you"
                        variant="square"
                        src={`/we_want_you.png`}
                        sx={{ width: { xs: 250, sm: 350, md: 450 }, height: { xs: 90, sm: 120, md: 150 } }}
                    />
                </Grid>
            )}
        </Grid>
    </Box>
)

export default function Members() {
    const [selectedClass, setSelectedClass] = React.useState('');

    const handleClassFilter = (className: string) => {
        setSelectedClass(className === selectedClass ? '' : className);
    }

    const classOrder = ['MBA', '資管所甲組', '人工智慧所'];

    // 年份高的在前面，先排年分，再排班別
    const sortedMaster = [...Master].sort((a, b) => {
        if (b.year !== a.year) {
            return parseInt(b.year) - parseInt(a.year);
        }
        return classOrder.indexOf(a.class) - classOrder.indexOf(b.class);
    });

    const filteredData = selectedClass
        ? sortedMaster.filter(person => person.class === selectedClass)
        : sortedMaster;

    const classOptions = Array.from(new Set(Master.map(person => person.class)));

    return (
        <Box>
            <PageTitle title='實驗室成員' />

            <SubTitle title='博士班'>
                <CusGrid data={_PhD} />
            </SubTitle>
            <SubTitle title='EMBA'>
                <CusGrid data={EMBA} />
            </SubTitle>
            <SubTitle title='碩士班'>
                <Box sx={{ mb: 2 }}>
                    {classOptions.map((className, index) => (
                        <Chip
                            key={index}
                            label={className}
                            clickable
                            onClick={() => handleClassFilter(className)}
                            sx={{ mr: 1, mb: 1 }}
                            color={selectedClass === className ? 'primary' : 'default'}
                        />
                    ))}
                </Box>
                <CusGrid data={filteredData} />
            </SubTitle>
            <SubTitle title='專題生'>
                <CusGrid data={Undergraduate} />
            </SubTitle>
        </Box>
    )
}
