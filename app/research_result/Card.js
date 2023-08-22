import * as React from 'react';
import { styled, Grid, Stack, Card, CardHeader, CardMedia, CardContent, Chip, IconButton, Typography } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const data = [
    { title: '第一屆全國商務大數據創新競賽', award: '佳作', content: '參與學生：吳承駿、黃宇旋、林映筑、吳凱揚' },
    { title: '臺灣科大EMBA獅子會社會服務提案競賽', award: '入選', content: '參與學生：林騏宇、陳暘勳、施沛妤、林其蓁' },
    { title: '臺灣科大EMBA獅子會社會服務提案競賽', award: '入選', content: '參與學生：楊上毅、陳柔中、吳品萱、賴品璇' },
    { title: '111學年度 「大專校院創業實戰模擬學習平臺」', award: '入圍獲選團隊', content: '參與學生：黃亭蓁 許卉萱 許芷綾 周家萱 林郁庭' },
    { title: '2023永豐金控商業競賽', award: '嘉獎', content: '參與學生：彭元、梁雅筑、邱奕淂、 劉子瑄、楊莉芳' },
    { title: '2022第五屆法遵科技與電腦稽核專題競賽', award: '亞軍', content: '參與學生：林郁庭、許芷綾、許卉萱、黃亭蓁、周家萱' },
]

export default function CusCard() {

    return (
        <Grid container spacing={{ xs: 3, sm: 3, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12, lg: 15 }} py={3}>
            {data.map((data, index) => (
                <Grid item xs={4} sm={4} md={4} lg={5} key={index}>
                    <Card elevation={4}>
                        <CardHeader
                            title={
                                <Stack direction='row' justifyContent='space-between' spacing={1}>
                                    <Typography variant='h6'>{data.title}</Typography>
                                    <Chip label={data.award} color="primary" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="200"
                            src="/no-image.png"
                            alt="no-image"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {data.content}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
