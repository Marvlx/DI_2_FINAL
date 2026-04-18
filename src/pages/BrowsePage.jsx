import { useState } from 'react'
import BottomNavigation from '../components/layout/BottomNavigation'
import BrowseHomeTab from '../components/browse/BrowseHomeTab'
import BrowseSearchTab from '../components/browse/BrowseSearchTab'
import BrowseAlertsTab from '../components/browse/BrowseAlertsTab'
import BrowseProfileTab from '../components/browse/BrowseProfileTab'
import FilterDrawer from '../components/filters/FilterDrawer'

export default function BrowsePage({
  activeTab,
  onTabChange,
  query,
  onQueryChange,
  carBrands,
  brandLogos,
  isLoading,
  homeCars,
  nearestCar,
  visibleCars,
  favorites,
  onToggleFavorite,
  onOpenCar,
  onReserveCar,
  activeBrand,
  onChangeBrand,
  pickupDate,
  onLogout,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      {activeTab === 'home' ? (
        <BrowseHomeTab
          query={query}
          onQueryChange={onQueryChange}
          onOpenSearchTab={() => onTabChange('search')}
          onOpenFilter={() => setIsFilterOpen(true)}
          carBrands={carBrands}
          brandLogos={brandLogos}
          isLoading={isLoading}
          homeCars={homeCars}
          nearestCar={nearestCar}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onOpenCar={onOpenCar}
          onReserveCar={onReserveCar}
        />
      ) : null}

      {activeTab === 'search' ? (
        <BrowseSearchTab
          query={query}
          onQueryChange={onQueryChange}
          onBackToHomeTab={() => onTabChange('home')}
          onOpenFilter={() => setIsFilterOpen(true)}
          activeBrand={activeBrand}
          onChangeBrand={onChangeBrand}
          carBrands={carBrands}
          brandLogos={brandLogos}
          isLoading={isLoading}
          visibleCars={visibleCars}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onOpenCar={onOpenCar}
          onReserveCar={onReserveCar}
        />
      ) : null}

      {activeTab === 'alerts' ? (
        <BrowseAlertsTab pickupDate={pickupDate} />
      ) : null}

      {activeTab === 'profile' ? (
        <BrowseProfileTab onLogout={onLogout} />
      ) : null}

      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      <BottomNavigation active={activeTab} onChange={onTabChange} />
    </>
  )
}
