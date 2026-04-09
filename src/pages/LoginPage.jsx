import CarLogo from '../components/shared/CarLogo'
import Field from '../components/shared/Field'

export default function LoginPage({ onForgotPassword, onLogin, onCreateAccount }) {
  return (
    <section className="flex flex-1 flex-col p-5">
      <div className="mt-6">
        <CarLogo />
      </div>

      <h2 className="mt-10 text-4xl font-semibold leading-[1.1] text-[#151515]">
        Bienvenido de nuevo.
        <br />
        Listo para salir a la carretera.
      </h2>

      <div className="mt-8 space-y-3">
        <Field placeholder="Correo electronico/Numero de telefono" />
        <Field placeholder="Contrasena" type="password" />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-[#7b7b7b]">
        <span className="flex items-center gap-2">
          <span className="grid size-5 place-content-center rounded-md bg-[#4c4c4c] text-xs text-white">
            ✓
          </span>
          Recordarme contrasena
        </span>
        <button type="button" onClick={onForgotPassword}>
          Olvide mi contrasena
        </button>
      </div>

      <button
        type="button"
        onClick={onLogin}
        className="mt-6 h-14 rounded-full bg-[#1f2a30] text-xl font-semibold text-white"
      >
        Iniciar sesion
      </button>

      <button
        type="button"
        onClick={onCreateAccount}
        className="mt-4 h-14 rounded-full border border-[#8a8a8a] text-xl font-semibold text-[#151515]"
      >
        Crear cuenta
      </button>

      <div className="my-6 flex items-center gap-4 text-[#8f8f8f]">
        <span className="h-px flex-1 bg-[#d3d3d3]" />
        <span className="text-xl">o</span>
        <span className="h-px flex-1 bg-[#d3d3d3]" />
      </div>

      <button type="button" className="h-12 rounded-full border border-[#d7d7d7] text-base font-semibold">
        Apple pay
      </button>
      <button type="button" className="mt-3 h-12 rounded-full border border-[#d7d7d7] text-base font-semibold">
        Google Pay
      </button>

      <p className="mt-auto pb-4 text-center text-sm text-[#7b7b7b]">
        No tienes cuenta? Crear cuenta.
      </p>
    </section>
  )
}
