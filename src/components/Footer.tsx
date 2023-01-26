import { Box, Container } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{backgroundColor: '#FFF', padding: '40px 0'}}>
        <Container>
            <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                <li><a href="https://www.instagram.com/solyom_jonathan/"> Follow me on instagramm</a></li>
                <li><a href="https://www.facebook.com/solyom.jonathan">Follow me on Facebook</a></li>
                <li><a href="https://www.linkedin.com/in/jonathan-solyom-6128b224b/">Follow me on LinkedIn</a></li>
            </ul>
        </Container>
    </Box>
  )
}

export default Footer