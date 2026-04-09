import Navbar from '../components/layout/Navbar'
import BackIcon from '../components/shared/BackIcon'
import DotMenu from '../components/shared/DotMenu'
import Stepper from '../components/shared/Stepper'
import Field from '../components/shared/Field'

export default function ReservationPage({
  pickupDate,
  dropoffDate,
  onPickupDateChange,
  onDropoffDateChange,
  onBack,
  onPayNow,
}) {
  return (
    <>
      <Navbar
        title="Detalles de la reserva"
        leftContent={
          <button
            type="button"
            onClick={onBack}
            className="grid size-10 place-content-center rounded-full border border-[#d0d0d0] bg-white"
          >
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
        <Stepper step={0} />

        <div className="rounded-2xl border border-[#d6d6d6] bg-[#f8f8f8] p-3">
          <p className="text-sm font-semibold">Reservar con conductor</p>
          <p className="text-sm text-[#7a7a7a]">No tienes conductor? Reserva con conductor.</p>
        </div>

        <Field placeholder="Nombre completo" />
        <Field placeholder="Correo electronico" />
        <Field placeholder="Telefono" />

        <div className="grid grid-cols-3 gap-2">
          {['Masculino', 'Femenino', 'Otros'].map((gender, index) => (
            <button
              key={gender}
              type="button"
              className={`h-10 rounded-full border text-sm ${
                index === 0
                  ? 'border-[#1f2a30] bg-[#1f2a30] text-white'
                  : 'border-[#d0d0d0] text-[#7a7a7a]'
              }`}
            >
              {gender}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="date"
            value={pickupDate}
            onChange={(event) => onPickupDateChange(event.target.value)}
            className="h-12 rounded-full border border-[#d0d0d0] bg-white px-4 text-sm"
          />
          <input
            type="date"
            value={dropoffDate}
            onChange={(event) => onDropoffDateChange(event.target.value)}
            className="h-12 rounded-full border border-[#d0d0d0] bg-white px-4 text-sm"
          />
        </div>

        <Field placeholder="San Miguel - Lima 2006" />

        <button
          type="button"
          onClick={onPayNow}
          className="mt-auto h-14 rounded-full bg-[#1f2a30] text-xl font-semibold text-white"
        >
          S/1400 Pagar ahora
        </button>
      </section>
    </>
  )
}
