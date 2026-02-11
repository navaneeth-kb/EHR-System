import { useState, useEffect } from "react";
import API from "./services/api";
import PatientList from "./components/PatientList";
import AddPatientForm from "./components/AddPatientForm";
import PatientDetails from "./components/PatientDetails";

function App() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPatients = async () => {
    const res = await API.get("/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((p) =>
    `${p.firstName} ${p.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Electronic Health Record</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
          <AddPatientForm refresh={fetchPatients} />

          <input
            type="text"
            placeholder="Search patient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 mt-4 mb-4 rounded bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <PatientList
            patients={filteredPatients}
            onSelect={setSelected}
          />
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
          {selected ? (
            <PatientDetails patient={selected} />
          ) : (
            <p className="text-gray-400">
              Select a patient to view details
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
