'use client';

import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

import classes from './timePicker.module.css';

const TimePicker = () => {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div className={classes.grafana-light}>
    <DateTimePicker
      onChange={setDateTime}
      value={dateTime}
      className={classes.custom-time-picker} // Add custom class for styling
      calendarClassName={classes.custom-calendar} // Add custom class for calendar styling
      format="HH:mm:ss" // Adjust date format if needed
    />
    </div>
  );
};

export default TimePicker;