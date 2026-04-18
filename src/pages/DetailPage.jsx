import AppHeader from '../components/shared/AppHeader'
import starIcon from '../assets/star.svg'
import iconVerificado from '../assets/icon_verificado.svg'
import iconCapacidad from '../assets/icon_capacidad.svg'
import iconMotor from '../assets/icon_motor.svg'
import iconVelocidad from '../assets/icon_velocidad.svg'
import iconPiloto from '../assets/icon_piloto.svg'
import iconCarga from '../assets/icon_carga.svg'
import iconAparcamiento from '../assets/icon_aparcamiento.svg'
import callIcon from '../assets/call_icon.svg'
import messageIcon from '../assets/message_icon.svg'
import profilePicVale from '../assets/profile_pic_vale.png'

function HeartOutline() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor">
      <path
        d="M12 20.7C4 15.6 3 10.9 3 8.5A4.5 4.5 0 0 1 7.5 4A5 5 0 0 1 12 6.4A5 5 0 0 1 16.5 4A4.5 4.5 0 0 1 21 8.5C21 10.9 20 15.6 12 20.7Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FeatureCard({ icon, label, value }) {
  return (
    <article className="rounded-xl bg-[#e8e8e8] p-2.5">
      <div className="grid size-7 place-content-center rounded-full border border-[#d9d9d9] bg-white">
        <img src={icon} alt="" className="size-3.5 object-contain" aria-hidden="true" />
      </div>
      <p className="mt-3 text-[11px] text-[#7a7a7a]">{label}</p>
      <p className="mt-1 text-[13px] font-semibold leading-tight text-[#1d1d1d]">{value}</p>
    </article>
  )
}

export default function DetailPage({ selectedCar, onBack, onReserveNow }) {
  const featureItems = [
    {
      id: 'capacidad',
      icon: iconCapacidad,
      label: 'Capacidad',
      value: `${selectedCar.seats} asientos`,
    },
    {
      id: 'motor',
      icon: iconMotor,
      label: 'Motor apagado',
      value: `${selectedCar.horsepower} HP`,
    },
    {
      id: 'velocidad',
      icon: iconVelocidad,
      label: 'Velocidad maxima',
      value: `${selectedCar.topSpeed}km/h`,
    },
    {
      id: 'piloto',
      icon: iconPiloto,
      label: 'Avance',
      value: 'Piloto automatico',
    },
    {
      id: 'carga',
      icon: iconCarga,
      label: 'Carga unica',
      value: `${selectedCar.rangeMiles} millas`,
    },
    {
      id: 'aparcamiento',
      icon: iconAparcamiento,
      label: 'Avance',
      value: 'Aparcamiento automatico',
    },
  ]

  return (
    <>
      <AppHeader title="Detalles del auto" onBack={onBack} />

      <section className="flex flex-1 flex-col overflow-y-auto p-4 pb-5">
        <div className="relative rounded-2xl bg-[#ececec] pb-3 pt-2">
          <img
            src={selectedCar.imageUrl}
            alt={selectedCar.name}
            className="mx-auto h-[180px] w-full object-contain px-2"
          />

          <button
            type="button"
            className="absolute right-2 top-2 grid size-7 place-content-center rounded-full border border-[#c4c4c4] bg-white text-[#8b8b8b]"
            aria-label="Agregar a favoritos"
          >
            <HeartOutline />
          </button>

          <div className="mt-1 flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-[#666666]" />
            <span className="size-1.5 rounded-full bg-[#cfcfcf]" />
            <span className="size-1.5 rounded-full bg-[#cfcfcf]" />
          </div>
        </div>

        <div className="mt-3 border-b border-[#dddddd] pb-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-[24px] font-semibold leading-tight text-[#171717]">
                {selectedCar.name}
              </h2>
              <p className="mt-2 max-w-[260px] text-[13px] leading-[1.35] text-[#7b7b7b]">
                Un coche con altas especificaciones que se alquilan a un precio asequible.
              </p>
            </div>

            <div className="pt-1 text-right">
              <p className="flex items-center justify-end gap-1 text-[14px] font-semibold text-[#1d1d1d]">
                <span>{selectedCar.rating.toFixed(1)}</span>
                <img src={starIcon} alt="" className="size-3.5" aria-hidden="true" />
              </p>
              <p className="mt-0.5 text-[10px] text-[#8b8b8b]">(100+Resenas)</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-[#dddddd] py-4">
          <div className="flex items-center gap-3">
            <img
              src={profilePicVale}
              alt="Vale Castillo"
              className="size-10 rounded-full object-cover"
            />
            <p className="flex items-center gap-1.5 text-[13px] font-semibold text-[#1b1b1b]">
              <span>Vale Castillo</span>
              <img src={iconVerificado} alt="" className="size-3.5" aria-hidden="true" />
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid size-8 place-content-center rounded-full border border-[#d2d2d2] bg-white"
              aria-label="Llamar"
            >
              <img src={callIcon} alt="" className="size-4 object-contain" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="grid size-8 place-content-center rounded-full border border-[#d2d2d2] bg-white"
              aria-label="Mensaje"
            >
              <img src={messageIcon} alt="" className="size-4 object-contain" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-[18px] font-semibold text-[#1d1d1d]">Caracteristicas del coche</h3>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {featureItems.map((item) => (
              <FeatureCard
                key={item.id}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onReserveNow}
          className="mt-6 h-14 w-full rounded-full bg-[#1f2a30] text-[18px] font-bold text-white"
        >
          Reserva ahora
        </button>
      </section>
    </>
  )
}
