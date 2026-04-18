export default function IconCircleButton({
  size = 'md',
  className = '',
  type = 'button',
  children,
  ...props
}) {
  const sizeClass = size === 'lg' ? 'size-11' : 'size-10'

  return (
    <button
      type={type}
      className={`grid ${sizeClass} place-content-center rounded-full border border-[#d0d0d0] bg-white ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
