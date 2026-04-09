import BottomNavigation from '../components/layout/BottomNavigation'
import BrowseHomeTab from '../components/browse/BrowseHomeTab'
import BrowseSearchTab from '../components/browse/BrowseSearchTab'
import BrowseAlertsTab from '../components/browse/BrowseAlertsTab'
import BrowseProfileTab from '../components/browse/BrowseProfileTab'

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
  activeBrand,
  onChangeBrand,
  pickupDate,
  onLogout,
}) {
  return (
    <>
      {activeTab === 'home' ? (
        <BrowseHomeTab
          query={query}
          onQueryChange={onQueryChange}
          onOpenSearchTab={() => onTabChange('search')}
          carBrands={carBrands}
          brandLogos={brandLogos}
          isLoading={isLoading}
          homeCars={homeCars}
          nearestCar={nearestCar}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onOpenCar={onOpenCar}
        />
      ) : null}

      {activeTab === 'search' ? (
        <BrowseSearchTab
          query={query}
          onQueryChange={onQueryChange}
          onBackToHomeTab={() => onTabChange('home')}
          activeBrand={activeBrand}
          onChangeBrand={onChangeBrand}
          carBrands={carBrands}
          brandLogos={brandLogos}
          isLoading={isLoading}
          visibleCars={visibleCars}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onOpenCar={onOpenCar}
        />
      ) : null}

      {activeTab === 'alerts' ? (
        <BrowseAlertsTab pickupDate={pickupDate} />
      ) : null}

      {activeTab === 'profile' ? (
        <BrowseProfileTab onLogout={onLogout} />
      ) : null}

      <BottomNavigation active={activeTab} onChange={onTabChange} />
    </>
  )
}
