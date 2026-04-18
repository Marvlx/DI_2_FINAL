export default function CategoryPill({
  label,
  active,
  onClick,
  iconSrc,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-3 !text-[12px] !font-semibold transition ${
        active
          ? 'border-[#1f2a30] bg-[#1f2a30] text-white'
          : 'border-[#d0d0d0] bg-white text-[#5f5f5f] hover:border-[#9a9a9a]'
      }`}
    >
      <span
        className={`grid size-6 place-content-center overflow-hidden rounded-full ${
          active ? 'bg-white/95' : 'bg-black'
        }`}
      >
        {iconSrc ? (
          <img
            src={iconSrc}
            alt=""
            className="size-4 object-contain"
            aria-hidden="true"
          />
        ) : (
          <span
            className={`block size-2 rounded-full ${
              active ? 'bg-[#1f2a30]' : 'bg-white'
            }`}
          />
        )}
      </span>
      <span className="!text-[12px]">{label}</span>
    </button>
  )
}
