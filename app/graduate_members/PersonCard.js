import * as React from 'react';
import { Stack, ListItemText, Typography, Avatar, Divider } from '@mui/material'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const EMBA = ({ person }) => (
    <>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            姓名：{person.name}
        </Typography>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            學年度：{person.year}
        </Typography>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            {/* 現職：{person.currentjob}
        </Typography>
        <Typography
            component="span"
            variant="body2"
            color="text"
        > */}
            研究方向：{person.researchfield}
        </Typography>
    </>
)

const Master = ({ person }) => (
    <>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            姓名：{person.name}
        </Typography>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            班別：{person.class}
        </Typography>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            學年度：{person.year}
        </Typography>
        {person.co_advisor &&
            <Typography
                component="span"
                variant="body2"
                color="text"
            >
                共同指導：{person.co_advisor}
            </Typography>
        }
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            研究方向：{person.researchfield}
        </Typography>
    </>
)

const Undergraduate = ({ person }) => (
    <>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            姓名：{person.name}
        </Typography>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            班別：{person.class}
        </Typography>
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            學年度：{person.year}
        </Typography>
        {person.co_advisor &&
            <Typography
                component="span"
                variant="body2"
                color="text"
            >
                共同指導：{person.co_advisor}
            </Typography>
        }
        <Typography
            component="span"
            variant="body2"
            color="text"
        >
            研究方向：{person.researchfield}
        </Typography>
    </>
)


export default function PersonCard({ person }) {

    return (
        <Stack sx={{ border: '1px solid #CCCCCC', bgcolor: 'white', borderRadius: 1 }}
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            justifyContent='center'
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={1}
        >
            <Avatar
                alt="profile"
                variant="rounded"
                src={person.imgSrc ? `${basePath}/members/${person.imgSrc}.jpg` : `${basePath}/avatar.png`}
                sx={{
                    width: { xs: '40%', md: 140 }, height: { xs: 120, sm: 200, md: 140 },
                    pointerEvents: 'none',
                    userSelect: 'none',
                    WebkitUserSelect: 'none', /* Safari */
                    MozUserSelect: 'none', /* Firefox */
                    msUserSelect: 'none'
                }}
            />
            <ListItemText
                primary={
                    <Stack spacing={.5} p={1}>
                        {person.grade === 'EMBA' ? <EMBA {...{ person }} /> :
                            person.grade === 'Master' ? <Master {...{ person }} /> :
                                person.grade === 'Undergraduate' && <Undergraduate {...{ person }} />}
                        <Divider />
                    </Stack>
                }
                secondary={
                    <Typography variant='body2' px={1} pb={1}>E-mail: {person.email}</Typography>
                }
            />
        </Stack>
    );
}


