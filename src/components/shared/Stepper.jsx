export default function Stepper({ step }) {
  const steps = ['Detalles de reserva', 'Metodos de pago', 'Confirmacion']

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 items-center gap-3 px-2">
        {steps.map((_, index) => {
          const isDone = index < step
          const isActive = index === step
          return (
            <div key={index} className="flex items-center gap-2">
              <span
                className={`size-4 rounded-full border ${
                  isDone || isActive
                    ? 'border-[#1f2a30] bg-[#1f2a30]'
                    : 'border-[#7b7b7b] bg-white'
                }`}
              />
              {index < 2 ? <span className="h-[1.5px] flex-1 bg-[#bcbcbc]" /> : null}
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-3 text-center text-[11px] font-medium text-[#6d6d6d]">
        {steps.map((label, index) => (
          <span key={label} className={index === step ? 'text-[#1f2a30]' : ''}>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
