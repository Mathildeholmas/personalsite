import React from 'react';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import { Box } from '@mui/material';


const HomePage = () => {
  return (
    <ContentWrapper>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "primary.light", padding: "16px" }}>Item 1</Box>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "secondary.light", padding: "16px" }}>Item 2</Box>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Box sx={{ backgroundColor: "error.light", padding: "16px" }}>Item 3</Box>
        </Grid2>                
      </Grid2>
    </ContentWrapper>
  );
};

export default HomePage;
