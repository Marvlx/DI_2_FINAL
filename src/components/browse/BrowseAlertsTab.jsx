import Navbar from '../layout/Navbar'

export default function BrowseAlertsTab({ pickupDate }) {
  return (
    <>
      <Navbar title="Alertas" />
      <section className="flex flex-1 flex-col gap-3 p-5">
        <article className="rounded-xl border border-[#d8d8d8] bg-white p-4">
          <p className="text-sm font-semibold">Reserva confirmada</p>
          <p className="mt-1 text-sm text-[#7a7a7a]">
            Tesla Model S - recojo programado para {pickupDate}.
          </p>
        </article>
        <article className="rounded-xl border border-[#d8d8d8] bg-white p-4">
          <p className="text-sm font-semibold">Pago exitoso</p>
          <p className="mt-1 text-sm text-[#7a7a7a]">
            Se proceso el cobro de S/1415 correctamente.
          </p>
        </article>
      </section>
    </>
  )
}
