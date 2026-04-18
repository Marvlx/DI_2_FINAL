import AppHeader from '../shared/AppHeader'
import Input from '../ui/Input'
import CarCard from '../ui/CarCard'
import CategoryPill from '../ui/CategoryPill'
import FilterButton from '../shared/FilterButton'

export default function BrowseSearchTab({
  query,
  onQueryChange,
  onBackToHomeTab,
  onOpenFilter,
  activeBrand,
  onChangeBrand,
  carBrands,
  brandLogos,
  isLoading,
  visibleCars,
  favorites,
  onToggleFavorite,
  onOpenCar,
  onReserveCar,
}) {
  return (
    <>
      <AppHeader title="Buscar" onBack={onBackToHomeTab} />

      <section className="flex-1 p-5 lg:p-7">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Input
              value={query}
              onChange={onQueryChange}
              placeholder="Busca el coche de tus suenos"
            />
          </div>
          <FilterButton onClick={onOpenFilter} />
        </div>

        <div className="mt-4">
          <div className="scrollbar-none flex min-h-12 gap-2 overflow-x-auto pb-3 pr-2 pt-1">
            {carBrands.map((brand) => (
              <CategoryPill
                key={brand}
                label={brand}
                iconSrc={brandLogos[brand]}
                active={brand === activeBrand}
                onClick={() => onChangeBrand(brand)}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-[18px] font-bold">Recomendado para ti</h2>
          <span className="text-sm text-[#6f6f6f]">ver todos</span>
        </div>

        {isLoading ? (
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-[248px] animate-pulse rounded-2xl bg-[#e3e3e3]" />
            ))}
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {visibleCars.map((car) => (
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
      </section>
    </>
  )
}
