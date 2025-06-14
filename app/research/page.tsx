"use client";
import { Box, Card, CardContent, Typography, Stack, Grid, Divider } from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
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
                FAILab 主要研究方向以行為理論、資料科學及機器學習前瞻技術應用於資訊安全、金融產業、運動產業及企業數位轉型。
            </Typography>

            <br />
            <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid size={{ xs: 4, sm: 8, md: 6 }} >
                    <FieldGrid field="生成式AI／大型語言模型" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='多模態LLM' subcontent='讓AI能同時理解文字、圖片、影片與聲音，全面擴展其理解能力。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='全流程自動化合規 agent' subcontent='運用AI的思考與記憶能力，實現企業跨部門因應法規變動的全流程自動化合規，進一步提升員工對合規性的重視與執行力。' />
                        <FieldContent icon={<Looks3Icon color='primary' />} subfield='模型效能自動化學習' subcontent='自動進行模型資源最佳化及績效追蹤，簡化模型迭代所需要耗費的人力。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 6 }}>
                    <FieldGrid field="數位轉型及數據模型治理" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='數據整合及治理' subcontent='著重於資料的整合、管理與品質提升，建立企業內部及跨部門的數據治理機制。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='模型生態系' subcontent='建構協同模型訓練架構，針對不同特性的資料發展專屬AI模型，並在應用階段進行模型合併與異質數據知識整合。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 6 }}>
                    <FieldGrid field="資訊共享及隱私保護" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='使用者行為偵測' subcontent='透過分散於各產業的客戶資料，應用AI於客戶與員工行為監控，及早發現異常活動，防範詐騙及資料外洩，提升資訊安全。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='安全且合規的資訊共享模式' subcontent='聚焦於企業間或跨產業資料流通時的隱私保護與法規遵循，確保資訊共享過程中資料安全與合規。' />
                    </FieldGrid>
                </Grid>
                <Grid size={{ xs: 4, sm: 8, md: 6 }}>
                    <FieldGrid field="圖探勘／學習及深度學習">
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='跨產業資料應用' subcontent='運用圖探勘技術提升客戶資訊散落在不同產業間的連結，洞悉多面向客戶行為或信用評等。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='深度學習' subcontent='將深度學習技術應用於異常偵測、行為預測及決策支援等場景，提升模型準確度與智能化程度。' />
                    </FieldGrid>
                </Grid>
            </Grid>
        </Box>
    )
}

