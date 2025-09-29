import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";
import Aa from "./appointment123";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="">
      <AppointmentBanner date={date} setDate={setDate} />
     
      <Aa />
      <AvailableAppointment date={date} setDate={setDate} />
    </div>
  );
};

export default Appointment;
