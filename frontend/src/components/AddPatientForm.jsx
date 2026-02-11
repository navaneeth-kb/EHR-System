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
        <div>

          <div className="relative">
            <select
              value={form.gender}
              onChange={(e) =>
                setForm({ ...form, gender: e.target.value })
              }
              className="w-full appearance-none bg-slate-900 border border-slate-600 text-white p-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="" disabled hidden>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {/* Custom Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              ▼
            </div>
          </div>
        </div>



        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold">
          Add Patient
        </button>
      </form>
    </div>
  );
}
