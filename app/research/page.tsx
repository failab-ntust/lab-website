"use client";
import { Box, Card, CardContent, Typography, Stack, Grid, Divider } from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import PageTitle from '../PageTitle'

const FieldGrid = ({ field, children }: any) => (
    <Card elevation={0} sx={{ bgcolor: '#F5F5F5', borderRadius: 5 }}>
        <CardContent>
            <Typography variant="h5" color='secondary' sx={{ fontWeight: 700 }}>
                {field}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {children}
            </Typography>
        </CardContent>
    </Card>
)

const FieldContent = ({ icon, subfield, subcontent }: any) => (
    <Box my={1.5}>
        <Stack direction='row' alignItems='center' spacing={1}>
            {icon}
            <Typography variant='body1' sx={{ color: '#555555', fontWeight: 600 }}>
                {subfield}
            </Typography>
        </Stack>
        <Typography variant='body1'>
            {subcontent}
        </Typography>
    </Box>
)

export default function Research() {
    return (
         <Box>
            <PageTitle title='研究領域' />
            <Typography variant='h6' >
                FAILab 主要研究核心是以資料科學及人工智慧為技術核心，並引入如大型語言模型(LLM)及聯邦式學習(Federated Learning)等新技術進行研發及應用。研究團隊除資訊技術研發外，也針對行為理論、企業導入及數位轉型等管理議題進行探討；建構「資訊」與「管理」整合議題提升企業進行智慧化轉型
            </Typography>

            <br />
            <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 4, sm: 8, md: 4 }} >
                    <FieldGrid field="智慧轉型" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='流程智慧化' subcontent='企業仍存在過多人工及重複性作業行為，可透過智慧化工具如RPA或是AI機制 將可協助企業進行流程智慧化，並運用AI進行流程監控及優化。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='AI代理人' subcontent='基於企業作業流程或客戶服務打造任務型AI代理人；我們將運用生成式AI與企業流程進行整合建構專屬AI代理人' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="大型語言模型 (Large Language Model，LLM)" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='底層運作建構' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='多模態資料處裡' />
                        <FieldContent icon={<Looks3Icon color='primary' />} subfield='模型Fine-Tuning (SFT、LORA、Alignment)' />
                        <FieldContent icon={<Looks4Icon color='primary' />} subfield='RAG建立' />
                        <FieldContent icon={<Looks5Icon color='primary' />} subfield='相關企業服務串接及應用開發' />

                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="資料保護隱私技術" >
                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
                            聯邦式學習框架 (Federated Learning)
                        </Typography>
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='水平、垂直機制建立 (Horizontal and Vertical)' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='傳輸效率優化及平行運算(Resource Allocation and Optimization)' />
                        <FieldContent icon={<Looks3Icon color='primary' />} subfield='可稽核性聯邦式學習(Auditable Federated Learning)' />
                        <FieldContent icon={<Looks4Icon color='primary' />} subfield='資訊安全聯邦式學習(Security-based Federated Learning)' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="資料科學及人工智慧">
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='自動化資料/模型生態系' />
                        <Box ml={4} mt={0.5}>
                            <Typography component="ul" sx={{ m: 0, pl: 2 }}>
                                <Typography component="li" variant="body1">資料治理/模型治理框架建立</Typography>
                                <Typography component="li" variant="body1">自動化學習框架 – 建構模型大軍</Typography>
                            </Typography>
                        </Box>
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='深度學習/機器學習'  />
                        <Box ml={4} mt={0.5}>
                            <Typography component="ul" sx={{ m: 0, pl: 2 }}>
                                <Typography component="li" variant="body1">時間序列分析 – 運用如RNN、LSTM預測客戶的下一步行為</Typography>
                                <Typography component="li" variant="body1">圖探勘學習 – 建構圖拓樸運用Graph mining及Graph Neural Network進行分析提升關聯性資訊之運用</Typography>
                            </Typography>
                        </Box>
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="金融科技">
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='數據整合' subcontent='解決跨產業資料使用困境，在保護隱私機制下建構可分析的跨產業資料' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='單一登入機制驗證' subcontent='建構金控層跨單位單一登入機制，並基於不同風險設計驗證機制' />
                        <FieldContent icon={<Looks3Icon color='primary' />} subfield='大數據及人工智慧應用' subcontent='建構客戶單一視圖，基於客戶行為運用人工智慧方式進行預測，可應用於異常偵測及Next Action。' />

                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 4 }}>
                    <FieldGrid field="運動科技-羽球">
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='使用者軟體設計' subcontent='建構以客戶為體驗之羽球APP。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='訓練優化' subcontent='援等場景，提升模型準確度與智能化程度。' />
                    </FieldGrid>
                </Grid>
            </Grid>
        </Box>
    )
}
