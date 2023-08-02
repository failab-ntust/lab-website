import { Box } from '@mui/material'
import Image from 'next/image'

export default function Professor() {
    return (
        <Box sx={{ margin: 2 }}>
            指導教授
            <Image
                src='/chihchieh.jpeg'
                alt='professor'
                width={230}
                height={300}
                style={{ border: '4px solid #0073AF', padding: '15px' }}
            />
        </Box>
    )
}

