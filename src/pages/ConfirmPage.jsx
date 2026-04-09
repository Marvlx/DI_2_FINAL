import Navbar from '../components/layout/Navbar'
import BackIcon from '../components/shared/BackIcon'
import DotMenu from '../components/shared/DotMenu'
import Stepper from '../components/shared/Stepper'

export default function ConfirmPage({
  selectedCar,
  pickupDate,
  dropoffDate,
  onBack,
  onConfirm,
}) {
  return (
    <>
      <Navbar
        title="Confirmacion"
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
        <Stepper step={2} />

        <div className="overflow-hidden rounded-xl border border-[#d9d9d9] bg-white">
          <img src={selectedCar.imageUrl} alt={selectedCar.name} className="h-[160px] w-full object-cover" />
        </div>

        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-2xl font-semibold">{selectedCar.name}</h2>
            <p className="text-sm text-[#7a7a7a]">Un coche con altas prestaciones</p>
          </div>
          <p className="text-sm font-semibold">{selectedCar.rating.toFixed(1)} ★</p>
        </div>

        <article className="rounded-xl border border-[#d8d8d8] p-4 text-sm">
          <p className="font-semibold">Informacion de la reserva</p>
          <p className="mt-2 text-[#6f6f6f]">Fecha de recogida: {pickupDate}</p>
          <p className="mt-1 text-[#6f6f6f]">Fecha de devolucion: {dropoffDate}</p>
          <p className="mt-1 text-[#6f6f6f]">Ubicacion: San Miguel - Lima</p>
        </article>

        <article className="rounded-xl border border-[#d8d8d8] p-4 text-sm">
          <p className="font-semibold">Pago</p>
          <p className="mt-2 text-[#6f6f6f]">Importe: S/1400</p>
          <p className="mt-1 text-[#6f6f6f]">Cargo por servicio: S/15</p>
          <p className="mt-2 font-semibold">Importe total: S/1415</p>
        </article>

        <button
          type="button"
          onClick={onConfirm}
          className="mt-auto h-14 rounded-full bg-[#1f2a30] text-xl font-semibold text-white"
        >
          Confirmar
        </button>
      </section>
    </>
  )
}
