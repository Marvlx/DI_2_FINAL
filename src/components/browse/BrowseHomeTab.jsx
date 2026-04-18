import Input from '../ui/Input'
import CarCard from '../ui/CarCard'
import CarLogo from '../shared/CarLogo'
import BrandMark from '../shared/BrandMark'
import FilterButton from '../shared/FilterButton'

export default function BrowseHomeTab({
  query,
  onQueryChange,
  onOpenSearchTab,
  onOpenFilter,
  carBrands,
  brandLogos,
  isLoading,
  homeCars,
  nearestCar,
  favorites,
  onToggleFavorite,
  onOpenCar,
  onReserveCar,
}) {
  return (
    <section className="flex flex-1 flex-col p-5 lg:p-7">
      <div className="mt-4">
        <CarLogo />
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex-1">
          <Input
            value={query}
            onChange={onQueryChange}
            placeholder="Busca el coche de tus suenos"
          />
        </div>
        <FilterButton onClick={onOpenFilter} />
      </div>

      <h3 className="mt-6 text-[18px] font-bold text-[#1d1d1d]">Marcas</h3>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {carBrands.slice(1).map((brand) => (
          <BrandMark key={brand} label={brand} logoSrc={brandLogos[brand]} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-[18px] font-bold">Mejores coches</h3>
        <button type="button" onClick={onOpenSearchTab} className="!text-[14px] !font-normal text-[#6f6f6f]">
          Ver todos
        </button>
      </div>

      {isLoading ? (
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="h-[230px] animate-pulse rounded-2xl bg-[#e3e3e3]" />
          ))}
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {homeCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={favorites.has(car.id)}
              onToggleFavorite={() => onToggleFavorite(car.id)}
              onSelect={() => onOpenCar(car)}
              onReserveNow={() => onReserveCar(car)}
            />
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-[18px] font-bold text-[#1d1d1d]">Opcion mas cercana</h3>
        <button type="button" className="!text-[14px] !font-normal text-[#6f6f6f]">
          ver todo
        </button>
      </div>

      <button
        type="button"
        onClick={() => onOpenCar(nearestCar)}
        className="mt-3 overflow-hidden rounded-2xl border border-[#d7d7d7] bg-[#dfdfdf]"
      >
        <div className="h-[98px] w-full bg-[#dfdfdf]">
          <img
            src={nearestCar.imageUrl}
            alt={nearestCar.name}
            className="h-full w-full object-contain px-3"
            loading="lazy"
          />
        </div>
      </button>
    </section>
  )
}
