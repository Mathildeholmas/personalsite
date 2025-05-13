import React from 'react';
import { Container } from '@mui/material';

const ContentWrapper = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {children}
    </Container>
  );
};

export default ContentWrapper;
