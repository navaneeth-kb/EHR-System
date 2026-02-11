import { useState } from "react";
import API from "../services/api";

export default function AddPatientForm({ refresh }) {
  const [form, setForm] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/patients", form);
    refresh();
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="First Name" onChange={e => setForm({...form, firstName:e.target.value})} />
      <input placeholder="Last Name" onChange={e => setForm({...form, lastName:e.target.value})} />
      <input type="date" onChange={e => setForm({...form, dateOfBirth:e.target.value})} />
      <input placeholder="Gender" onChange={e => setForm({...form, gender:e.target.value})} />
      <button>Add Patient</button>
    </form>
  );
}
