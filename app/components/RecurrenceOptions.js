import React, { useContext } from 'react';
import { RecurrenceContext } from '../context/RecurrenceContext';
import { TextField, Checkbox, FormControlLabel, FormGroup, Box, Typography } from '@mui/material';

const RecurrenceOptions = () => {
    const { recurrence, setRecurrence } = useContext(RecurrenceContext);

    //NOTE: HANDLE THE CHANGE FOR 'Every X days/weeks/months/years' INPUT
    const handleEveryChange = (e) => {
        setRecurrence({ ...recurrence, every: e.target.value });
    };

    //NOTE: HANDLE SELECTING SPECIFIC DAYS FOR WEEKLY RECURRENCE
    const handleSpecificDaysChange = (day) => {
        const newSpecificDays = recurrence.specificDays.includes(day)
            ? recurrence.specificDays.filter(d => d !== day)
            : [...recurrence.specificDays, day];
        setRecurrence({ ...recurrence, specificDays: newSpecificDays });
    };

    return (
        <Box sx={{
            padding: 3,
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: 'auto',
            maxWidth: 500
        }}>
            <Typography variant="h6" gutterBottom>
                Set Recurrence Options
            </Typography>

            {/* //NOTE: DISPLAY DAY SELECTION OPTIONS FOR WEEKLY RECURRENCE*/}
            {recurrence.type === 'weekly' && (
                <FormGroup sx={{ marginBottom: 2 }}>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <FormControlLabel
                            key={day}
                            control={<Checkbox
                                checked={recurrence.specificDays.includes(day)}
                                onChange={() => handleSpecificDaysChange(day)}
                                sx={{
                                    color: '#1976d2',
                                    '&.Mui-checked': { color: '#1976d2' }
                                }}
                            />}
                            label={day}
                            sx={{ marginLeft: 1 }}
                        />
                    ))}
                </FormGroup>
            )}

            {/* //NOTE:INPUT FIELD FOR 'Every X days/weeks/months/years' */}
            {['daily', 'weekly', 'monthly', 'yearly'].includes(recurrence.type) && (
                <TextField
                    label={`Every ${recurrence.every} ${recurrence.label[recurrence.type]}`}
                    type="number"
                    value={recurrence.every}
                    onChange={handleEveryChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                        '& .MuiInputBase-root': {
                            backgroundColor: '#f5f5f5',
                        }
                    }}
                />
            )}
        </Box>
    );
};

export default RecurrenceOptions;
