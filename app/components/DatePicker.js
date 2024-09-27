"use client";

import React, { useContext } from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel, Box, Typography } from '@mui/material';
import { RecurrenceContext } from '../context/RecurrenceContext';

const DatePicker = () => {
    const { recurrence, setRecurrence } = useContext(RecurrenceContext);

    //NOTE:UPDATE RECURRENCE TYPE (daily, weekly, etc.)
    const handleRecurrenceChange = (e) => {
        setRecurrence({ ...recurrence, type: e.target.value });
    };

    return (
        <Box sx={{
            maxWidth: 400,
            margin: 'auto',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff'
        }}>
            <Typography variant="h6" gutterBottom>
                Select Recurrence Pattern
            </Typography>

            {/* //NOTE: RECURRENCE SELECTOR */}
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Recurrence</InputLabel>
                <Select
                    value={recurrence.type}
                    onChange={handleRecurrenceChange}
                    sx={{ backgroundColor: '#f5f5f5' }}
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly</MenuItem>
                </Select>
            </FormControl>

            {/*//NOTE: START DATE INPUT */}
            <TextField
                label="Start Date"
                type="date"
                value={recurrence.startDate.toISOString().split('T')[0]}
                onChange={(e) => setRecurrence({ ...recurrence, startDate: new Date(e.target.value) })}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }} // Ensure label stays above
                sx={{
                    marginBottom: 2,
                    '& .MuiInputBase-root': {
                        backgroundColor: '#f5f5f5', // Light background for input
                    }
                }}
            />

            {/* //NOTE: END DATE INPUT */}
            <TextField
                label="End Date (optional)"
                type="date"
                value={recurrence.endDate ? recurrence.endDate.toISOString().split('T')[0] : ''}
                onChange={(e) => setRecurrence({ ...recurrence, endDate: new Date(e.target.value) })}
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                sx={{
                    '& .MuiInputBase-root': {
                        backgroundColor: '#f5f5f5',
                    }
                }}
            />
        </Box>
    );
};

export default DatePicker;
