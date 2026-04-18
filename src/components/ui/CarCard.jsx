import locationIcon from '../../assets/location.svg'
import starIcon from '../../assets/star.svg'

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

function HeartFilled() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M12 20.7C4 15.6 3 10.9 3 8.5A4.5 4.5 0 0 1 7.5 4A5 5 0 0 1 12 6.4A5 5 0 0 1 16.5 4A4.5 4.5 0 0 1 21 8.5C21 10.9 20 15.6 12 20.7Z" />
    </svg>
  )
}

export default function CarCard({
  car,
  isFavorite,
  onToggleFavorite,
  onSelect,
  onReserveNow,
}) {
  return (
    <article
      className="overflow-hidden rounded-[14px] border border-[#d5d5d5] bg-[#ececec]"
      onClick={onSelect}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(event) => {
        if (!onSelect) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect()
        }
      }}
    >
      <div className={`relative h-[138px] ${car.imageClass ?? 'bg-[#e5e5e5]'}`}>
        {car.imageUrl ? (
          <img
            src={car.imageUrl}
            alt={car.name}
            className="h-full w-full object-contain p-2"
            loading="lazy"
          />
        ) : null}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onToggleFavorite?.()
          }}
          className="absolute right-2 top-2 grid size-7 place-content-center rounded-full border border-[#c4c4c4] bg-white text-[#8b8b8b] transition hover:bg-[#f7f7f7]"
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? <HeartFilled /> : <HeartOutline />}
        </button>
      </div>

      <div className="space-y-2 bg-[#ececec] p-3">
        <h3 className="line-clamp-1 text-[19px] font-semibold leading-tight text-[#111111]">
          {car.name}
        </h3>

        <div className="flex items-center gap-1 text-[13px] font-medium text-[#616161]">
          <span>{car.rating.toFixed(1)}</span>
          <img src={starIcon} alt="" className="size-3.5" aria-hidden="true" />
        </div>

        <div className="flex items-center gap-1.5 text-[13px] text-[#767676]">
          <img src={locationIcon} alt="" className="h-3.5 w-3" aria-hidden="true" />
          <p className="line-clamp-1">{car.location}</p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p className="text-[18px] font-medium text-[#111111]">
            {car.price}/Dia
          </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onReserveNow?.()
            }}
            className="h-9 rounded-full bg-[#1f2a30] px-4 !text-[12px] !font-medium text-white"
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </article>
  )
}
