import WeekTemplate from './WeekTemplate'

const WEEKS_PER_MONTH = 4

function MonthTemplate({ monthName }) {
  const weeks = Array.from({ length: WEEKS_PER_MONTH }, (_, i) => i + 1)

  return (
    <section className="print-page month-page" aria-label={`Month: ${monthName}`}>
      <h2 className="month-heading">{monthName}</h2>
      <table className="month-table">
        <thead>
          <tr>
            <th className="col-week">Week</th>
            <th className="col-notes">Planning notes / events</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((weekNum) => (
            <WeekTemplate key={weekNum} weekNumber={weekNum} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default MonthTemplate
