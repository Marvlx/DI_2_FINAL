export default function Navbar({ title, leftContent, rightContent }) {
  return (
    <header className="relative flex h-[65px] items-center justify-center border-b border-[var(--color-stroke)] bg-[var(--color-bg)] px-5">
      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        {leftContent}
      </div>
      <h1 className="text-lg font-bold text-[var(--color-text)]">{title}</h1>
      <div className="absolute right-5 top-1/2 -translate-y-1/2">
        {rightContent}
      </div>
    </header>
  )
}
