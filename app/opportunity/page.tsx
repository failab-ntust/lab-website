'use client'
import React from 'react'
import { Box } from '@mui/material';

import PageTitle from '../PageTitle';
import SubTitle from '../SubTitle'
import ControlledAccordions from './ControlledAccordions'

function Opportunity() {
    return (
        <Box>
            <PageTitle title='業界機會' />
            <SubTitle title='專案行銷類'>
                <ControlledAccordions />
            </SubTitle>
            <SubTitle title='數據AI類'>
                <ControlledAccordions />
            </SubTitle>
            <SubTitle title='開發實作類'>
                <ControlledAccordions />
            </SubTitle>
        </Box >

    )
}

export default Opportunity