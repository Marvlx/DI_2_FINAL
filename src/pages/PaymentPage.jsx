import Navbar from '../components/layout/Navbar'
import BackIcon from '../components/shared/BackIcon'
import DotMenu from '../components/shared/DotMenu'
import Stepper from '../components/shared/Stepper'
import Field from '../components/shared/Field'

export default function PaymentPage({
  paymentMethod,
  onPaymentMethodChange,
  onBack,
  onContinue,
}) {
  return (
    <>
      <Navbar
        title="Metodos de pago"
        leftContent={
          <button type="button" onClick={onBack} className="grid size-10 place-content-center rounded-full border border-[#d0d0d0] bg-white">
            <BackIcon />
          </button>
        }
        rightContent={
          <button type="button" className="grid size-10 place-content-center rounded-full border border-[#d0d0d0] bg-white">
            <DotMenu />
          </button>
        }
      />

      <section className="flex flex-1 flex-col gap-4 p-5">
        <Stepper step={1} />

        <article className="rounded-2xl bg-[radial-gradient(circle_at_top_right,#424a52_0%,#1f2a30_40%,#0f171c_100%)] p-4 text-white">
          <div className="flex items-center justify-between text-sm">
            <span>Mastercard</span>
            <span>VISA</span>
          </div>
          <p className="mt-6 text-lg font-semibold">Carlos Gutierrez</p>
          <p className="mt-2 text-xl tracking-[0.28em]">9655 9655 9655 9655</p>
        </article>

        <div className="grid grid-cols-3 gap-2">
          {['Tarjeta', 'Yape', 'Efectivo'].map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => onPaymentMethodChange(method)}
              className={`h-10 rounded-xl border text-sm ${
                paymentMethod === method
                  ? 'border-[#1f2a30] bg-[#1f2a30] text-white'
                  : 'border-[#d0d0d0] text-[#7a7a7a]'
              }`}
            >
              {method}
            </button>
          ))}
        </div>

        <Field placeholder="Nombre completo" />
        <Field placeholder="Direccion de correo electronico" />
        <Field placeholder="Numero de tarjeta" />

        <div className="grid grid-cols-2 gap-2">
          <Field placeholder="MM / AA" />
          <Field placeholder="CVC" />
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="mt-auto h-14 rounded-full bg-[#1f2a30] text-xl font-semibold text-white"
        >
          Continuar
        </button>
      </section>
    </>
  )
}
