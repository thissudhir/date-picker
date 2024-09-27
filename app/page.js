"use client";
import React from 'react';
import { RecurrenceProvider } from '../app/context/RecurrenceContext';
import DatePicker from '../app/components/DatePicker';
import RecurrenceOptions from '../app/components/RecurrenceOptions';
import PreviewCalendar from '../app/components/PreviewCalendar';
import { Container, Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <RecurrenceProvider>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        {/*//NOTE: MAIN HEADING */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Recurring Date Picker
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#757575' }}>
            Customize your recurring events with ease
          </Typography>
        </Box>

        {/*//NOTE: DATE PICKER AND RECURRENCE OPTIONS */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            backgroundColor: '#f9f9f9',
            padding: 4,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Box>
            <DatePicker />
            <RecurrenceOptions />
          </Box>
          <Box>
            <PreviewCalendar />
          </Box>
        </Box>
      </Container>
    </RecurrenceProvider>
  );
};

export default Home;
