"use client";

import React, { useState } from "react";
import { DatePicker } from "@nextui-org/date-picker";
import { now, getLocalTimeZone } from "@internationalized/date";
import classes from './timePicker.module.css'; 

export default function TimePicker() {
  const [selectedDate, setSelectedDate] = useState(now(getLocalTimeZone()));

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="date-picker">Event Date</label>
      <DatePicker
        id="date-picker"
        className="time-picker"
        variant="bordered"
        hideTimeZone
        showMonthAndYearPickers
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  );
}
