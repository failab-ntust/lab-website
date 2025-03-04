import React from 'react'
import PropTypes from 'prop-types';
import { Box, Typography, Tabs, Tab, Stepper, Step, StepLabel, StepContent } from '@mui/material';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTab({ value, handleChange }) {

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor='secondary'
            indicatorColor='secondary'
            variant="scrollable"
        >
            <Tab disableRipple {...a11yProps(0)}
                label={
                    <Typography variant="body1" noWrap>
                        計畫及產學
                    </Typography>
                } />
            <Tab disableRipple {...a11yProps(1)}
                label={
                    <Typography variant="body1" noWrap>
                        發表論文Publication
                    </Typography>
                } />
            <Tab disableRipple {...a11yProps(2)}
                label={
                    <Typography variant="body1" noWrap>
                        學術活動
                    </Typography>
                } />
        </Tabs>
    )
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box px={3} sx={{ overflowY: 'auto' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const CusStepper = ({ data }) => (
    <Stepper orientation="vertical" sx={{ pb: 2 }}>
        {data.map((item, index) => (
            <Step active key={index}>
                <StepLabel>
                    <Typography>
                        {item.event || item}
                    </Typography>
                </StepLabel>
                {item.note &&
                    <StepContent>
                        <Typography color="grey.dark">{item.note}</Typography>
                    </StepContent>
                }
            </Step>
        ))}
    </Stepper>
)

export { CustomTab, CustomTabPanel, CusStepper }