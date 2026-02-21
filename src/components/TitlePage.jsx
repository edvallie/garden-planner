function TitlePage({ title = 'Garden Calendar', subtitle }) {
  return (
    <section className="print-page title-page" aria-label="Title page">
      <h1 className="title-page-heading">{title}</h1>
      {subtitle && <p className="title-page-subtitle">{subtitle}</p>}
      <p className="title-page-hint">
        Plan by month: each month has four weeks with space for multiple items per week. Use the appendix in the back for plant lists, varieties, and other notes.
      </p>
    </section>
  )
}

export default TitlePage
