'use client'
import { Box, Typography, Grid, Avatar } from '@mui/material'
import PageTitle from '../PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '../SubTitle'

const _GraduateMember = [
    { grade: 'Master', name: 'Khairul Izyan Bin Anuar', class: 'MBA', year:'110' ,imgSrc: '/110/Khairul Izyan Bin Anuar', researchfield: '小樣本、機器學習', email: 'M11021805@mail.ntust.edu.tw' },
    { grade: 'Master', name: 'Do Nguyen Ngan Khanh', class: 'MBA', year:'111' ,imgSrc: '/111/Do Nguyen Ngan Khanh', researchfield: '使用者意圖、聯邦式學習', email: 'M11021852@mail.ntust.edu.tw' },
    { grade: 'Master', name: '趙寶榕', class: 'MBA', year:'111' ,imgSrc: '/111/趙寶榕', researchfield: '使用者意圖、對話式商務', email: 'M11121024@mail.ntust.edu.tw' },
    { grade: 'Master', name: '許怡晴', class: 'MBA', year:'111' ,imgSrc: '/111/許怡晴', researchfield: '使用者意圖、流程自動化', email: 'M10921020@mail.ntust.edu.tw' },

    { grade: 'Master', name: '羅雋齡', class: '產碩-AI跨域', year:'111' , imgSrc: '/111/羅雋齡', co_advisor: '王紹睿教授', researchfield: '小樣本、機器學習、自動化爬蟲', email: 'M11115Q02@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳涵愉', class: '產碩-AI跨域', year:'111', imgSrc: '/111/陳涵愉', co_advisor: '陳怡伶教授', researchfield: '影像辨識、深度學習、運動科學', email: 'M11115Q24@mail.ntust.edu.tw' },
    { grade: 'Master', name: '陳哲賢', class: '產碩-AI跨域', year:'111', imgSrc: '/111/陳哲賢', co_advisor: '王紹睿教授', researchfield: '影像辨識、深度學習、自動化爬蟲', email: 'M11115Q12@mail.ntust.edu.tw' },
    { grade: 'Master', name: '高瑜', class: '產碩-AI跨域', year:'111', imgSrc: '/111/高瑜', co_advisor: '陳怡伶教授', researchfield: '資料隱私保護、機器學習', email: 'M11115Q07@mail.ntust.edu.tw' },

    { grade: 'Master', name: '張棨揚', class: '產創-AI所', year:'111', imgSrc: '/111/張棨揚', co_advisor: '羅乃維院長', researchfield: '資訊安全、深度學習', email: 'M11152013@mail.ntust.edu.tw' },
    { grade: 'Master', name: '蔡子勛', class: '產創-AI所', year:'111', imgSrc: '/111/蔡子勛', co_advisor: '羅乃維院長', researchfield: '資訊安全、深度學習', email: 'M11152026@mail.ntust.edu.tw' }
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
            <PageTitle title='實驗室成員-畢業校友' />

            {/* <SubTitle title='111學年度'>
                <CusGrid grade='碩士班' data={_111Master} />
            </SubTitle>
            <SubTitle title='112學年度'>
                <CusGrid grade='博士班' data={_112PhD} />
                <CusGrid grade='EMBA' data={_112EMBA} />
                <CusGrid grade='碩士班' data={_112Master} />
                <CusGrid grade='專題生' data={_112Undergraduate} />
            </SubTitle>
            <SubTitle title='113學年度'>
                <></>
            </SubTitle> */}
            <SubTitle title='成員列表'>
                <CusGrid grade='' data={_GraduateMember} />
            </SubTitle>

            {/* <PageTitle title='畢業成員' />
            <SubTitle title='112學年度'>
                <CusGrid grade='EMBA' data={_112EMBA} />
                <CusGrid grade='碩士班' data={_112Master} />
            </SubTitle> */}
        </Box>
    )
}

