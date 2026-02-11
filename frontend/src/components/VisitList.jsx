export default function VisitList({ visits }) {
  return (
    <div>
      <h4>Visit History</h4>
      {visits.map((v) => (
        <div key={v._id}>
          <p>Date: {new Date(v.visitDate).toLocaleDateString()}</p>
          <p>Diagnosis: {v.diagnosis}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
