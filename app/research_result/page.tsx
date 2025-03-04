'use client'
import * as React from 'react';
import { Box, Typography } from '@mui/material';

import PageTitle from '../PageTitle'
import { CustomTab, CustomTabPanel, CusStepper } from './Component'

// 國科會計畫
const NSTC = [
    '計畫主持人 113-2221-E-011-149- 透過嵌入平衡與對比學習增進以圖為基礎之推薦系統效能 2024/08/01 ~ 2025/07/31',
    '計畫主持人 111-2410-H-011 -041 -MY2 在保護個人隱私下建構跨產業資料共享框架 2022/10/01 ~ 2024/09/30',
]

// 教育部計畫
const MinistryofEducation = [
    '計畫主持人，教師推動創新教學-教學與課程精進研究計畫 2024/09/01 ~ 2025/08/31',
    '計畫主持人，教師推動創新教學-教學與課程精進研究計畫 2023/09/01 ~ 2024/08/31',
]

// 產學合作案
const IndustryCooperation = [
    '計畫主持人，AI戰情室1.0 2024/12/31 ~ 2025/06/30',
    '計畫主持人，醫美產業AI技術引進導入及評估 2024/10/31 ~ 2025/03/31',
    '計畫主持人，競品暨技術論文網站分析系統 2024/06/01 ~ 2025/01/31',
    '計畫主持人，產品擷取分析PoC專案 2023/07/01~2023/09/30',
    '計畫主持人，運用大數據及人工智慧技術建構風險引擎2.0 2023/01/01~2023/12/31',
    '計畫主持人，企業資安風險評估計畫 2022/10/01~2023/09/30',
    '偕同計畫主持人，數位錢包之資安框架建構-APP及底層技術設計 2022/11/01~2022/12/31',
    '計畫主持人，AI鷹眼識詐聯盟技術暨推廣合作案 2024/01/01 ~ 2025/06/30'
]

const JournalPaper = [
    "C.-C. Chang, C.-H. Lu, M.-Y. Chang, C.-E. Shen, Y.-C. Ho, and C.-Y. Shen (2024). Learning to Augment Graphs: Machine Learning-based Social Network Intervention with Self-Supervision. IEEE Transactions on Computational Social Systems, 11(3): 3286-3298.",
    "C.-C. Chang, C.-H. Lu, S.-J. Teng, M.-Y. Chang, Y.-C. Ho, and C.-Y. Shen (2024). Maximizing (k, L)-core with Edge Augmentation in Multi-Layer Graphs. IEEE Transactions on Computational Social Systems, 11(3): 3931-3943.",
    "C.-C. Chang, D.-R. Tseng, C.-H. Lu, M.-Y. Chang, and C.-Y. Shen (2024). Improving graph-based recommendation with unraveled graph learning. Data Mining and Knowledge Discovery, 38(4), 2440-2465.",
    "B.-Y. Hsu, P.-Y. Chang, Y.-L. Chen, Y.-C. Ho, C.-C. Chang, C.-Y. Shen, and B.-C. Shia (2024). Diversity-Optimized Group Extraction in Social Networks. IEEE Transactions on Computational Social Systems, 11(1): 756-769.",
    "C.-C. Chang, M.-Y. Chang, J.-Y. Jhang, L.-Y. Yeh, and C.-Y. Shen (2022). Learning to Extract Expert Teams in Social Networks. IEEE Transactions on Computational Social Systems, 9(5):1552-1562.",
    "V. Kumar, R. Kumar, A.-A. Khan, V. Kumar, Y.-C. Chen, and C.-C. Chang (2022). RAFI: Robust Authentication Framework for IoT based RFID Infrastructure. Sensors, 22(9), 3110.",
    "D.-C. Li, P.-H. Hsu, and C.-C. Chang (2014). A Genetic Algorithm-Based Approach for Single-Machine Scheduling with Learning Effect and Release Time. Mathematical Problems in Engineering, doi.org/10.1155/2014/249493.",
    "D.-C. Li, C.-C. Chang, C.-W. Liu, and W.-C. Chen (2013). A New Approach for Manufacturing Forecast Problems with Insufficient Data – the Case of TFT-LCDs. Journal of Intelligent Manufacturing, 24(2), 225-233.",
    "D.-C. Li, C.-C. Chang, and C.-W. Liu (2012). Using Structure-based Data Transformation Method to Improve Prediction Accuracies for Small Data Sets. Decision Support Systems, 52(3), 748-756."
]

