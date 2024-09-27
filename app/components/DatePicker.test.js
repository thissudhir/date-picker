import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from './DatePicker'; // Adjust the path as necessary
import { RecurrenceProvider } from '../context/RecurrenceContext'; // Adjust the path as necessary

describe('DatePicker Component', () => {
    beforeEach(() => {
        render(
            <RecurrenceProvider>
                <DatePicker />
            </RecurrenceProvider>
        );
    });

    test('renders DatePicker component and allows date input', () => {
        const startDateInput = screen.getByLabelText(/Start Date/i);
        fireEvent.change(startDateInput, { target: { value: '2024-01-01' } });
        expect(startDateInput.value).toBe('2024-01-01');
    });

    test('displays selected recurring dates', () => {
        const startDateInput = screen.getByLabelText(/Start Date/i);
        fireEvent.change(startDateInput, { target: { value: '2024-01-01' } });

        const recurrenceOption = screen.getByLabelText(/Weekly/i); // Assuming there's a checkbox/radio for "Weekly"
        fireEvent.click(recurrenceOption);

        const applyButton = screen.getByText(/Apply/i); // Assuming there is an "Apply" button to confirm the selection
        fireEvent.click(applyButton);

        // Check if the selected dates are displayed correctly
        const selectedDate = screen.getByText(/2024-01-08/i); // Assuming that it displays the next weekly occurrence
        expect(selectedDate).toBeInTheDocument();
    });

    test('handles invalid date input', () => {
        const startDateInput = screen.getByLabelText(/Start Date/i);
        fireEvent.change(startDateInput, { target: { value: 'invalid-date' } });
        expect(startDateInput.value).toBe('invalid-date');

        const errorMessage = screen.getByText(/Please enter a valid date/i); // Assuming there's an error message displayed
        expect(errorMessage).toBeInTheDocument();
    });
});
