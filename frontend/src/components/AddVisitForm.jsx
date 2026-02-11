import { useState } from "react";
import API from "../services/api";

export default function AddVisitForm({ patientId, refresh }) {
  const [form, setForm] = useState({
    visitDate: "",
    diagnosis: "",
    medications: "",
    notes: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    if (!form.visitDate || !form.diagnosis) {
      alert("Visit date and diagnosis are required");
      return;
    }

    await API.post(`/visits/${patientId}`, {
      ...form,
      medications: form.medications
        ? form.medications.split(",").map((m) => m.trim())
        : []
    });

    refresh();

    setForm({
      visitDate: "",
      diagnosis: "",
      medications: "",
      notes: ""
    });
  };

  return (
    <div className="bg-slate-800 p-5 rounded-xl shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Add New Visit</h3>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Visit Date
          </label>
          <input
            type="date"
            value={form.visitDate}
            onChange={(e) =>
              setForm({ ...form, visitDate: e.target.value })
            }
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Diagnosis
          </label>
          <input
            type="text"
            placeholder="Enter diagnosis"
            value={form.diagnosis}
            onChange={(e) =>
              setForm({ ...form, diagnosis: e.target.value })
            }
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Medications (comma separated)
          </label>
          <input
            type="text"
            placeholder="Paracetamol, Ibuprofen"
            value={form.medications}
            onChange={(e) =>
              setForm({ ...form, medications: e.target.value })
            }
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Notes (optional)
          </label>
          <textarea
            rows="3"
            placeholder="Additional notes..."
            value={form.notes}
            onChange={(e) =>
              setForm({ ...form, notes: e.target.value })
            }
            className="w-full p-2 rounded bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded font-semibold">
          Add Visit
        </button>
      </form>
    </div>
  );
}
