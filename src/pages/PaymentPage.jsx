import { useState } from 'react'
import AppHeader from '../components/shared/AppHeader'
import Stepper from '../components/shared/Stepper'
import Field from '../components/shared/Field'
import FlowActionButton from '../components/shared/FlowActionButton'
import SocialProviderButtons, { SocialDivider } from '../components/shared/SocialProviderButtons'
import visaIcon from '../assets/visa.svg'
import mastercardIcon from '../assets/mastercard.svg'
import amexIcon from '../assets/american_express.svg'
import discoverIcon from '../assets/discover.svg'
import cvcIcon from '../assets/cvc_icon.svg'
import efectivoIcon from '../assets/efectivo_icon.svg'
import creditCardImage from '../assets/credit_card.png'

const paymentMethodOptions = [
  { value: 'Tarjeta', label: 'Pago con tarjeta' },
  { value: 'Yape', label: 'Yape' },
  { value: 'Efectivo', label: 'Pago efectivo' },
]

export default function PaymentPage({
  paymentMethod,
  onPaymentMethodChange,
  onBack,
  onContinue,
}) {
  const [isMethodMenuOpen, setIsMethodMenuOpen] = useState(false)
  const selectedPaymentMethod =
    paymentMethodOptions.find((option) => option.value === paymentMethod) ??
    paymentMethodOptions[0]

  const handleMethodSelect = (method) => {
    onPaymentMethodChange(method)
    setIsMethodMenuOpen(false)
  }

  return (
    <>
      <AppHeader title="Metodos de pago" onBack={onBack} />

      <section className="flex flex-1 flex-col gap-4 p-5">
        <Stepper step={1} />

        <article className="overflow-hidden rounded-2xl border border-[#243038]/15 bg-[#132026]">
          <img
            src={creditCardImage}
            alt="Tarjeta de credito"
            className="h-auto w-full object-contain"
          />
        </article>

        <div className="space-y-2">
          <p className="text-[16px] font-semibold text-[#151515]">{'Seleccionar m\u00E9todo de pago'}</p>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMethodMenuOpen((previous) => !previous)}
              className="flex h-12 w-full items-center justify-between rounded-xl border border-[#d7d7d7] bg-[#f8f8f8] px-3 !text-[14px] !font-normal text-[#4d4d4d]"
              aria-haspopup="listbox"
              aria-expanded={isMethodMenuOpen}
            >
              <span className="flex items-center gap-2">
                <img src={efectivoIcon} alt="" className="h-5 w-5" />
                <span>{selectedPaymentMethod.label}</span>
              </span>
              <span className="flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 text-[#8c8c8c] transition-transform ${
                    isMethodMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            {isMethodMenuOpen ? (
              <div className="absolute z-10 mt-2 w-full rounded-xl border border-[#d7d7d7] bg-white p-1 shadow-sm">
                {paymentMethodOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleMethodSelect(option.value)}
                    className={`flex h-10 w-full items-center justify-between rounded-lg px-3 !text-[14px] !font-normal ${
                      paymentMethod === option.value
                        ? 'bg-[#1f2a30] text-white'
                        : 'text-[#4d4d4d] hover:bg-[#f3f3f3]'
                    }`}
                    role="option"
                    aria-selected={paymentMethod === option.value}
                  >
                    <span>{option.label}</span>
                    {paymentMethod === option.value ? (<span className="size-2 rounded-full bg-white" aria-hidden="true" />) : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[16px] font-semibold text-[#151515]">{'Informaci\u00F3n de la tarjeta'}</p>
          <Field placeholder="Nombre completo" />
          <Field placeholder="Direccion de correo electronico" />

          <div className="relative">
            <input
              type="text"
              placeholder="Numero"
              className="h-12 w-full rounded-xl border border-[#d7d7d7] bg-[#f8f8f8] px-4 pr-[8.8rem] text-sm outline-none placeholder:text-[#9e9e9e] focus:border-[#1f2a30]"
            />
            <span className="absolute inset-y-0 right-2 flex items-center gap-1">
              <img src={visaIcon} alt="Visa" className="h-4 w-6 object-contain" />
              <img src={mastercardIcon} alt="Mastercard" className="h-4 w-6 object-contain" />
              <img src={amexIcon} alt="American Express" className="h-4 w-6 object-contain" />
              <img src={discoverIcon} alt="Discover" className="h-4 w-6 object-contain" />
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Field placeholder="MM / AA" />
            <div className="relative">
              <input
                type="text"
                placeholder="CVC"
                className="h-12 w-full rounded-xl border border-[#d7d7d7] bg-[#f8f8f8] px-4 pr-10 text-sm outline-none placeholder:text-[#9e9e9e] focus:border-[#1f2a30]"
              />
              <img src={cvcIcon} alt="CVC" className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
            </div>
          </div>
        </div>

        <label className="mt-1 flex items-center gap-2 text-sm text-[#7b7b7b]">
          <input type="checkbox" defaultChecked className="size-4 accent-[#1f2a30]" />
          <span>Aceptar y continuar</span>
        </label>

        <SocialDivider text="Pagar con tarjeta o" textClassName="text-sm" className="my-0" />
        <SocialProviderButtons secondButtonClassName="" />

        <FlowActionButton onClick={onContinue} className="mt-auto">
          Continuar
        </FlowActionButton>
      </section>
    </>
  )
}

