import { useState } from 'react'
import AppHeader from '../components/shared/AppHeader'
import Stepper from '../components/shared/Stepper'
import Field from '../components/shared/Field'
import LabeledDateInput from '../components/shared/LabeledDateInput'
import FlowActionButton from '../components/shared/FlowActionButton'
import locationIcon from '../assets/location.svg'
import hombreIcon from '../assets/hombre_icon.svg'
import mujerIcon from '../assets/mujer_icon.svg'
import otrosIcon from '../assets/otros_icon.svg'

const GENDER_OPTIONS = [
  { label: 'Masculino', icon: hombreIcon },
  { label: 'Femenino', icon: mujerIcon },
  { label: 'Otros', icon: otrosIcon },
]

export default function ReservationPage({
  pickupDate,
  dropoffDate,
  onPickupDateChange,
  onDropoffDateChange,
  onBack,
  onPayNow,
}) {
  const [withDriver, setWithDriver] = useState(false)
  const [selectedGender, setSelectedGender] = useState(GENDER_OPTIONS[0].label)

  return (
    <>
      <AppHeader title="Detalles de la reserva" onBack={onBack} />

      <section className="flex flex-1 flex-col gap-4 p-5">
        <Stepper step={0} />

        <div className="flex items-center justify-between rounded-2xl border border-[#d6d6d6] bg-[#f8f8f8] p-3">
          <div>
            <p className="text-sm font-semibold">Reservar con conductor</p>
            <p className="text-sm text-[#7a7a7a]">{'\u00BFNo tienes conductor? Reserva con conductor.'}</p>
          </div>
          <button
            type="button"
            aria-pressed={withDriver}
            aria-label="Activar reserva con conductor"
            onClick={() => setWithDriver((prev) => !prev)}
            className={`relative h-7 w-12 rounded-full border ${
              withDriver ? 'border-[#1f2a30] bg-[#1f2a30]' : 'border-[#d3d3d3] bg-[#e9e9e9]'
            }`}
          >
            <span
              className={`absolute top-0.5 block size-5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-transform duration-200 ${
                withDriver ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <Field placeholder="Nombre completo" />
        <Field placeholder={'Correo electr\u00F3nico'} />
        <Field placeholder={'Tel\u00E9fono'} />

        <div className="space-y-2">
          <p className="text-[18px] leading-tight font-semibold text-[#151515]">{'G\u00E9nero'}</p>
          <div className="grid grid-cols-3 gap-2">
            {GENDER_OPTIONS.map((gender) => {
              const isActive = selectedGender === gender.label

              return (
                <button
                  key={gender.label}
                  type="button"
                  onClick={() => setSelectedGender(gender.label)}
                  className={`flex h-10 items-center justify-center gap-1 rounded-full border !text-[12px] !font-normal ${
                    isActive
                      ? 'border-[#1f2a30] bg-[#1f2a30] text-white'
                      : 'border-[#d0d0d0] bg-white text-[#7a7a7a]'
                  }`}
                >
                  <img
                    src={gender.icon}
                    alt=""
                    aria-hidden="true"
                    className="size-4"
                    style={{
                      filter: isActive
                        ? 'brightness(0) invert(1)'
                        : 'brightness(0) saturate(0) opacity(0.52)',
                    }}
                  />
                  <span>{gender.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[18px] leading-tight font-semibold text-[#151515]">Fecha y hora de alquiler</p>
          <div className="grid grid-cols-2 gap-2">
            <LabeledDateInput
              label="Fecha de recojo"
              value={pickupDate}
              onChange={onPickupDateChange}
            />
            <LabeledDateInput
              label="Fecha de entrega"
              value={dropoffDate}
              onChange={onDropoffDateChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[18px] leading-tight font-semibold text-[#151515]">Lugar de recojo</p>
          <div className="relative">
            <img
              src={locationIcon}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 opacity-70"
            />
            <Field placeholder="San Miguel - Lima 2006" className="pl-10" />
          </div>
        </div>

        <FlowActionButton onClick={onPayNow} className="mt-auto">
          S/1400 Pagar ahora
        </FlowActionButton>
      </section>
    </>
  )
}
