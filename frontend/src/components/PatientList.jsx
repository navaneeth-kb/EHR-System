export default function PatientList({ patients, onSelect }) {
  return (
    <div>
      <h2>Patients</h2>
      {patients.map((p) => (
        <div key={p._id} onClick={() => onSelect(p)}>
          {p.firstName} {p.lastName}
        </div>
      ))}
    </div>
  );
}
