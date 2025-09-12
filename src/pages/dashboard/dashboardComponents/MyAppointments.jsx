import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AppointmentRow from "./AppointmentRow";

// Placeholder user object (replace with your own user logic)
const user = { email: "test@example.com" };

function MyAppointments() {
  const navigate = useNavigate();

  const {
    data: appointment,
    isLoading,
    error,
  } = useQuery(["appointment", user], () =>
    fetch(
      `https://dental-doctor.onrender.com/api/v1/bookings?patient=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error);
  }
  return (
    <div>
      <h1 className="font-bold">
        Appointments: {appointment?.bookings?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointment?.bookings?.map((data, index) => (
              <AppointmentRow key={index} booking={data} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointments;