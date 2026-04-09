import Navbar from '../components/layout/Navbar'
import BackIcon from '../components/shared/BackIcon'
import DotMenu from '../components/shared/DotMenu'

export default function SuccessPage({
  selectedCar,
  pickupDate,
  paymentMethod,
  onBack,
  onGoHome,
}) {
  return (
    <>
      <Navbar
        title="Estados de pago"
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

      <section className="flex flex-1 flex-col p-5 text-center">
        <div className="mx-auto mt-8 grid size-24 place-content-center rounded-full bg-[#2ecc71] text-5xl text-white">
          ✓
        </div>
        <h2 className="mt-6 text-3xl font-semibold">Pago exitoso</h2>
        <p className="mt-2 text-sm text-[#7a7a7a]">Su reserva de alquiler se ha realizado correctamente</p>

        <article className="mt-6 rounded-xl border border-[#d8d8d8] bg-white p-4 text-left text-sm">
          <p className="font-semibold">Informacion de la reserva</p>
          <p className="mt-2 text-[#6f6f6f]">Modelo: {selectedCar.name}</p>
          <p className="mt-1 text-[#6f6f6f]">Fecha de alquiler: {pickupDate}</p>
          <p className="mt-1 text-[#6f6f6f]">Metodo de pago: {paymentMethod}</p>
        </article>

        <button
          type="button"
          onClick={onGoHome}
          className="mt-auto h-14 rounded-full bg-[#1f2a30] text-2xl font-semibold text-white"
        >
          Volver a la pagina principal
        </button>
      </section>
    </>
  )
}
