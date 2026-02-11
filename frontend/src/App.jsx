import { useState, useEffect } from "react";
import API from "./services/api";
import PatientList from "./components/PatientList";
import AddPatientForm from "./components/AddPatientForm";
import PatientDetails from "./components/PatientDetails";

function App() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchPatients = async () => {
    const res = await API.get("/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Electronic Health Record</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-slate-700/50 p-6 rounded-xl shadow-lg">
          <AddPatientForm refresh={fetchPatients} />
          <PatientList patients={patients} onSelect={setSelected} />
        </div>

        <div className="md:col-span-2 bg-slate-700/50 p-6 rounded-xl shadow-lg">
          {selected ? (
            <PatientDetails patient={selected} />
          ) : (
            <p className="text-gray-300">Select a patient to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
