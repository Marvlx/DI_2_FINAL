import appleLogo from '../../assets/apple_logo.svg'
import googleLogo from '../../assets/google_logo.svg'

function SocialButton({ logoSrc, logoAlt, label, className = '' }) {
  return (
    <button
      type="button"
      className={`h-12 rounded-full border border-[#d7d7d7] !text-[14px] !font-semibold ${className}`}
    >
      <span className="flex items-center justify-center gap-2">
        <img src={logoSrc} alt={logoAlt} className="h-5 w-5" />
        <span>{label}</span>
      </span>
    </button>
  )
}

export function SocialDivider({
  text = 'o',
  className = '',
  textClassName = 'text-xl',
}) {
  return (
    <div className={`my-6 flex items-center gap-4 text-[#8f8f8f] ${className}`}>
      <span className="h-px flex-1 bg-[#d3d3d3]" />
      <span className={textClassName}>{text}</span>
      <span className="h-px flex-1 bg-[#d3d3d3]" />
    </div>
  )
}

export default function SocialProviderButtons({ secondButtonClassName = 'mt-3' }) {
  return (
    <>
      <SocialButton logoSrc={appleLogo} logoAlt="Apple logo" label="Apple pay" />
      <SocialButton
        logoSrc={googleLogo}
        logoAlt="Google logo"
        label="Google Pay"
        className={secondButtonClassName}
      />
    </>
  )
}
