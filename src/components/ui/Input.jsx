function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
      <path d="M20 20L16.5 16.5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Input({
  value,
  onChange,
  placeholder = 'Ingresar texto',
  ...props
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-muted)]">
        <SearchIcon />
      </span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[52px] w-full rounded-[10px] border border-[var(--color-stroke)] bg-white pl-11 pr-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
        {...props}
      />
    </div>
  )
}
