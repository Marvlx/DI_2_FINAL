export default function Stepper({ step }) {
  const steps = ['Detalles de reserva', 'M\u00E9todos de pago', 'Confirmaci\u00F3n']
  const progress = step / (steps.length - 1)

  return (
    <div className="space-y-1">
      <div className="relative px-3">
        <span className="absolute top-1/2 left-3 right-3 h-[1.5px] -translate-y-1/2 bg-[#bdbdbd]" />
        <span
          className="absolute top-1/2 left-3 h-[1.5px] -translate-y-1/2 bg-[#1f2a30]"
          style={{ width: `calc((100% - 1.5rem) * ${progress})` }}
        />
        <div className="relative grid grid-cols-3">
          {steps.map((_, index) => {
            const isDone = index < step
            const isActive = index === step
            return (
              <span
                key={index}
                className={`mx-auto grid size-4 place-content-center rounded-full border ${
                  isDone || isActive
                    ? 'border-[#1f2a30] bg-[#1f2a30]'
                    : 'border-[#737373] bg-white'
                }`}
              >
                <span
                  className={`size-1.5 rounded-full ${
                    isDone || isActive ? 'bg-white' : 'bg-[#737373]'
                  }`}
                />
              </span>
            )
          })}
        </div>
      </div>
      <div className="grid grid-cols-3 text-center text-[10px] font-medium text-[#6d6d6d]">
        {steps.map((label, index) => (
          <span key={label} className={index === step ? 'font-semibold text-[#1f2a30]' : ''}>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
