import React from 'react';
import { Stack, ListItem, ListItemText, ListItemAvatar, Pagination } from '@mui/material';

const data = [
    { date: '2023/12', content: '研究論文 “Learning to Augment Graphs: Machine Learning-based Social Network Intervention with Self-Supervision,"to appear in IEEE Transactions on @@@-@Computational Social Systems (TCSS).' },
    { date: '2023/11', content: '研究論文 Maximizing (k, L)-core with Edge Augmentation in Multi-Layer Graphs." to appear in IEEE Transactions on Computational Social Systems (TCSS).' },
    { date: '2023/06', content: '"基於人工智慧之使用者行為異常檢測系統"於第三十三屆資訊安全會議獲選Session Best Paper Award!' },
    { date: '2023/05', content: '"臺灣科大EMBA獅子會社會服務提案競賽"獲得入選' },
    { date: '2023/05', content: '"第一屆全國商務大數據創新競賽"獲得佳作' },
    { date: '2023/04', content: '"111學年度「大專校院創業實戰模擬學習平臺」"入圍獲選團隊' },
    { date: '2023/04', content: '"2023永豐金控商業競賽"獲得嘉獎' },
    { date: '2022/12', content: '"第五屆法遵科技與電腦稽核專題競賽"獲得亞軍' },
    { date: '2022/11', content: '實驗室通國兩年期國科會計畫–在保護個人隱私下建構跨產業資料共享框架' },
    { date: '2022/11', content: '研究論文 ”Diversity-Optimized Group Extraction in Social Networks”Accepted in IEEE TCSS' }
]

const News = ({ date, content, subcontent }) => (
    <ListItem sx={{ display: 'flex', alignItems: 'baseline' }}>
        <ListItemAvatar sx={{ bgcolor: (theme) => theme.palette.primary.main, borderRadius: 1, mr: 3 }}>
            {date}
        </ListItemAvatar>
        <ListItemText primary={content}
            secondary={subcontent} />
    </ListItem>
)

function LatestNews() {

    const [newsPerPage] = React.useState(7);

    const [currentNews, setCurrentNews] = React.useState(data.slice(0, newsPerPage));
    const [page, setPage] = React.useState(1);

    const handleChange = (event, page_value) => {
        setPage(page_value);
        setCurrentNews(data.slice(page_value * newsPerPage - newsPerPage, page_value * newsPerPage))
    };
    return (
        <Stack spacing={1} justifyContent='space-between' alignItems='center'>
            <Stack sx={{ bgcolor: '#F5F5F5', borderRadius: 5, p: { xs: 0, md: 1.5 }, width: '100%', minHeight: 360, overflowY: 'auto' }}>
                {currentNews.map((data, index) => (
                    <News date={data.date} content={data.content} key={index} />
                ))}

            </Stack>
            <Pagination shape="rounded" count={Math.ceil(data.length / newsPerPage)} page={page} onChange={handleChange} />
        </Stack>
    )
}

export default LatestNews