const LINES_PER_WEEK = 6

function WeekTemplate({ weekNumber, label }) {
  const displayLabel = label ?? `Week ${weekNumber}`
  return (
    <tr className="week-row">
      <td className="col-week">{displayLabel}</td>
      <td className="col-notes">
        <div className="writing-lines">
          {Array.from({ length: LINES_PER_WEEK }).map((_, i) => (
            <span key={i} className="writing-line" aria-hidden />
          ))}
        </div>
      </td>
    </tr>
  )
}

export default WeekTemplate
