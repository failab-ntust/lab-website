'use client'
import { Box, Typography, Grid } from '@mui/material'
import FieldTitle from '../FieldTitle'
import PersonCard from './PersonCard'

const _111MBA = [
    { name: 'Izyan', imgSrc: '', description: '' },
    { name: '趙寶蓉', imgSrc: '111_MBA_趙寶榕', description: '' },
    { name: 'Ngan Khanh', imgSrc: '', description: '' },
    { name: '許怡晴', imgSrc: '111_MBA_許怡晴', description: '' }
]
const _111INNC = [
    { name: '張棨揚', imgSrc: '', description: '共同指導：羅乃維院長' },
    { name: '蔡子勛', imgSrc: '', description: '共同指導：羅乃維院長' }
]
const _111INNC_Master = [
    { name: '羅雋齡', imgSrc: '111_產碩專班_羅雋齡', description: '共同指導：王紹睿老師' },
    { name: '陳哲賢', imgSrc: '111_產碩專班_陳哲賢', description: '共同指導：王紹睿老師' },
    { name: '高瑜', imgSrc: '111_產碩專班_高瑜', description: '共同指導：陳怡伶老師' },
    { name: '陳涵愉', imgSrc: '111_產碩專班_陳涵愉', description: '共同指導：陳怡伶老師' }
]

const CusGrid = ({ grade, data }: any) => (
    <Box py={2}>
        <Typography variant='h5' color='secondary' mb={1}>{grade}</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {data.map((person: any, index: number) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <PersonCard name={person.name} imgSrc={person.imgSrc} description={person.description} />
                </Grid>
            ))}
        </Grid>
    </Box>
)

export default function Members() {
    return (
        <Box>
            <FieldTitle fieldtitle='研究成員' />
            <CusGrid grade='111 MBA' data={_111MBA} />
            <CusGrid grade='111 產創學院' data={_111INNC} />
            <CusGrid grade='111 產碩專班' data={_111INNC_Master} />
        </Box>
    )
}

