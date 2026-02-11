import { useEffect, useState } from "react";
import API from "../services/api";
import AddVisitForm from "./AddVisitForm";
import VisitList from "./VisitList";

export default function PatientDetails({ patient }) {
  const [visits, setVisits] = useState([]);

  const fetchVisits = async () => {
    const res = await API.get(`/visits/${patient._id}`);
    setVisits(res.data);
  };

  useEffect(() => {
    fetchVisits();
  }, [patient]);

  return (
    <div>
      <h3>{patient.firstName} {patient.lastName}</h3>
      <AddVisitForm patientId={patient._id} refresh={fetchVisits} />
      <VisitList visits={visits} />
    </div>
  );
}
