import { useState } from 'react'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor">
      <rect x="4" y="5" width="16" height="15" rx="2.5" strokeWidth="1.6" />
      <path d="M8 3V7M16 3V7M4 10H20" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor">
      <path
        d="M12 21C15.8 17.3 19 14.4 19 10.4A7 7 0 1 0 5 10.4C5 14.4 8.2 17.3 12 21Z"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.4" strokeWidth="1.6" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor">
      <path d="M6 6L18 18M18 6L6 18" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function Pill({ active, children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-8 rounded-full border px-4 !text-[12px] !font-medium transition ${
        active
          ? 'border-[#1f2a30] bg-[#1f2a30] text-white'
          : 'border-[#d1d1d1] bg-[#efefef] text-[#787878]'
      } ${className}`}
    >
      {children}
    </button>
  )
}

const defaultState = {
  carType: 'Todos los autos',
  rentalTime: 'Dia',
  color: 'Azul',
  seats: '4',
  fuel: 'Electrico',
}

export default function FilterDrawer({ isOpen, onClose }) {
  const [carType, setCarType] = useState(defaultState.carType)
  const [rentalTime, setRentalTime] = useState(defaultState.rentalTime)
  const [color, setColor] = useState(defaultState.color)
  const [seats, setSeats] = useState(defaultState.seats)
  const [fuel, setFuel] = useState(defaultState.fuel)

  if (!isOpen) return null

  const onReset = () => {
    setCarType(defaultState.carType)
    setRentalTime(defaultState.rentalTime)
    setColor(defaultState.color)
    setSeats(defaultState.seats)
    setFuel(defaultState.fuel)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/30" onClick={onClose}>
      <section
        className="absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-2xl border border-[#dadada] bg-[#efefef]"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="relative border-b border-[#d2d2d2] px-4 py-4">
          <button
            type="button"
            onClick={onClose}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4e4e4e]"
            aria-label="Cerrar filtros"
          >
            <CloseIcon />
          </button>
          <h2 className="text-center text-[18px] font-bold text-[#1b1b1b]">Filtros</h2>
        </header>

        <div className="space-y-4 p-4 text-[#1d1d1d]">
          <section className="border-b border-[#d4d4d4] pb-4">
            <h3 className="text-[16px] font-semibold">Tipo de auto</h3>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {['Todos los autos', 'Autos regulares', 'Autos de lujo'].map((item) => (
                <Pill
                  key={item}
                  active={carType === item}
                  onClick={() => setCarType(item)}
                  className="w-full px-2 leading-tight"
                >
                  {item}
                </Pill>
              ))}
            </div>
          </section>

          <section className="border-b border-[#d4d4d4] pb-4">
            <h3 className="text-[16px] font-semibold">Rango de precio</h3>
            <div className="mt-5 px-1">
              <div className="relative h-8">
                <span className="absolute left-2 right-2 top-1/2 h-[2px] -translate-y-1/2 bg-[#8a8a8a]" />
                <span className="absolute left-0 top-1/2 size-7 -translate-y-1/2 rounded-full border border-[#cdcdcd] bg-[#efefef] shadow-sm" />
                <span className="absolute right-0 top-1/2 size-7 -translate-y-1/2 rounded-full border border-[#cdcdcd] bg-[#efefef] shadow-sm" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-[#9a9a9a]">
                <span>Minimo</span>
                <span>Maximo</span>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="rounded-full border border-[#d1d1d1] bg-[#f4f4f4] px-4 py-1 text-[12px] text-[#5d5d5d]">
                  s/50
                </span>
                <span className="rounded-full border border-[#d1d1d1] bg-[#f4f4f4] px-4 py-1 text-[12px] text-[#5d5d5d]">
                  s/300+
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-3 border-b border-[#d4d4d4] pb-4">
            <h3 className="text-[16px] font-semibold">Tiempo de alquiler</h3>
            <div className="grid grid-cols-4 gap-2">
              {['Hora', 'Dia', 'Semana', 'Mes'].map((item) => (
                <Pill
                  key={item}
                  active={rentalTime === item}
                  onClick={() => setRentalTime(item)}
                  className="w-full px-0"
                >
                  {item}
                </Pill>
              ))}
            </div>

            <div className="flex items-center justify-between text-[12px]">
              <span className="font-medium">Fecha de recojo y entrega</span>
              <button type="button" className="flex items-center gap-1 !text-[12px] !font-medium text-[#8a8a8a]">
                <CalendarIcon />
                <span>30/Mar/2026</span>
                <span>⌄</span>
              </button>
            </div>

            <div>
              <p className="text-[12px] font-medium">Lugar de recojo</p>
              <div className="mt-2 flex h-11 items-center gap-2 rounded-lg border border-[#d2d2d2] bg-[#ececec] px-3 text-[12px] text-[#8a8a8a]">
                <PinIcon />
                <span>San Miguel - Lima 2006</span>
              </div>
            </div>
          </section>

          <section className="space-y-3 border-b border-[#d4d4d4] pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[16px] font-semibold">Colores disponibles</h3>
              <button type="button" className="!text-[12px] !font-medium text-[#7c7c7c]">
                Ver todos
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[
                { name: 'Blanco', code: '#efefef' },
                { name: 'Gris', code: '#666666' },
                { name: 'Azul', code: '#1646dc' },
                { name: 'Negro', code: '#000000' },
              ].map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setColor(item.name)}
                  className="flex w-full flex-col items-center gap-1 !text-[12px] !font-medium text-[#7f7f7f]"
                >
                  <span
                    className={`size-5 rounded-full border ${
                      color === item.name ? 'border-[#1f2a30]' : 'border-[#cfcfcf]'
                    }`}
                    style={{ backgroundColor: item.code }}
                  />
                  {item.name}
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-3 border-b border-[#d4d4d4] pb-4">
            <h3 className="text-[16px] font-semibold">{'N\u00FAmero de asientos'}</h3>
            <div className="grid grid-cols-4 gap-2">
              {['2', '4', '6', '8'].map((item) => (
                <Pill
                  key={item}
                  active={seats === item}
                  onClick={() => setSeats(item)}
                  className="w-full px-0"
                >
                  {item}
                </Pill>
              ))}
            </div>
          </section>

          <section className="space-y-3 pb-1">
            <h3 className="text-[16px] font-semibold">Tipo de combustibles</h3>
            <div className="grid grid-cols-4 gap-2">
              {['Electrico', 'Gasolina', 'Diesel', 'Hibrido'].map((item) => (
                <Pill
                  key={item}
                  active={fuel === item}
                  onClick={() => setFuel(item)}
                  className="w-full px-0"
                >
                  {item}
                </Pill>
              ))}
            </div>
          </section>
        </div>

        <footer className="flex items-center justify-between border-t border-[#d4d4d4] px-4 py-4">
          <button type="button" onClick={onReset} className="!text-[12px] !font-medium text-[#2b2b2b]">
            Borrar filtros
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-full bg-[#1f2a30] px-6 !text-[16px] !font-semibold text-white"
          >
            Ver 100+ autos
          </button>
        </footer>
      </section>
    </div>
  )
}
