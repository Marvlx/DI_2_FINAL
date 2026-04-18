export default function BrandMark({ label, logoSrc }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid size-12 place-content-center overflow-hidden rounded-full bg-black">
        {logoSrc ? (
          <img src={logoSrc} alt={`${label} logo`} className="size-8 object-contain" />
        ) : (
          <span className="text-[11px] font-semibold text-white">
            {label.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-[12px] leading-none text-[#6f6f6f]">{label}</span>
    </div>
  )
}
