import Navbar from '../layout/Navbar'

export default function BrowseProfileTab({ onLogout }) {
  return (
    <>
      <Navbar title="Perfil" />
      <section className="flex flex-1 flex-col gap-3 p-5">
        <article className="rounded-xl border border-[#d8d8d8] bg-white p-4">
          <p className="text-lg font-semibold">Carlos Gutierrez</p>
          <p className="text-sm text-[#7a7a7a]">
            Cliente premium CarsRent
          </p>
        </article>

        <button
          type="button"
          onClick={onLogout}
          className="h-12 rounded-full border border-[#c8c8c8] bg-white text-sm font-semibold"
        >
          Cerrar sesion
        </button>
      </section>
    </>
  )
}
