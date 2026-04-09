import Navbar from '../components/layout/Navbar'
import BackIcon from '../components/shared/BackIcon'
import DotMenu from '../components/shared/DotMenu'

export default function HistoryPage({ selectedCar, onBack, onGoHome }) {
  return (
    <>
      <Navbar
        title="Historial de alquiler"
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

      <section className="flex flex-1 flex-col p-5">
        <h2 className="text-2xl font-semibold">Tus vehiculos alquilados</h2>

        <article className="mt-4 flex items-center gap-3 rounded-xl border border-[#d9d9d9] bg-white p-3">
          <img src={selectedCar.imageUrl} alt={selectedCar.name} className="h-16 w-28 rounded-lg object-cover" />
          <div>
            <p className="text-xl font-semibold">{selectedCar.name}</p>
            <p className="text-xs text-[#7a7a7a]">18/03/2026 - 3 dias/6h</p>
            <p className="mt-1 text-sm font-semibold">S/1415</p>
          </div>
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
