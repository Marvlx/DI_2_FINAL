import { useState } from 'react'
import openEye from '../../assets/open_eye.svg'
import closeEye from '../../assets/close_eye.svg'

export default function PasswordField({
  value,
  onChange,
  placeholder = 'Contrasena',
  showAriaLabel = 'Mostrar contrasena',
  hideAriaLabel = 'Ocultar contrasena',
}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative">
      <input
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-xl border border-[#d7d7d7] bg-[#f8f8f8] px-4 pr-12 text-sm outline-none placeholder:text-[#9e9e9e] focus:border-[#1f2a30]"
      />
      <button
        type="button"
        onClick={() => setIsVisible((previous) => !previous)}
        className="absolute inset-y-0 right-3 grid place-content-center"
        aria-label={isVisible ? hideAriaLabel : showAriaLabel}
      >
        <img src={isVisible ? openEye : closeEye} alt="" className="h-5 w-5" />
      </button>
    </div>
  )
}
