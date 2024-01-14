const EntryCard = ({ entry }) => {
  const date = new Date(entry.CreatedAt).toDateString()
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">SUMMARY</div>
      <div className="px-4 py-4">MOOD</div>
    </div>
  )
}

export default EntryCard
