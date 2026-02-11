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
    <div style={{ padding: "20px" }}>
      <h1>EHR System</h1>
      <AddPatientForm refresh={fetchPatients} />
      <PatientList patients={patients} onSelect={setSelected} />
      {selected && <PatientDetails patient={selected} />}
    </div>
  );
}

export default App;
