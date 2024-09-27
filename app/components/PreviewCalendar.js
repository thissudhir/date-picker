import React, { useContext } from 'react';
import { format, addDays, addWeeks, addMonths, addYears } from 'date-fns';
import { RecurrenceContext } from '../context/RecurrenceContext';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const PreviewCalendar = () => {
  const { recurrence } = useContext(RecurrenceContext);

  //NOTE: GENERATING NEXT 5 OCCURRENCES BASED ON THE `recurrence` SETTINGS
  const getNextOccurrences = () => {
    const occurrences = [];
    let current = recurrence.startDate;
    while (occurrences.length < 5) {
      occurrences.push(current);
      switch (recurrence.type) {
        case 'daily':
          current = addDays(current, recurrence.every);
          break;
        case 'weekly':
          current = addWeeks(current, recurrence.every);
          break;
        case 'monthly':
          current = addMonths(current, recurrence.every);
          break;
        case 'yearly':
          current = addYears(current, recurrence.every);
          break;
        default:
          current = addDays(current, recurrence.every);
      }
    }
    return occurrences;
  };

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        margin: 'auto',
        maxWidth: 400,
        mt: 3
      }}
    >
      {/* //NOTE: TITLE */}
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: '#1976d2' }}>
        Upcoming Recurrences
      </Typography>

      {/* //NOTE: LIST OF OCCURRENCES */}
      <List>
        {getNextOccurrences().map((date, index) => (
          <ListItem key={index} sx={{ backgroundColor: '#f5f5f5', marginBottom: 1, borderRadius: 1 }}>
            <ListItemText
              primary={format(date, 'PP')}
              sx={{ textAlign: 'center', color: '#333' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PreviewCalendar;
