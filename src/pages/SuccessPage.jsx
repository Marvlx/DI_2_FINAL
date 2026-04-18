import AppHeader from '../components/shared/AppHeader'
import FlowActionButton from '../components/shared/FlowActionButton'
import mastercardIcon from '../assets/mastercard.svg'
import confirmadoIcon from '../assets/confirmado.svg'
import { formatRentalRangeEs, formatShortDate } from '../utils/dateFormatters'

function SuccessBadge() {
  return (
    <img src={confirmadoIcon} alt="" aria-hidden="true" className="mx-auto mt-3 size-32 object-contain" />
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4V14" strokeLinecap="round" />
      <path d="M8 10.5L12 14.5L16 10.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18H19" strokeLinecap="round" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="18" cy="6" r="2.3" />
      <circle cx="6" cy="12" r="2.3" />
      <circle cx="18" cy="18" r="2.3" />
      <path d="M8.1 11L15.7 7" strokeLinecap="round" />
      <path d="M8.1 13L15.7 17" strokeLinecap="round" />
    </svg>
  )
}

function DetailRow({ label, value, isValueStrong = false }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[14px] text-[#7b7b7b]">{label}</span>
      <span className={`text-[14px] ${isValueStrong ? 'font-semibold text-[#1d1d1d]' : 'text-[#5f5f5f]'}`}>
        {value}
      </span>
    </div>
  )
}

export default function SuccessPage({
  selectedCar,
  pickupDate,
  dropoffDate,
  paymentMethod,
  onBack,
  onGoHome,
}) {
  const paymentDisplay =
    paymentMethod === 'Tarjeta' ? (
      <span className="flex items-center gap-2">
        <img src={mastercardIcon} alt="Mastercard" className="h-4 w-auto object-contain" />
        <span className="text-[14px] font-normal text-[#5f5f5f]">123 *** *** **225</span>
      </span>
    ) : (
      <span className="text-[14px] font-normal text-[#5f5f5f]">{paymentMethod}</span>
    )

  return (
    <>
      <AppHeader title="Estados de pago" onBack={onBack} />

      <section className="flex flex-1 flex-col p-5">
        <SuccessBadge />
        <h2 className="mt-4 text-center text-[18px] font-bold">Pago exitoso</h2>
        <p className="mt-3 text-center text-[14px] text-[#7a7a7a]">
          Su reserva de alquiler de coche se ha realizado correctamente
        </p>

        <article className="mt-5 rounded-xl border border-[#d8d8d8] bg-white p-4">
          <p className="text-[16px] font-semibold text-[#181818]">{'Informaci\u00F3n de la reserva'}</p>
          <div className="mt-3 h-px bg-[#e3e3e3]" />

          <div className="mt-3 space-y-2">
            <DetailRow label="Modelo de coche" value={selectedCar.name} isValueStrong />
            <DetailRow label="Fecha de alquiler" value={formatRentalRangeEs(pickupDate, dropoffDate)} isValueStrong />
            <DetailRow label="Nombre" value="Benjamin Jack" isValueStrong />
          </div>
        </article>

        <div className="mt-5 h-px bg-[#d8d8d8]" />

        <article className="mt-5 space-y-3">
          <p className="text-[16px] font-semibold text-[#181818]">{'Detalles de la transacci\u00F3n'}</p>

          <DetailRow label={'ID de la transacci\u00F3n'} value="#T000123B0J1" />
          <DetailRow label={'Fecha de la transacci\u00F3n'} value={`${formatShortDate(pickupDate)} - 10:30 am`} />

          <div className="flex items-center justify-between gap-3">
            <span className="text-[14px] text-[#7b7b7b]">{'M\u00E9todo de pago'}</span>
            {paymentDisplay}
          </div>

          <div className="mt-1 border-t border-dashed border-[#d8d8d8]" />

          <DetailRow label="Importe" value="S/1400" isValueStrong />
          <DetailRow label="Tarifa de servicio" value="S/15" isValueStrong />
          <DetailRow label="Impuesto" value="S/0" isValueStrong />

          <div className="mt-1 border-t border-dashed border-[#d8d8d8]" />

          <div className="flex items-center justify-between gap-3">
            <span className="text-[16px] font-semibold text-[#1d1d1d]">Importe total</span>
            <span className="text-[16px] font-semibold text-[#1d1d1d]">S/1415</span>
          </div>
        </article>

        <button type="button" className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full border border-[#d7d7d7] bg-[#f3f3f3] !text-[14px] !font-normal text-[#8a8a8a]">
          <DownloadIcon />
          <span>Descargar recibo</span>
        </button>

        <button type="button" className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full border border-[#d7d7d7] bg-white !text-[14px] !font-normal text-[#8a8a8a]">
          <ShareIcon />
          <span>Compartir recibo</span>
        </button>

        <FlowActionButton onClick={onGoHome} className="mt-5">
          Volver a la pagina principal
        </FlowActionButton>
      </section>
    </>
  )
}
