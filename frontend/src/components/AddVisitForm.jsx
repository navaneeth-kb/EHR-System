import { useState } from "react";
import API from "../services/api";

export default function AddVisitForm({ patientId, refresh }) {
  const [form, setForm] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await API.post(`/visits/${patientId}`, form);
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input type="date" onChange={e => setForm({...form, visitDate:e.target.value})} />
      <input placeholder="Diagnosis" onChange={e => setForm({...form, diagnosis:e.target.value})} />
      <input placeholder="Medications (comma separated)" 
        onChange={e => setForm({...form, medications:e.target.value.split(",")})} />
      <button>Add Visit</button>
    </form>
  );
}
