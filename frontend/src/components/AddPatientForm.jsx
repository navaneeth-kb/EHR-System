import { useState } from "react";
import API from "../services/api";

export default function AddPatientForm({ refresh }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/patients", form);
    refresh();
    setForm({ firstName: "", lastName: "", dateOfBirth: "", gender: "" });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add Patient</h2>
      <form onSubmit={submit} className="space-y-3">
        <input
          className="w-full p-2 rounded bg-slate-800 border border-slate-600"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <input
          className="w-full p-2 rounded bg-slate-800 border border-slate-600"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <input
          type="date"
          className="w-full p-2 rounded bg-slate-800 border border-slate-600"
          value={form.dateOfBirth}
          onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
        />
        <input
          className="w-full p-2 rounded bg-slate-800 border border-slate-600"
          placeholder="Gender"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold">
          Add Patient
        </button>
      </form>
    </div>
  );
}
