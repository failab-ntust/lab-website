import React from 'react';
import { Stack, ListItem, Typography, ListItemText, ListItemAvatar } from '@mui/material';

const data = [
    { date: '2025/07', content: '研究論文“Food Classification via Vision Transformer with Data Augmentation on Small Datasets” to appear in Journal of Internet Technology.' },
    { date: '2025/07', content: '恭喜本研究團隊獲得國科會專題計畫補助' },
    { date: '2025/06', content: '恭喜本研究團隊專題生榮獲國科會大專生專題計畫' },
    { date: '2025/06', content: '恭喜本研究團隊參加全球GCMF獲得銀質獎' },
    { date: '2025/04', content: 'Heuristic Meta Integration and Map Exploration to Solve Industrial Scheduling Problems, MMIE 2025接受' },
    { date: '2025/04', content: '以圖神經網路與聯邦式學習建構之反洗錢交易偵測架構，第36屆國際資訊管理學術研討會 接受' },
    { date: '2025/03', content: '會議論文 Blockchain Driven Security: Protecting Data and Ensuring Trustworthiness in Federated Learning, BIOTC 2025 接受' },
    { date: '2025/02', content: '會議論文 Proof of Liabilities from Sum-Check Protocol and Polynomial Approximation, BIOTC 2025 接受' },
    { date: '2024/12', content: '2024全球品牌策劃 第一名/銀質獎' },
    { date: '2024/12', content: '2024法遵科技與電腦稽核專題競賽 冠軍' },
    { date: '2024/06', content: '研究論文 "Improving graph-based recommendation with unraveled graph learning" to appear in Data Mining and Knowledge Discovery (DMKD).' },
    { date: '2024/03', content: '會議論文 Constructing a Blockchain-based Framework for Enhancing the Reliability of Election Polls, BIOTC 2024 接受' },
    { date: '2024/02', content: '會議論文 A Framework with Black2 and Differential Privacy in Handling Data Privacy Problems, IECC 2024 接受' },
    { date: '2023/12', content: ' "第六屆法遵科技與電腦稽核專題競賽"獲得優選' },
    { date: '2023/12', content: '研究論文 “Learning to Augment Graphs: Machine Learning-based Social Network Intervention with Self-Supervision,"to appear in IEEE Transactions on Computational Social Systems (TCSS).' },
    { date: '2023/11', content: '研究論文 Maximizing (k, L)-core with Edge Augmentation in Multi-Layer Graphs." to appear in IEEE Transactions on Computational Social Systems (TCSS).' },
    { date: '2023/09', content: '"獲得全國大專教職員羽球賽混雙"獲得亞軍' },
    { date: '2023/06', content: '"基於人工智慧之使用者行為異常檢測系統"於第三十三屆資訊安全會議獲選Session Best Paper Award!' },
    { date: '2023/05', content: '"臺灣科大EMBA獅子會社會服務提案競賽"獲得入選' },
    { date: '2023/05', content: '"第一屆全國商務大數據創新競賽"獲得佳作' },
    { date: '2023/04', content: '"111學年度「大專校院創業實戰模擬學習平臺」"入圍獲選團隊' },
    { date: '2023/04', content: '"2023永豐金控商業競賽"獲得嘉獎' },
    { date: '2022/12', content: '"第五屆法遵科技與電腦稽核專題競賽"獲得亞軍' },
    { date: '2022/11', content: '實驗室通國兩年期國科會計畫–在保護個人隱私下建構跨產業資料共享框架' },
    { date: '2022/11', content: '研究論文 ”Diversity-Optimized Group Extraction in Social Networks”  Accepted' }
]

const News = ({ date, content, subcontent }) => (
    <ListItem sx={{ display: 'flex', alignItems: 'baseline' }}>
        <ListItemAvatar sx={{ bgcolor: (theme) => theme.palette.primary.main, borderRadius: 1, mr: 3 }}>
            {date}
        </ListItemAvatar>
        <ListItemText primary={content}
            secondary={subcontent} />
    </ListItem>
);

function LatestNews() {

    return (
        <Stack
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{
                display: { xs: "flex", md: "block" }
            }}
        >
            <Stack
                sx={{
                    bgcolor: "#F5F5F5",
                    borderRadius: 5,
                    p: { xs: 0, md: 1.5 },
                    width: "100%",
                    maxHeight: { xs: 400, md: 320, lg: 450, xl: 500, xxl: 650, },
                    overflowY: "auto",
                }}
            >
                {data.map((item, index) => (
                    <News date={item.date} content={item.content} key={index} />
                ))}
            </Stack>
        </Stack>

    )
}

export default LatestNews