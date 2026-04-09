export default function Field({ placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-[#d7d7d7] bg-[#f8f8f8] px-4 text-sm outline-none placeholder:text-[#9e9e9e] focus:border-[#1f2a30]"
    />
  )
}
