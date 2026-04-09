const variantClasses = {
  primary:
    'bg-[var(--color-button)] text-white border border-[var(--color-stroke)] hover:brightness-110',
  secondary:
    'bg-[var(--color-secondary)] text-[var(--color-text)] border border-[var(--color-primary)] hover:bg-[#e4e4e4]',
  ghost:
    'bg-transparent text-[var(--color-primary)] border border-[var(--color-stroke)] hover:bg-[var(--color-secondary)]',
}

const sizeClasses = {
  xl: 'h-[62px] px-8 text-[18px] rounded-[62px]',
  sm: 'h-[43px] px-4 text-[14px] rounded-[43px]',
  xs: 'h-8 px-3 text-xs rounded-full',
}

export default function Button({
  variant = 'primary',
  size = 'xl',
  fullWidth = false,
  className = '',
  type = 'button',
  children,
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]',
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.xl,
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
