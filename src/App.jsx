import { useEffect, useMemo, useState } from 'react'
import teslaLogo from './assets/tesla_logo.svg'
import lamborghiniLogo from './assets/lamborghini_logo.svg'
import bmwLogo from './assets/bmw_logo.svg'
import ferrariLogo from './assets/ferrari_logo.svg'
import { carBrands, cars } from './data/cars'
import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecoverPage from './pages/RecoverPage'
import BrowsePage from './pages/BrowsePage'
import DetailPage from './pages/DetailPage'
import ReservationPage from './pages/ReservationPage'
import PaymentPage from './pages/PaymentPage'
import ConfirmPage from './pages/ConfirmPage'
import SuccessPage from './pages/SuccessPage'
import HistoryPage from './pages/HistoryPage'

const brandLogos = {
  Tesla: teslaLogo,
  Lamborghini: lamborghiniLogo,
  BMW: bmwLogo,
  Ferrari: ferrariLogo,
}

function App() {
  const [screen, setScreen] = useState('welcome')
  const [activeTab, setActiveTab] = useState('home')
  const [selectedCar, setSelectedCar] = useState(cars[0])
  const [query, setQuery] = useState('')
  const [activeBrand, setActiveBrand] = useState('Todos')
  const [visibleCars, setVisibleCars] = useState(cars)
  const [isLoading, setIsLoading] = useState(false)
  const [pickupDate, setPickupDate] = useState('2026-03-18')
  const [dropoffDate, setDropoffDate] = useState('2026-03-21')
  const [paymentMethod, setPaymentMethod] = useState('Tarjeta')
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('carsrent:favorites')
    if (!saved) return new Set()

    try {
      return new Set(JSON.parse(saved))
    } catch {
      return new Set()
    }
  })

  useEffect(() => {
    localStorage.setItem('carsrent:favorites', JSON.stringify(Array.from(favorites)))
  }, [favorites])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const normalized = query.trim().toLowerCase()
      const filtered = cars.filter((car) => {
        const matchesBrand = activeBrand === 'Todos' || car.brand === activeBrand
        const matchesQuery =
          normalized.length === 0 ||
          car.name.toLowerCase().includes(normalized) ||
          car.location.toLowerCase().includes(normalized)

        return matchesBrand && matchesQuery
      })

      setVisibleCars(filtered)
      setIsLoading(false)
    }, 220)

    return () => clearTimeout(timeoutId)
  }, [query, activeBrand])

  const homeCars = useMemo(() => visibleCars.slice(0, 4), [visibleCars])
  const nearestCar = useMemo(
    () => cars.find((car) => car.id === 'bmw-m8') ?? cars[0],
    [],
  )

  const toggleFavorite = (carId) => {
    setFavorites((previous) => {
      const next = new Set(previous)
      if (next.has(carId)) next.delete(carId)
      else next.add(carId)
      return next
    })
  }

  const openCar = (car) => {
    setSelectedCar(car)
    setScreen('detail')
  }

  const startBrowsing = () => {
    setScreen('browse')
    setActiveTab('home')
  }

  const onTabChange = (tab) => {
    setActiveTab(tab)

    if (tab === 'favorite') {
      setScreen('history')
      return
    }

    setScreen('browse')
  }

  const onQueryChange = (event) => {
    setIsLoading(true)
    setQuery(event.target.value)
  }

  const onChangeBrand = (brand) => {
    if (brand === activeBrand) return
    setIsLoading(true)
    setActiveBrand(brand)
  }

  return (
    <div className="min-h-screen bg-[#ececec]">
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-[#f4f4f4]">
        {screen === 'welcome' ? <WelcomePage onStart={() => setScreen('login')} /> : null}

        {screen === 'login' ? (
          <LoginPage
            onForgotPassword={() => setScreen('recover')}
            onLogin={startBrowsing}
            onCreateAccount={() => setScreen('register')}
          />
        ) : null}

        {screen === 'register' ? (
          <RegisterPage
            onRegister={startBrowsing}
            onLogin={() => setScreen('login')}
          />
        ) : null}

        {screen === 'recover' ? (
          <RecoverPage
            onContinue={() => setScreen('login')}
            onBackToLogin={() => setScreen('login')}
            onCreateNewAccount={() => setScreen('register')}
          />
        ) : null}

        {screen === 'browse' ? (
          <BrowsePage
            activeTab={activeTab}
            onTabChange={onTabChange}
            query={query}
            onQueryChange={onQueryChange}
            carBrands={carBrands}
            brandLogos={brandLogos}
            isLoading={isLoading}
            homeCars={homeCars}
            nearestCar={nearestCar}
            visibleCars={visibleCars}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpenCar={openCar}
            activeBrand={activeBrand}
            onChangeBrand={onChangeBrand}
            pickupDate={pickupDate}
            onLogout={() => setScreen('login')}
          />
        ) : null}

        {screen === 'detail' ? (
          <DetailPage
            selectedCar={selectedCar}
            onBack={() => {
              setScreen('browse')
              setActiveTab('search')
            }}
            onReserveNow={() => setScreen('reservation')}
          />
        ) : null}

        {screen === 'reservation' ? (
          <ReservationPage
            pickupDate={pickupDate}
            dropoffDate={dropoffDate}
            onPickupDateChange={setPickupDate}
            onDropoffDateChange={setDropoffDate}
            onBack={() => setScreen('detail')}
            onPayNow={() => setScreen('payment')}
          />
        ) : null}

        {screen === 'payment' ? (
          <PaymentPage
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
            onBack={() => setScreen('reservation')}
            onContinue={() => setScreen('confirm')}
          />
        ) : null}

        {screen === 'confirm' ? (
          <ConfirmPage
            selectedCar={selectedCar}
            pickupDate={pickupDate}
            dropoffDate={dropoffDate}
            onBack={() => setScreen('payment')}
            onConfirm={() => setScreen('success')}
          />
        ) : null}

        {screen === 'success' ? (
          <SuccessPage
            selectedCar={selectedCar}
            pickupDate={pickupDate}
            paymentMethod={paymentMethod}
            onBack={() => setScreen('confirm')}
            onGoHome={() => setScreen('history')}
          />
        ) : null}

        {screen === 'history' ? (
          <HistoryPage
            selectedCar={selectedCar}
            onBack={startBrowsing}
            onGoHome={startBrowsing}
          />
        ) : null}
      </main>
    </div>
  )
}

export default App
