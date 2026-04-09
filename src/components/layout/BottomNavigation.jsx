function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor">
      <path
        d="M3 10.5L12 3L21 10.5V20A1 1 0 0 1 20 21H4A1 1 0 0 1 3 20V10.5Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 21V12H15V21" strokeWidth="1.8" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
      <path d="M20 20L16.5 16.5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor">
      <path
        d="M3 9A2 2 0 0 1 5 7H19A2 2 0 0 1 21 9V11C19.9 11 19 11.9 19 13C19 14.1 19.9 15 21 15V17A2 2 0 0 1 19 19H5A2 2 0 0 1 3 17V15C4.1 15 5 14.1 5 13C5 11.9 4.1 11 3 11V9Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 8V18" strokeWidth="1.8" strokeDasharray="2 2" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor">
      <path
        d="M15 17H9C7.3 17 6 15.7 6 14V11C6 7.7 8.2 5 11.2 4.2A1 1 0 0 1 12.8 4.2C15.8 5 18 7.7 18 11V14C18 15.7 16.7 17 15 17Z"
        strokeWidth="1.8"
      />
      <path d="M10 19C10.4 20 11.1 20.5 12 20.5C12.9 20.5 13.6 20 14 19" strokeWidth="1.8" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor">
      <circle cx="12" cy="8" r="4" strokeWidth="1.8" />
      <path
        d="M4 20C5.5 16.8 8.4 15 12 15C15.6 15 18.5 16.8 20 20"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

const navigationItems = [
  { id: 'home', label: 'Inicio', icon: HomeIcon },
  { id: 'search', label: 'Buscar', icon: SearchIcon },
  { id: 'favorite', label: 'Reservas', icon: TicketIcon },
  { id: 'alerts', label: 'Alertas', icon: BellIcon },
  { id: 'profile', label: 'Perfil', icon: UserIcon },
]

export default function BottomNavigation({ active = 'search', onChange }) {
  return (
    <div className="px-4 pb-6 pt-2">
      <nav className="grid h-[58px] grid-cols-5 rounded-[28px] bg-[#1f2a30] px-2 text-white">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange?.(item.id)}
            className={`flex items-center justify-center transition ${
              active === item.id ? 'opacity-100' : 'opacity-55 hover:opacity-85'
            }`}
            aria-label={item.label}
            title={item.label}
          >
            <item.icon />
          </button>
        ))}
      </nav>
    </div>
  )
}