const ConferencePaper = [
    'H.-C. Chang, Y.-C. Chen, K.-C. Shih, C.-C. Chang and R.L.- Tso, “ Proof of Liabilities from Sum-Check Protocol and Polynomial Approximation” The 2025 7th Blockchain and Internet of Things Conference, Tsukuba, Japan, June. 2025',
    'N.-W. Lo, C.-Y. Chang, C.-Y. Lin, Z.-X. Cai and C.-C. Chang 基於機器學習的物聯網風險評估機制 in Proc. CISC 2024, Taipei, Aug. 2024',
    'N.-W. Lo, C.-Y. Wu, C.-H. Chen and C.-C. Chang 結合機器學習且基於風險概念的使用者異常檢測 in Proc. CISC 2024, Taipei, Aug. 2024',
    'J.-Y. Lin, Y.-H. Liu, Y.-C. Chen and C.-C. Chang, "Constructing a Blockchain-based Framework for Enhancing the Reliability of Election Polls", The 2024 6th Blockchain and Internet of Things Conference, Fukuoka, Japan, July, 2024.',
    'C.-C. Chang, Y.-C. Li, Y. Kao, Y.-C. Chen, C.-C. Chang, "A Framework with Black2 and Differential Privacy in Handling Data Privacy Problems", International Electronics Communication Conference (IECC 2024), Fukuoka, Japan, July, 2024.',
    'T.-Y. Huang, Y.-C. Chen, T.-C. Hsieh, H.-C. Chang and C.-C. Chang, "A Secure and IoT-Enabled Data Sharing System Based on IPFS and IOTA Blockchain" , The 2023 5th Blockchain and Internet of Things Conference, Osaka, Japan, July, 2023.',
    'C.-L. Hsu, H.-H. Hsu, C.-C. Chang, and N.-W. Lo, "整合公開資料建構企業貸款風險模型," in Proc. CISC 2023, Chiayi, Jun. 2023.',
    'Z.-X. Cai, C.-Y. Chang, C.-C. Chang, and N.-W. Lo, "基於人工智慧之使用者行為異常檢測系統," in Proc. CISC 2023, Chiayi, Jun. 2023.',
    '張詠盛, 蔣昱弘, 張智傑, 陳駿 （2022年05月）。電影短文評論之情感分析-整合孿生網絡與深度神經網絡。2022人工智慧技術及應用研討會。',
    'C.-C. Chen, K.-W. Lee, Chang C. C., D.-N. Yang, and M.-S. Chen (2013, Oct). Efficient Large Graph Pattern Mining for Big Data in the Cloud. Proc. of the 2013 IEEE International Conference on Big Data.',
    'D.-C. Li, I.-S. Wen, and C.-C. Chang (2013, Jun). A new virtual-sample-generating method based on the heuristics algorithm.. 2013 IEEE International Conference on Grey Systems and Intelligent Services.',
    '利德江*,張智傑,劉巧雯（2011年01月）。擴充資料維度提升小樣本品質預測能力-以TFT-LCDs製造為例。2011第四屆資訊科技應用研討會。',
    '利德江,張智傑*,劉巧雯（2010年12月）。利用資料分群轉換提升良率預測能力-以大尺寸偏光板製造為例。2010電子化企業實務研討暨論文發表會。'
]

// 客座編輯 
const guestEditor = [
    'Electronics (SCI) 2023/12~ now',
    'Mathematics (SCI) 2024/09~now'
];

