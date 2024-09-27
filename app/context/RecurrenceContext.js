"use client"; //NOTE: Indicates this file is a client-side component in Next.js

import React, { createContext, useState } from 'react';

//NOTE: Create a context for the recurrence data. This will be used to share state between components.
export const RecurrenceContext = createContext();

//NOTE: Define the provider component that will wrap the parts of the app that need access to the recurrence state.
export const RecurrenceProvider = ({ children }) => {

    //NOTE: Initialize the state to hold the recurrence details.
    //NOTE: The `recurrence` object will store the type of recurrence (daily, weekly, etc.),
    //NOTE: how often it occurs (`every`), which specific days (for weekly recurrence),
    //NOTE: the nth day for monthly recurrence, and the start and end dates.
    const [recurrence, setRecurrence] = useState({
        type: 'daily',
        label: { daily: 'day', weekly: 'week', monthly: 'month', yearly: 'year' },
        every: 1,
        specificDays: [],
        nthDay: null,
        startDate: new Date(),
        endDate: null,
    });

    //NOTE: THE CONTEXT PROVIDER WILL WRAP COMPONENTS THAT NEED ACCESS TO THE `recurrence` AND `setRecurrence`.
    return (
        <RecurrenceContext.Provider value={{ recurrence, setRecurrence }}>
            {children} {/* //NOTE: RENDERING ALL THE CHILD COMPONENT PASSED TO THIS PROVIDER */}
        </RecurrenceContext.Provider>
    );
};
