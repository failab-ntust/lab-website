'use client'
import { Box, Typography, Grid, Avatar } from '@mui/material'
import PageTitle from '../PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '../SubTitle'

const _110Master = [
    { grade: 'Master', name: 'Khairul Izyan Bin Anuar', class: 'MBA', imgSrc: '/110/Khairul Izyan Bin Anuar', researchfield: '小樣本、機器學習', email: 'M11021805@mail.ntust.edu.tw' },
]
const _111Master = [
    { grade: 'Master', name: 'Do Nguyen Ngan Khanh', class: 'MBA', imgSrc: '/111/Do Nguyen Ngan Khanh', researchfield: '使用者意圖、聯邦式學習', email: 'M11021852mail.ntust.edu.tw' },
    { grade: 'Master', name: '趙寶榕', class: 'MBA', imgSrc: '/111/趙寶榕', researchfield: '使用者意圖、對話式商務', email: 'M11121024@mail.ntust.edu.tw' },
    { grade: 'Master', name: '許怡晴', class: 'MBA', imgSrc: '/111/許怡晴', researchfield: '使用者意圖、流程自動化', email: 'M10921020@mail.ntust.edu.tw' },

    { grade: 'Master', name: '羅雋齡', class: '產碩-AI跨域', imgSrc: '/111/羅雋齡', co_advisor: '王紹睿教授', researchfield: '小樣本、機器學習、自動化爬蟲', email: 'M11115Q02@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳涵愉', class: '產碩-AI跨域', imgSrc: '/111/陳涵愉', co_advisor: '陳怡伶教授', researchfield: '影像辨識、深度學習、運動科學', email: 'M11115Q24@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳哲賢', class: '產碩-AI跨域', imgSrc: '/111/陳哲賢', co_advisor: '王紹睿教授', researchfield: '影像辨識、深度學習、自動化爬蟲', email: 'M11115Q12@mail.ntust.edu.tw' },
    { grade: 'Master', name: '高瑜', class: '產碩-AI跨域', imgSrc: '/111/高瑜', co_advisor: '陳怡伶教授', researchfield: '資料隱私保護、機器學習', email: 'M11115Q07@mail.ntust.edu.tw' },

    { grade: 'Master', name: '錢嘉偉', class: '產創-AI所', imgSrc: '/111/錢嘉偉', researchfield: '影像辨識、深度學習、運動科學', email: 'M11152029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '張棨揚', class: '產創-AI所', imgSrc: '/111/張棨揚', co_advisor: '羅乃維院長', researchfield: '資訊安全、深度學習', email: 'M11152013@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蔡子勛', class: '產創-AI所', imgSrc: '/111/蔡子勛', co_advisor: '羅乃維院長', researchfield: '資訊安全、深度學習', email: 'M11152026@mail.ntust.edu.tw' }
]

const _112Master = [
    { grade: 'Master', name: '羅巧筠', class: '資管所甲組', imgSrc: '/112/羅巧筠', researchfield: '討論中…', email: 'M11209102@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳竣宇', class: '產創-AI所', imgSrc: '/112/吳竣宇', co_advisor: '羅乃維院長', researchfield: '討論中…', email: 'M11252003@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳軍翰', class: '產創-AI所', imgSrc: '/112/陳軍翰', co_advisor: '羅乃維院長', researchfield: '討論中…', email: 'M11252012@mail.ntust.edu.tw' },
    { grade: 'Master', name: '王姿璇', class: 'MBA', imgSrc: '/112/王姿璇', researchfield: '討論中…', email: 'M11221006@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林瑩姍', class: 'MBA', imgSrc: '/112/林瑩姍', researchfield: '討論中…', email: 'm11221019@ms.ntust.edu.tw' },
    { grade: 'Master', name: '溫婉言', class: '資管碩甲', imgSrc: '/112/溫婉言', researchfield: '待確認', email: 'M11209130@mail.ntust.edu.tw' },
    { grade: 'Master', name: '林憲紘', class: '人工智慧所', imgSrc: '/112/林憲紘', co_advisor: '羅乃維院長', researchfield: '待確認…', email: 'M11252029@mail.ntust.edu.tw' },
    { grade: 'Master', name: '吳孟蓁', class: '產創-AI所', imgSrc: '/112/吳孟蓁', researchfield: '待確認…', email: 'M11252027@mail.ntust.edu.tw' }
]

const _112PhD = [
    { grade: 'Master', name: '吳宥霆', class: 'AI跨域', imgSrc: '/112/吳宥霆', researchfield: '信用評等、資料探勘、資訊安全與個資保護標準', email: 'D11252005@mail.ntust.edu.tw' }
]

const _112EMBA = [
    { grade: 'EMBA', name: '蔡宗儒', imgSrc: '/112/蔡宗儒', researchfield: '待確認', email: 'M11216217@mail.ntsut.edu.tw' }
    // { grade: 'EMBA', name: 'XXX', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    // { grade: 'EMBA', name: 'XXX', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' }
]

const _112Undergraduate = [
    { grade: 'Undergraduate', name: '許芷綾', class: '管理學士班', imgSrc: '/112/許芷綾', researchfield: '圖探勘', email: 'B11033022@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '許卉萱', class: '管理學士班', imgSrc: '/112/許卉萱', researchfield: '圖探勘', email: 'B11033018@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '劉于華', class: '管理學士班', imgSrc: '/112/劉于華', researchfield: '圖探勘、聯邦式學習', email: 'B11033004@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '林哲宇', class: '管理學士班', imgSrc: '/112/林哲宇', researchfield: '圖探勘、聯邦式學習', email: 'B11033023@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '孫睿君', class: '管理學士班', imgSrc: '/112/孫睿君', co_advisor: '蕭志平教授', researchfield: 'AI數位轉型', email: 'B11033006@mail.ntust.edu.tw' },
    { grade: 'Undergraduate', name: '徐葒', class: '管理學士班', imgSrc: '/112/徐葒', co_advisor: '蕭志平教授', researchfield: 'AI數位轉型', email: 'B11033038@mail.ntust.edu.tw' }
]

const CusGrid = ({ grade, data }: any) => (
    <Box py={2} >
        <Typography variant='h6' color='secondary' mb={1}>{grade}</Typography>
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

            <SubTitle title='111學年度'>
                <CusGrid grade='碩士班' data={_111Master} />
            </SubTitle>
            <SubTitle title='112學年度'>
                <CusGrid grade='博士班' data={_112PhD} />
                <CusGrid grade='EMBA' data={_112EMBA} />
                <CusGrid grade='碩士班' data={_112Master} />
                <CusGrid grade='專題生' data={_112Undergraduate} />
            </SubTitle>
            <SubTitle title='ALUMNI校友區'>
                <CusGrid grade='碩士班' data={_110Master} />
            </SubTitle>

            {/* <PageTitle title='畢業成員' />
            <SubTitle title='112學年度'>
                <CusGrid grade='EMBA' data={_112EMBA} />
                <CusGrid grade='碩士班' data={_112Master} />
            </SubTitle> */}
        </Box>
    )
}

