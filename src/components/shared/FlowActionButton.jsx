export default function FlowActionButton({ className = '', children, ...props }) {
  return (
    <button
      type="button"
      className={`h-14 w-full rounded-full border border-transparent bg-[#1f2a30] text-[18px] font-bold text-white hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
