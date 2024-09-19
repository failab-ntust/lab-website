'use client'
import { Box, Typography, Grid, Avatar } from '@mui/material'
import PageTitle from '../PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '../SubTitle'


const Master = [
    { grade: 'Master', name: '吳錞柔', class: '資管碩甲', year: '113', imgSrc: '/113/吳錞柔', researchfield: '討論中...', email: 'M11309125@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳冠霖', class: '人工智慧跨領域研究所', year: '113', imgSrc: '/113/吳冠霖', researchfield: '待確認', email: 'M11352035@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林怡彣', class: '資管碩甲', year: '113', imgSrc: '/113/林怡彣', researchfield: '討論中...', email: ' M11309114@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蘇子晴', class: '資管碩甲', year: '113', imgSrc: '/113/蘇子晴', researchfield: '討論中...', email: 'M11309115@mail.ntust.edu.tw' },
    { grade: 'Master', name: '羅巧筠', class: '資管所甲組', year: '112', imgSrc: '/112/羅巧筠', researchfield: '討論中…', email: 'M11209102@mail.ntust.edu.tw' },
    { grade: 'Master', name: '劉騫', class: '資管所甲組', year: '112', imgSrc: '/112/劉騫', researchfield: '討論中...', email: 'brianliu1208@gmail.com' },
    { grade: 'Master', name: '張尹寧', class: '資管所甲組', year: '112', imgSrc: '/112/張尹寧', researchfield: '討論中...', email: 'M11209123@mail.ntust.edu.tw' },
    { grade: 'Master', name: '溫郁綺', class: '資管所甲組', year: '112', imgSrc: '/112/溫郁綺', researchfield: '討論中...', email: 'M11209105@mail.ntust.edu.tw' },
    { grade: 'Master', name: '溫婉言', class: '資管所甲組', year: '112', imgSrc: '/112/溫婉言', researchfield: '待確認', email: 'M11209130@mail.ntust.edu.tw' },
    { grade: 'Master', name: '王姿璇', class: 'MBA', year: '112', imgSrc: '/112/王姿璇', researchfield: '聯邦式學習、使用者意圖', email: 'M11221006@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林瑩姍', class: 'MBA', year: '112', imgSrc: '/112/林瑩姍', researchfield: '討論中…', email: 'm11221019@ms.ntust.edu.tw' },
    { grade: 'Master', name: '吳竣宇', class: '產創-AI所', year: '112', imgSrc: '/112/吳竣宇', co_advisor: '羅乃維院長', researchfield: '討論中…', email: 'M11252003@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳軍翰', class: '產創-AI所', year: '112', imgSrc: '/112/陳軍翰', co_advisor: '羅乃維院長', researchfield: '討論中…', email: 'M11252012@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林憲紘', class: '產創-AI所', year: '112', imgSrc: '/112/林憲紘', co_advisor: '羅乃維院長', researchfield: '待確認…', email: 'M11252029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳孟蓁', class: '產創-AI所', year: '112', imgSrc: '/112/吳孟蓁', researchfield: 'AutoML', email: 'M11252027@mail.ntust.edu.tw' },
    { grade: 'Master', name: '錢嘉偉', class: '產創-AI所', year: '111', imgSrc: '/111/錢嘉偉', researchfield: '影像辨識、深度學習、運動科學', email: 'M11152029@mail.ntust.edu.tw' }
]
const _PhD = [
    { grade: 'Master', name: '林銘鴻', class: 'AI跨域', year: '113', imgSrc: '/113/林銘鴻', researchfield: '資訊安全與個資保護標準', email:  'D11352002@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳宥霆', class: 'AI跨域', year: '112', imgSrc: '/112/吳宥霆', researchfield: '信用評等、資料探勘、資訊安全與個資保護標準', email: 'D11252005@mail.ntust.edu.tw' }    
]

const EMBA = [
    { grade: 'EMBA', name: '蔡宗儒', year: '112', imgSrc: '/112/蔡宗儒', researchfield: '待確認', email: 'M11216217@mail.ntsut.edu.tw' },
]

const Undergraduate = [
    { grade: 'Undergraduate', name: '許芷綾', class: '管理學士班', year: '112', imgSrc: '/112/許芷綾', researchfield: '圖探勘', email: 'B11033022@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '許卉萱', class: '管理學士班', year: '112', imgSrc: '/112/許卉萱', researchfield: '圖探勘', email: 'B11033018@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '劉于華', class: '管理學士班', year: '112', imgSrc: '/112/劉于華', researchfield: '圖探勘、聯邦式學習', email: 'B11033004@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '林哲宇', class: '管理學士班', year: '112', imgSrc: '/112/林哲宇', researchfield: '圖探勘、聯邦式學習', email: 'B11033023@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '孫睿君', class: '管理學士班', year: '112', imgSrc: '/112/孫睿君', co_advisor: '蕭志平教授', researchfield: 'AI數位轉型', email: 'B11033006@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '徐葒', class: '管理學士班', year: '112', imgSrc: '/112/徐葒', co_advisor: '蕭志平教授', researchfield: 'AI數位轉型', email: 'B11033038@mail.ntust.edu.tw' }
]


const CusGrid = ({ data }: any) => (
    <Box py={2} >
        {/* <Typography variant='h6' color='secondary' mb={1}>{grade}</Typography> */}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }} >
            {data ? data.map((person: any, index: number) => (
                <Grid item xs={4} sm={4} md={6} lg={8} key={index} >
                    <PersonCard {...{ person }} />
                </Grid>
            )) :
                <Grid item xs={4} sm={8} md={12} lg={16} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        alt="we_want_you"
                        variant="square"
                        src='/we_want_you.png'
                        sx={{ width: { xs: 250, sm: 350, md: 450 }, height: { xs: 90, sm: 120, md: 150 } }}
                    />
                </Grid>
            }
        </Grid>
    </Box>
)

export default function Members() {
    return (
        <Box>
            <PageTitle title='實驗室成員' />

            <SubTitle title='博士班'>
                <CusGrid grade='博士班' data={_PhD} />
            </SubTitle>
            <SubTitle title='EMBA'>
                <CusGrid data={EMBA} />
            </SubTitle>
            <SubTitle title='碩士班'>
                <CusGrid data={Master} />
            </SubTitle>
            <SubTitle title='專題生'>
                <CusGrid data={Undergraduate} />
            </SubTitle>
        </Box>
    )
}

