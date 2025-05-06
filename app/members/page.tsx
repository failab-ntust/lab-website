'use client'
import { Box, Chip, Grid, Avatar } from '@mui/material'
import PageTitle from '../PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '../SubTitle'
import React from 'react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Master = [
    // MBA
    { grade: 'Master', name: '林智婷', class: 'MBA', year: '113', imgSrc: '/113/林智婷', researchfield: '討論中...', email: 'M11321028@mail.ntust.edu.tw' },
    { grade: 'Master', name: '余得如', class: 'MBA', year: '113', imgSrc: '/113/余得如', researchfield: '討論中...', email: 'M11321015@mail.ntust.edu.tw' },
    { grade: 'Master', name: '余祥安', class: 'MBA', year: '111', imgSrc: '/111/余祥安', researchfield: '小樣本資料、機器學習', email: 'M11121026@mail.ntust.edu.tw' },
    { grade: 'Master', name: '葉芯妤', class: 'MBA', year: '113', imgSrc: '/113/葉芯妤', researchfield: '討論中...', email: 'M11321016@mail.ntust.edu.tw' },
    { grade: 'Master', name: '董念耘', class: 'MBA', year: '113', imgSrc: '/113/董念耘', researchfield: '討論中...', email: 'M11321029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蔡雨芳', class: 'MBA', year: '113', imgSrc: '/113/蔡雨芳', researchfield: '討論中...', email: 'M11321022@mail.ntust.edu.tw' },
    { grade: 'Master', name: '王姿璇', class: 'MBA', year: '112', imgSrc: '/112/王姿璇', researchfield: '聯邦式學習、使用者意圖', email: 'M11221006@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林瑩姍', class: 'MBA', year: '112', imgSrc: '/112/林瑩姍', researchfield: '資料不平衡、聯邦式學習', email: 'M11221019@ms.ntust.edu.tw' },
    { grade: 'Master', name: 'PHAM QUYNH HUONG', class: 'MBA', year: '112', imgSrc: '/112/PHAM QUYNH HUONG', researchfield: '資料科學', email: 'M11221823@mail.ntust.edu.tw' },

    // 資管所甲組
    { grade: 'Master', name: 'TRAN THI LUU LY', class: '資管所甲組', year: '113', imgSrc: '/113/TRAN THI LUU LY', researchfield: '資料分析與AI應用 Data Analysis and AI applications', email: 'M11309813@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳錞柔', class: '資管所甲組', year: '113', imgSrc: '/113/吳錞柔', researchfield: '討論中...', email: 'M11309125@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林怡彣', class: '資管所甲組', year: '113', imgSrc: '/113/林怡彣', researchfield: '討論中...', email: 'M11309114@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蘇子晴', class: '資管所甲組', year: '113', imgSrc: '/113/蘇子晴', researchfield: '討論中...', email: 'M11309115@mail.ntust.edu.tw' },
    { grade: 'Master', name: '羅巧筠', class: '資管所甲組', year: '112', imgSrc: '/112/羅巧筠', researchfield: '大型語言模型', email: 'M11209102@mail.ntust.edu.tw' },
    { grade: 'Master', name: '劉騫', class: '資管所甲組', year: '112', imgSrc: '/112/劉騫', researchfield: '圖神經學習、神經網路壓縮', email: 'brianliu1208@gmail.com' },
    { grade: 'Master', name: '張尹寧', class: '資管所甲組', year: '112', imgSrc: '/112/張尹寧', researchfield: '聯邦式學習、圖神經學習', email: 'M11209123@mail.ntust.edu.tw' },
    { grade: 'Master', name: '温郁綺', class: '資管所甲組', year: '112', imgSrc: '/112/温郁綺', researchfield: '集成學習', email: 'M11209105@mail.ntust.edu.tw' },
    { grade: 'Master', name: '溫婉言', class: '資管所甲組', year: '112', imgSrc: '/112/溫婉言', researchfield: '聯邦式學習', email: 'M11209130@mail.ntust.edu.tw' },

    // 人工智慧所
    { grade: 'Master', name: '吳冠霖', class: '人工智慧所', year: '113', imgSrc: '/113/吳冠霖', researchfield: '語言模型、生成式AI', email: 'M11352035@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳竣宇', class: '人工智慧所', year: '112', imgSrc: '/112/吳竣宇', co_advisor: '羅乃維院長', researchfield: '圖神經學習、生成式AI', email: 'M11252003@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳軍翰', class: '人工智慧所', year: '112', imgSrc: '/112/陳軍翰', co_advisor: '羅乃維院長', researchfield: '討論中…', email: 'M11252012@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林憲紘', class: '人工智慧所', year: '112', imgSrc: '/112/林憲紘', co_advisor: '羅乃維院長', researchfield: '待確認…', email: 'M11252029@mail.ntust.edu.tw' },
]

const _PhD = [
    { grade: 'PhD', name: '林銘鴻', class: 'AI跨域', year: '113', imgSrc: '/113/林銘鴻', researchfield: '資訊安全與個資保護標準', email: 'D11352002@mail.ntust.edu.tw' },
    { grade: 'PhD', name: '吳宥霆', class: 'AI跨域', year: '112', imgSrc: '/112/吳宥霆', researchfield: '信用評等、資料探勘、資訊安全與個資保護標準', email: 'D11252005@mail.ntust.edu.tw' }
]

const EMBA = [
    { grade: 'EMBA', name: '蔡宗儒', year: '112', imgSrc: '/112/蔡宗儒', researchfield: '人工智慧與商業應用', email: 'M11216217@mail.ntsut.edu.tw' },
]

const Undergraduate = [
    { grade: 'Undergraduate', name: '鄭宇峰', class: '管理學士班', year: '111', imgSrc: '/111/鄭宇峰', researchfield: '大型語言模型', email: 'B11133022@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '陳秉承', class: '管理學士班', year: '111', imgSrc: '/111/陳秉承', researchfield: '大型語言模型', email: 'B11133023@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '何陽', class: '管理學士班', year: '111', imgSrc: '/111/何陽', researchfield: '大型語言模型', email: 'B11133033@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '林騏宇', class: '管理學士班', year: '111', imgSrc: '/111/林騏宇', researchfield: '大型語言模型', email: 'B11133002@mail.ntust.edu.tw' },


    { grade: 'Undergraduate', name: '許芷綾', class: '管理學士班', year: '110', imgSrc: '/110/許芷綾', researchfield: '圖探勘', email: 'B11033022@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '許卉萱', class: '管理學士班', year: '110', imgSrc: '/110/許卉萱', researchfield: '圖探勘', email: 'B11033018@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '劉于華', class: '管理學士班', year: '110', imgSrc: '/110/劉于華', researchfield: '圖探勘、聯邦式學習', email: 'B11033004@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '林哲宇', class: '管理學士班', year: '110', imgSrc: '/110/林哲宇', researchfield: '圖探勘、聯邦式學習', email: 'B11033023@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '孫睿君', class: '管理學士班', year: '110', imgSrc: '/110/孫睿君', co_advisor: '蕭志平教授', researchfield: 'AI數位轉型', email: 'B11033006@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '徐葒', class: '管理學士班', year: '110', imgSrc: '/110/徐葒', co_advisor: '蕭志平教授', researchfield: 'AI數位轉型', email: 'B11033038@mail.ntust.edu.tw' }
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
                        src={`${basePath}/we_want_you.png`}
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
