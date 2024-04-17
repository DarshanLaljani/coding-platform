import React from 'react';
import { Typography, Container, Button, Box, Grid } from '@mui/material';

const ProfileSection = () => {
  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ minHeight: '50%' }}>
        <Grid item xs={5} md={6}>
          <Box textAlign="center">
            <Typography variant="h2">Code Boost</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: 20 }}>Where Challenges Meet Growth.</Typography>
            <Button variant="outlined" size="large">Get Started</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileSection;
