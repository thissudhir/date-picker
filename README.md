# Recurring Date Picker Component

This project implements a reusable date picker component in React that allows users to select recurring dates, similar to the feature in the TickTick app.

## Tech Stack

- Framework: Next.js with JavaScript
- Styling: Material-UI (MUI)
- State Management: React Context API
- Date Handling: date-fns

## Project Structure

```
/date-picker-recurring
└── app/
    ├── components/
    │   ├── DatePicker.js
    │   ├── PreviewCalendar.js
    │   └── RecurrenceOptions.js
    ├── context/
    │   └── RecurrenceContext.js
    ├── fonts/
    │   ├── GeistMonoVF.woff
    │   └── GeistVF.woff
    ├── globals.css
    ├── layout.js
    ├── page.js
    └── page.module.css
── tests/
│   ├── unit/
│   │   ├── DatePicker.test.js
│   │   └── RecurrenceOptions.test.js
│   └── integration/
│       └── DatePickerIntegration.test.js
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## Usage

Import the DatePicker component in your Next.js pages or components:

```jsx
function MyPage() {
  return (
    <div>
      <h1>Select Recurring Dates</h1>
      <DatePicker />
    </div>
  );
}

export default MyPage;
```

## Features

- Select recurring patterns: Daily, Weekly, Monthly, Yearly
- Customize recurrence: Every X days/weeks/months/years
- Select specific days of the week
- Choose the nth day of the month
- Visual preview of selected dates
- Set start and end dates for recurrence

## Testing

Run unit and integration tests:

```
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
