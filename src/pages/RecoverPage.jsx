import CarLogo from '../components/shared/CarLogo'
import Field from '../components/shared/Field'

export default function RecoverPage({ onContinue, onBackToLogin, onCreateNewAccount }) {
  return (
    <section className="flex flex-1 flex-col p-5">
      <div className="mt-6">
        <CarLogo />
      </div>

      <h2 className="mt-36 text-center text-[30px] font-semibold">Restablecer Contrasena</h2>
      <p className="mt-3 text-center text-sm text-[#8f8f8f]">
        Ingrese la direccion de correo asociada a su cuenta y le enviaremos un enlace.
      </p>

      <div className="mt-8">
        <Field placeholder="Correo electronico" />
      </div>

      <button type="button" onClick={onContinue} className="mt-6 h-14 rounded-full bg-[#1f2a30] text-[18px] font-bold text-white">
        Continuar
      </button>
      <button type="button" onClick={onBackToLogin} className="mt-5 text-center text-[#6f6f6f]">
        Volver a iniciar sesion
      </button>

      <button type="button" onClick={onCreateNewAccount} className="mt-auto pb-10 text-center text-[#7b7b7b]">
        Crear una cuenta nueva ahora
      </button>
    </section>
  )
}
