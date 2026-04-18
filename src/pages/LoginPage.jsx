import { useState } from 'react'
import CarLogo from '../components/shared/CarLogo'
import Field from '../components/shared/Field'
import PasswordField from '../components/shared/PasswordField'
import SocialProviderButtons, { SocialDivider } from '../components/shared/SocialProviderButtons'

export default function LoginPage({ onForgotPassword, onLogin, onCreateAccount }) {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)

  const handleLogin = () => {
    if (!emailOrPhone.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos para iniciar sesion.')
      return
    }

    onLogin()
  }

  return (
    <section className="flex flex-1 flex-col p-5">
      <div className="mt-6">
        <CarLogo />
      </div>

      <h2 className="mt-10 text-[30px] font-semibold leading-[1.12] text-[#151515]">
        Bienvenido de nuevo.
        <br />
        Listo para salir a la carretera.
      </h2>

      <div className="mt-8 space-y-3">
        <Field
          placeholder="Correo electronico/Numero de telefono"
          value={emailOrPhone}
          onChange={(event) => setEmailOrPhone(event.target.value)}
        />
        <PasswordField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={'Contrase\u00F1a'}
          showAriaLabel={'Mostrar contrase\u00F1a'}
          hideAriaLabel={'Ocultar contrase\u00F1a'}
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-[#7b7b7b]">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            className="peer sr-only"
          />
          <span className="grid size-5 place-content-center rounded-md border border-[#8d8d8d] bg-white text-xs text-white transition peer-checked:border-[#4c4c4c] peer-checked:bg-[#4c4c4c]">
            {rememberMe ? '\u2713' : ''}
          </span>
          <span className="text-sm font-normal text-[#7b7b7b]">{'Recordarme contrase\u00F1a'}</span>
        </label>

        <button type="button" onClick={onForgotPassword} className="!text-[14px] !font-normal text-[#7b7b7b]">
          {'Olvide mi contrase\u00F1a'}
        </button>
      </div>

      <button
        type="button"
        onClick={handleLogin}
        className="mt-6 h-14 rounded-full bg-[#1f2a30] text-[18px] font-bold text-white"
      >
        Iniciar sesion
      </button>

      <button
        type="button"
        onClick={onCreateAccount}
        className="mt-4 h-14 rounded-full border border-[#8a8a8a] text-[18px] font-bold text-[#151515]"
      >
        Crear cuenta
      </button>

      <SocialDivider text="o" />
      <SocialProviderButtons />

      <p className="mt-auto pb-4 text-center text-sm text-[#7b7b7b]">
        No tienes cuenta? Crear cuenta.
      </p>
    </section>
  )
}
