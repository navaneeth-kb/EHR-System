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
      <h2 className="text-2xl font-bold mb-4">
        {patient.firstName} {patient.lastName}
      </h2>

      <AddVisitForm patientId={patient._id} refresh={fetchVisits} />
      <VisitList visits={visits} />
    </div>
  );
}
