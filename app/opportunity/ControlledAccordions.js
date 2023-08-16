import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';

const content = `【企業徵才】XXXX資訊專業人才暨實習招募

                實習申請截止日：自即日起至 112年07月31日下午17:00 止，逾期恕不受理。

                詳細說明請至XXXX人才招募網站https:/XXXXX.com.tw/

                連絡人：人力資源處 X先生

                10344台北市XX區XXX路XXXXXX

                Tel (02) XXXX-XXXX ext.XXXX

                Fax (02) XXXX-XXXX

                Email XXX.XXX@XXXX.com.tw`

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const AccordionLayout = ({ index, date, company, content }) => (
        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                    <Typography flex={1}>
                        {date}
                    </Typography>
                    <Typography flex={9} sx={{ color: 'text.secondary' }}>
                        {company}
                    </Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ whiteSpace: 'pre-line' }}>
                    {content}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )

    return (
        <div>
            <AccordionLayout index={1} date='2023/08/28' company='XXX公司徵求資訊安全專案助理' content={content} />
            <AccordionLayout index={2} date='2023/08/09' company='XXX公司徵求資訊安全專案助理' content={content} />
            <AccordionLayout index={3} date='2023/07/20' company='XXXX資訊專業人才暨實習招募' content={content} />
            <AccordionLayout index={4} date='2023/06/14' company='XXX公司徵求資訊安全專案助理' content={content} />
        </div>
    );
}
