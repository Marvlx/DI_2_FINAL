import CarLogo from '../components/shared/CarLogo'
import Field from '../components/shared/Field'

export default function RegisterPage({ onRegister, onLogin }) {
  return (
    <section className="flex flex-1 flex-col p-5">
      <div className="mt-6">
        <CarLogo />
      </div>

      <h2 className="mt-10 text-center text-4xl font-semibold">Crear cuenta</h2>

      <div className="mt-8 space-y-3">
        <Field placeholder="Nombre completo" />
        <Field placeholder="Correo electronico" />
        <Field placeholder="Licencia" />
        <Field placeholder="Contrasena" type="password" />
        <Field placeholder="Repetir contrasena" type="password" />
      </div>

      <button type="button" onClick={onRegister} className="mt-6 h-14 rounded-full bg-[#1f2a30] text-xl font-semibold text-white">
        Registrarse
      </button>
      <button type="button" onClick={onLogin} className="mt-4 h-14 rounded-full border border-[#8a8a8a] text-xl font-semibold text-[#151515]">
        Iniciar sesion
      </button>
    </section>
  )
}
