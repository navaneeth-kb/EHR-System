export default function PatientList({ patients, onSelect }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Patients</h3>

      {patients.length === 0 && (
        <p className="text-gray-400">No patients yet</p>
      )}

      <div className="space-y-2">
        {patients.map((p) => (
          <div
            key={p._id}
            onClick={() => onSelect(p)}
            className="p-3 bg-slate-800 rounded cursor-pointer hover:bg-slate-600 transition"
          >
            {p.firstName} {p.lastName}
          </div>
        ))}
      </div>
    </div>
  );
}
