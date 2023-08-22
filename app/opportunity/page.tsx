'use client'
import React from 'react'
import { Box } from '@mui/material';

import PageTitle from '../PageTitle';
import SubTitle from '../SubTitle'
import Card from './Card'

const Marketing = [
    {
        date: '2023/08/22', title: '【國內新創遊戲公司】徵求 產品企劃',
        content: `【行業別】國內新創遊戲公司
【地點】台北市內湖區
【實習名稱】產品企劃
【實習內容】
    1. 概念設計、企劃書撰寫與提案。
    2. 市場趨勢及數據分析與報告。
    3. 專案文件撰寫與資料彙整更新維護。
    4. 跨部門與美術、程式等相關人員溝通與協調
【建議年級】大四、碩一及碩二
【建議基礎】無`
    }
]

const Data = [
    ``
]

const Develop = [
    {
        date: '2023/08/22', title: '【國內新創遊戲公司】徵求 開發工程師',
        content: `【行業別】國內新創遊戲公司
【地點】台北市內湖區
【實習名稱】開發工程師
【實習內容】
    1. 程式設計、安裝、測試及維護。
    2. 系統程式開發、管理與維護，及客戶服務與支援。
    3. 專案支援，如客戶教育訓練、技術文件撰寫。
【建議年級】大四、碩一及碩二
【建議基礎】無`
    },
    {
        date: '2023/08/22', title: '【國內新創公司】徵求 前端開發工程師',
        content: `【行業別】國內新創公司
【地點】台北市信義區
【實習名稱】前端開發工程師
【實習內容】
    1. 不限制科系
    2. 熟悉 React / Redux 進行網站開發
    3. 串接後端 CRUD API 資料經驗
    4. 對資料視覺化有一定開發經驗
    5. 具備獨立debug/閱讀最新技術文件能力
【建議年級】不限
【建議基礎】無`
    },
    {
        date: '2023/08/22', title: '【國內新創公司】徵求 後端開發工程師',
        content: `【行業別】國內新創公司
【地點】台北市信義區
【實習名稱】後端開發工程師
【實習內容】
    1. 不限制科系
    2. 熟悉 Express / MVC/ Serverless framework 進行網站開發
    3. 熟悉 Restful API 開發經驗
    4. 熟悉 Git, CI, CD
    5. 具備獨立debug/閱讀最新技術文件能力
    6. 對於關連式資料庫 MySQL 有一定的經驗
    7. 對於非關連式資料庫 NoSQL 有一定的經驗
    8. 部署雲端服務在 GCP 或 AWS經驗
【建議年級】不限
【建議基礎】無`
    }
]

function Opportunity() {
    return (
        <Box>
            <PageTitle title='業界機會' />
            <SubTitle title='專案行銷類'>
                <Card data={Marketing} />
            </SubTitle>
            <SubTitle title='數據AI類'>
                <Card data={null} />
            </SubTitle>
            <SubTitle title='開發實作類'>
                <Card data={Develop} />
            </SubTitle>
        </Box >

    )
}

export default Opportunity