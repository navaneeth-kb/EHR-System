import { useEffect, useState } from "react";
import API from "../services/api";
import AddVisitForm from "./AddVisitForm";
import VisitList from "./VisitList";

export default function PatientDetails({ patient }) {
  const [visits, setVisits] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const fetchVisits = async () => {
    const res = await API.get(`/visits/${patient._id}`);
    setVisits(res.data);
  };

  useEffect(() => {
    fetchVisits();
  }, [patient]);

  const filteredVisits = visits
    .filter((v) => {
      const visitDate = new Date(v.visitDate);
      if (startDate && visitDate < new Date(startDate)) return false;
      if (endDate && visitDate > new Date(endDate)) return false;
      return true;
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.visitDate) - new Date(b.visitDate)
        : new Date(b.visitDate) - new Date(a.visitDate)
    );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {patient.firstName} {patient.lastName}
      </h2>

      <AddVisitForm
        patientId={patient._id}
        refresh={fetchVisits}
      />

      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-300 mb-1">
            From
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 rounded bg-slate-900 border border-slate-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            To
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 rounded bg-slate-900 border border-slate-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Sort
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 rounded bg-slate-900 border border-slate-600"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </div>

      <VisitList visits={filteredVisits} />
    </div>
  );
}
