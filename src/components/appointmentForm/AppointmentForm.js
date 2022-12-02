import React from "react";
import { ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Title" value={title} onChange={({target})=> setTitle(target.value)} />
      <input type="date" placeholder="Enter Date" value={date} onChange={({target})=> setDate(target.value)} min={getTodayString()} />
      <input type="time" placeholder="Enter Time" value={time} onChange={({target})=> setTime(target.value)} />
      <ContactPicker contacts={contacts} value={contact} onChange={({target})=> setContact(target.value)} />
      <input type="submit" value="Sumbit" />
    </form>
    //AppointmentForm
  );
};
