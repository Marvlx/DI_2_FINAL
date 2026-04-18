export default function LabeledDateInput({ label, value, onChange }) {
  return (
    <label className="space-y-1">
      <span className="text-xs font-medium text-[#666666]">{label}</span>
      <input
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-full border border-[#d0d0d0] bg-white px-4 text-sm text-[#4f4f4f] outline-none focus:border-[#1f2a30]"
      />
    </label>
  )
}
