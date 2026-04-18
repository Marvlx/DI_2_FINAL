import { useState } from 'react'
import CarLogo from '../components/shared/CarLogo'
import Field from '../components/shared/Field'
import PasswordField from '../components/shared/PasswordField'
import SocialProviderButtons, { SocialDivider } from '../components/shared/SocialProviderButtons'

export default function RegisterPage({ onRegister, onLogin }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [license, setLicense] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleRegister = () => {
    const hasEmptyField = !fullName.trim() || !email.trim() || !license.trim() || !password.trim() || !repeatPassword.trim()

    if (hasEmptyField) {
      alert('Por favor, completa todos los campos para registrarte.')
      return
    }

    onRegister()
  }

  return (
    <section className="flex flex-1 flex-col p-5">
      <div className="mt-6">
        <CarLogo />
      </div>

      <h2 className="mt-10 text-center text-[30px] font-semibold">Crear cuenta</h2>

      <div className="mt-8 space-y-3">
        <Field
          placeholder="Nombre completo"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <Field
          placeholder="Correo electronico"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Field
          placeholder="Licencia"
          value={license}
          onChange={(event) => setLicense(event.target.value)}
        />
        <PasswordField
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={'Contrase\u00F1a'}
          showAriaLabel={'Mostrar contrase\u00F1a'}
          hideAriaLabel={'Ocultar contrase\u00F1a'}
        />
        <PasswordField
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
          placeholder={'Repetir contrase\u00F1a'}
          showAriaLabel={'Mostrar contrase\u00F1a repetida'}
          hideAriaLabel={'Ocultar contrase\u00F1a repetida'}
        />
      </div>

      <button type="button" onClick={handleRegister} className="mt-6 h-14 rounded-full bg-[#1f2a30] text-[18px] font-bold text-white">
        Registrarse
      </button>
      <button type="button" onClick={onLogin} className="mt-4 h-14 rounded-full border border-[#8a8a8a] text-[18px] font-bold text-[#151515]">
        Iniciar sesion
      </button>

      <SocialDivider text="o" />
      <SocialProviderButtons />

      <p className="mt-auto pb-4 text-center text-sm text-[#7b7b7b]">
        {'\u00BFYa tienes una cuenta? Inicia sesi\u00F3n'}
      </p>
    </section>
  )
}
