import bigLogo from '../assets/big_logo.svg'

export default function WelcomePage({ onStart }) {
  return (
    <section className="relative flex h-full min-h-screen flex-col justify-between overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.62)),url('https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1100&q=80')] bg-cover bg-center p-5 text-white">
      <div>
        <img
          src={bigLogo}
          alt="CarsRent logo"
          className="size-16 rounded-full object-contain"
        />
        <h1 className="mt-8 text-[50px] font-bold leading-[1.02]">
          Bienvenidos a
          <br />
          RentCars
        </h1>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="mb-6 h-14 rounded-full bg-[#1f2a30] text-[18px] font-bold"
      >
        Inicio
      </button>
    </section>
  )
}
