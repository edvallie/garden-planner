function AppendixPage({ label, pageIndex }) {
  return (
    <section className="print-page appendix-page" aria-label={`Appendix ${label}`}>
      <h2 className="appendix-heading">{label}</h2>
      <div className="appendix-body">
        {Array.from({ length: 26 }).map((_, i) => (
          <div key={i} className="appendix-line" aria-hidden />
        ))}
      </div>
    </section>
  )
}

export default AppendixPage
