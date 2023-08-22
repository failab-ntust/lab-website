import * as React from 'react';
import { Stack, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Card({ data }) {

    const AccordionLayout = ({ date, title, content }) => (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                    <Typography flex={1}>
                        {date}
                    </Typography>
                    <Typography flex={9} sx={{ color: 'text.secondary' }}>
                        {title}
                    </Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )

    return (
        <>
            {data ?
                data.map((item, index) => (
                    <AccordionLayout key={index} date={item.date} title={item.title} content={item.content} />
                ))
                :
                <Stack alignItems='center'>
                    <Typography>洽談準備中...</Typography>
                </Stack>
            }
        </>
    );
}
