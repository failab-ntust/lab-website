"use client";
import { Box, Card, CardContent, Typography, Stack, Grid, Divider } from '@mui/material';
import Looks1Icon from '@mui/icons-material/LooksOne';
import Looks2Icon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import FieldTitle from '../FieldTitle'

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
            <Typography variant='body1' sx={{ fontWeight: 600 }}>
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
            <FieldTitle fieldtitle='研究領域' />
            <Typography variant='h6' >
                FAILab 主要研究方向以行為理論、資料科學及機器學習前瞻技術應用於資訊安全、金融產業、運動產業及企業數位轉型。
            </Typography>

            <br />
            <Grid container spacing={{ xs: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={4} sm={8} md={6}>
                    <FieldGrid field="數位轉型" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='數據賦能' subcontent='在大數據時代下，數據除了蒐集紀錄相關資訊外也同時隱含其他潛在可能的資訊。實驗室將協助企業透過視覺化軟體及No Code AI工具輔助提升企業在數據運用的價值。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='流程自動化及優化' subcontent='企業仍存在過多人工及反覆行為，可透過RPA工具（Robotic Process Automation）協助企業進行流程自訂化，並運用AI進行流程監控及優化。' />
                    </FieldGrid>
                </Grid>
                <Grid item xs={4} sm={8} md={6}>
                    <FieldGrid field="金融科技" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='數據整合' subcontent='解決跨產業資料使用困境，在保護隱私機制下建構可分析的跨產業資料。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='單一登入機制驗證' subcontent='建構金控層跨單位單一登入機制，並基於不同風險設計驗證機制。' />
                        <FieldContent icon={<Looks3Icon color='primary' />} subfield='大數據及人工智慧應用' subcontent='建構客戶單一視圖，基於客戶行為運用人工智慧方式進行預測，可應用於異常偵測及Next Action。' />
                    </FieldGrid>
                </Grid>
                <Grid item xs={4} sm={8} md={6}>
                    <FieldGrid field="運動科技 - 羽球" >
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='使用者軟體設計' subcontent='建構以客戶為體驗之羽球APP。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='訓練優化' subcontent='透過影像辨識及人工智慧技術分析球員體態及策略應用。' />
                    </FieldGrid>
                </Grid>
                <Grid item xs={4} sm={8} md={6}>
                    <FieldGrid field="資訊安全">
                        <FieldContent icon={<Looks1Icon color='primary' />} subfield='保護隱私框架建立' subcontent='在保護個人隱私下建構可分析式資料平台。' />
                        <FieldContent icon={<Looks2Icon color='primary' />} subfield='使用者行為偵測' subcontent='運用人工智慧建構單一使用者行為態樣，判斷並偵測使用者異常行為。' />
                    </FieldGrid>
                </Grid>
            </Grid>
        </Box>
    )
}