// 期刊論文審稿
const journalReviewer = [
    'Decision Support Systems/2023',
    'Journal of Information Science and Engineering/2023',
    'IEEE Transactions on Computational Social Systems/2024',
    'Sensors and Materials/2024',
    'Journal of Big Data/2024',
    'Mathematics/2024',
];

// 其他學術活動
const academicActivities = [
    { event: "Blockchain and Internet of Things Conference (BIOTC 2024、2025)", note: "Technical Program Committee" },
    { event: "2023 ITMA國際研討會 - 人工智慧之數位轉型與資訊安全", note: "Program/Industrial Committee Member" },
    { event: "台中科技大學學報", note: "審查委員" }
];


// 個人相關獎項
const personalAwards = [
    '113-1學年度-優化 EMI 教學技巧獎勵(計算機概論)',
    '113 全國大專教職員乙組男女混和雙打亞軍',
    '112-1學年度-創新教學模式獎勵(數位金融概論)',
    '112 全國大專教職員乙組男女混和雙打亞軍',
    '111-2學年度-創新教學模式獎勵(計算機概論)',
    '111-1學年度-創新教學模式獎勵(大數據分析導論)',
    '111-113學年度科技部補助延攬優秀人才',
];

// 指導學生競賽成果
const studentCompetitionAchievements = [
    '2024/12 2024全球品牌策劃 第一名&銀質獎',
    '2024/12 指導學生參加第七屆法遵科技與電腦稽核專題競賽 – 冠軍',
    '2023/12 指導學生參加第六屆法遵科技與電腦稽核專題競賽 – 優選',
    '2023/06 "基於人工智慧之使用者行為異常檢測系統"於第三十三屆資訊安全會議獲選Session Best Paper Award!',
    '2023/05 指導學生參加第一屆全國商務大數據創新競賽 – 佳作',
    '2023/04 指導學生參加111學年度「大專校院創業實戰模擬學習平臺」 – 入選',
    '2023/04 指導學生參加2023永豐金控商業競賽 – 嘉獎',
    '2022/12 指導學生參加第五屆法遵科技與電腦稽核專題競賽 – 亞軍',
];



export default function Result() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box height='100%'>
            <PageTitle title='研究成果' />
            <Box sx={{ bgcolor: '#F5F5F5', borderRadius: 5, minHeight: '88%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3, display: 'flex', justifyContent: 'center' }}>
                    <CustomTab {...{ value, handleChange }} />
                </Box>

                <CustomTabPanel value={value} index={0}>
                    <Typography variant='h6' color='secondary'>
                        國科會計畫
                    </Typography>
                    <CusStepper data={NSTC} />
                    <Typography variant='h6' color='secondary'>
                        教育部計畫
                    </Typography>
                    <CusStepper data={MinistryofEducation} />
                    <Typography variant='h6' color='secondary'>
                        產學合作案
                    </Typography>
                    <CusStepper data={IndustryCooperation} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Typography variant='h6' color='secondary'>
                        Journal Paper
                    </Typography>
                    <CusStepper data={JournalPaper} />
                    <br />
                    <Typography variant='h6' color='secondary'>
                        Conference Paper
                    </Typography>
                    <CusStepper data={ConferencePaper} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Typography variant='h6' color='secondary'>
                        客座編輯(Guest Editor)
                    </Typography>
                    <CusStepper data={guestEditor} />
                    <Typography variant='h6' color='secondary'>
                        期刊論文審稿
                    </Typography>
                    <CusStepper data={journalReviewer} />
                    <Typography variant='h6' color='secondary'>
                        其他學術活動
                    </Typography>
                    <CusStepper data={academicActivities} />
                    <Typography variant='h6' color='secondary'>
                        個人相關獎項
                    </Typography>
                    <CusStepper data={personalAwards} />
                    <Typography variant='h6' color='secondary'>
                        指導學生競賽成果
                    </Typography>
                    <CusStepper data={studentCompetitionAchievements} />
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

