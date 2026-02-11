export default function VisitList({ visits }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Visit History
      </h3>

      {visits.length === 0 && (
        <div className="bg-slate-900 p-4 rounded text-gray-400">
          No visits found.
        </div>
      )}

      <div className="space-y-4">
        {visits.map((visit) => (
          <div
            key={visit._id}
            className="bg-slate-900 p-5 rounded-xl border border-slate-700"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-lg">
                {visit.diagnosis}
              </h4>
              <span className="text-sm text-gray-400">
                {new Date(
                  visit.visitDate
                ).toLocaleDateString()}
              </span>
            </div>

            {visit.medications?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {visit.medications.map((med, index) => (
                  <span
                    key={index}
                    className="bg-blue-600/20 text-blue-400 px-2 py-1 text-sm rounded-full"
                  >
                    {med}
                  </span>
                ))}
              </div>
            )}

            {visit.notes && (
              <p className="text-gray-300 text-sm">
                {visit.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
