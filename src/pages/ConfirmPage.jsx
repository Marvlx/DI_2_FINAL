import AppHeader from '../components/shared/AppHeader'
import Stepper from '../components/shared/Stepper'
import FlowActionButton from '../components/shared/FlowActionButton'
import starIcon from '../assets/star.svg'
import locationIcon from '../assets/location.svg'
import mastercardIcon from '../assets/mastercard.svg'
import { formatDateTimeEs } from '../utils/dateFormatters'

function InfoRow({ label, value }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 text-[14px]">
      <p className="text-[#6f6f6f]">{`\u2022 ${label}`}</p>
      <p className="font-medium text-[#555555]">{value}</p>
    </div>
  )
}

export default function ConfirmPage({
  selectedCar,
  pickupDate,
  dropoffDate,
  onBack,
  onConfirm,
}) {
  return (
    <>
      <AppHeader title={'Confirmaci\u00F3n'} onBack={onBack} />

      <section className="flex flex-1 flex-col gap-4 p-5">
        <Stepper step={2} />

        <img src={selectedCar.imageUrl} alt={selectedCar.name} className="h-[170px] w-full object-contain" />

        <div className="space-y-1 border-b border-[#d9d9d9] pb-4">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-[16px] leading-none font-semibold text-[#151515]">{selectedCar.name}</h2>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 text-sm font-semibold text-[#1f2a30]">
                <span>{selectedCar.rating.toFixed(1)}</span>
                <img src={starIcon} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
              </div>
              <p className="text-[12px] text-[#7f7f7f]">(100+Reviews)</p>
            </div>
          </div>
          <p className="max-w-[70%] text-[14px] text-[#7b7b7b]">
            Un coche con altas prestaciones que se alquila a un precio asequible
          </p>
        </div>

        <article className="space-y-3 border-b border-[#d9d9d9] pb-4">
          <p className="text-[16px] leading-none font-semibold text-[#151515]">{'Informaci\u00F3n de la reserva'}</p>

          <InfoRow label="ID de la reserva" value="00451" />
          <InfoRow label="Nombre" value={'Carlos Guti\u00E9rrez'} />
          <InfoRow label="Fecha de recogida" value={formatDateTimeEs(pickupDate, '10:30 am')} />
          <InfoRow label="Fecha de devoluciones" value={formatDateTimeEs(dropoffDate, '05:00 pm')} />

          <div className="grid grid-cols-[1fr_auto] items-center gap-3 text-[14px]">
            <p className="text-[#6f6f6f]">{'\u2022 Ubicaci\u00F3n'}</p>
            <p className="flex items-center gap-1 font-medium text-[#555555]">
              <img src={locationIcon} alt="" aria-hidden="true" className="h-3.5 w-3.5 opacity-75" />
              <span>San Miguel - Lima</span>
            </p>
          </div>
        </article>

        <article className="space-y-3 border-b border-dashed border-[#d9d9d9] pb-4">
          <p className="text-[16px] leading-none font-semibold text-[#151515]">Pago</p>

          <div className="flex items-center justify-between text-[14px]">
            <span className="text-[#666666]">{'ID de transacci\u00F3n'}</span>
            <span className="text-[14px] font-semibold text-[#1f1f1f]">#141mtslv5854d58</span>
          </div>

          <div className="flex items-center justify-between text-[14px] text-[#111111]">
            <span className="text-[#666666]">Importe</span>
            <span className="text-[14px] font-semibold">S/1400</span>
          </div>

          <div className="flex items-center justify-between text-[14px] text-[#111111]">
            <span className="text-[#666666]">Cargo por servicio</span>
            <span className="text-[14px] font-semibold">S/15</span>
          </div>

          <div className="flex items-center justify-between pt-2 text-[#111111]">
            <span className="text-[16px] font-semibold">Importe total</span>
            <span className="text-[14px] font-semibold">S/1415</span>
          </div>

          <div className="flex items-center justify-between pt-2 text-[14px]">
            <span className="text-[#666666]">Pago con</span>
            <img src={mastercardIcon} alt="Mastercard" className="h-6 w-auto object-contain" />
          </div>
        </article>

        <FlowActionButton onClick={onConfirm} className="mt-auto">
          Confirmar
        </FlowActionButton>
      </section>
    </>
  )
}
