function ReusableCard({ title, description }) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ReusableCard
