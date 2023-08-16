'use client'
import { Box, Typography, Grid, Avatar } from '@mui/material'
import PageTitle from '../PageTitle'
import PersonCard from './PersonCard'
import SubTitle from '../SubTitle'

const _112EMBA = [
    { grade: 'EMBA', name: 'XXX', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'EMBA', name: 'XXX', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'EMBA', name: 'XXX', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' }
]
const _112Master = [
    { grade: 'Master', name: 'XXX', class: 'XX班', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: 'XXX', class: 'XX班', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: 'XXX', class: 'XX班', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: 'XXX', class: 'XX班', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' }
]

const _112Undergraduate = [
    { grade: 'Undergraduate', name: 'XXX', class: 'XX班', imgSrc: '', co_advisor: '', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Undergraduate', name: 'XXX', class: 'XX班', imgSrc: '', co_advisor: '', researchfield: 'XX領域', email: 'xxx@gmail.com' }
]

const _111Master = [
    { grade: 'Master', name: 'Izyan', class: 'MBA', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '趙寶蓉', class: 'MBA', imgSrc: '111_MBA_趙寶榕', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: 'Ngan Khanh', class: 'MBA', imgSrc: '', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '許怡晴', class: 'MBA', imgSrc: '111_MBA_許怡晴', currentjob: 'XX公司', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '羅雋齡', class: '產碩專班', imgSrc: '111_產碩專班_羅雋齡', co_advisor: '王紹睿老師', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '陳哲賢', class: '產碩專班', imgSrc: '111_產碩專班_陳哲賢', co_advisor: '王紹睿老師', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '高瑜', class: '產碩專班', imgSrc: '111_產碩專班_高瑜', co_advisor: '陳怡伶老師', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '陳涵愉', class: '產碩專班', imgSrc: '111_產碩專班_陳涵愉', co_advisor: '陳怡伶老師', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '張棨揚', class: '產創學院', imgSrc: '', co_advisor: '羅乃維院長', researchfield: 'XX領域', email: 'xxx@gmail.com' },
    { grade: 'Master', name: '蔡子勛', class: '產創學院', imgSrc: '', co_advisor: '羅乃維院長', researchfield: 'XX領域', email: 'xxx@gmail.com' }
]

const CusGrid = ({ grade, data }: any) => (
    <Box py={2}>
        <Typography variant='h6' color='secondary' mb={1}>{grade}</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 9, md: 12, lg: 15 }} >
            {data ? data.map((person: any, index: number) => (
                <Grid item xs={2} sm={3} md={6} lg={5} key={index}>
                    <PersonCard {...{ person }} />
                </Grid>
            )) :
                <Grid item xs={4} sm={9} md={12} lg={15} sx={{ display: 'flex', justifyContent: 'center' }}>
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
            <PageTitle title='研究成員' />
            <SubTitle title='112學年度'>
                <CusGrid grade='博士班' data={null} />
                <CusGrid grade='EMBA' data={_112EMBA} />
                <CusGrid grade='碩士班' data={_112Master} />
                <CusGrid grade='專題生' data={_112Undergraduate} />
            </SubTitle>
            <SubTitle title='111學年度'>
                <CusGrid grade='碩士班' data={_111Master} />
            </SubTitle>

            <PageTitle title='畢業成員' />
            <SubTitle title='112學年度'>
                <CusGrid grade='EMBA' data={_112EMBA} />
                <CusGrid grade='碩士班' data={_112Master} />
            </SubTitle>
        </Box>
    )
}

