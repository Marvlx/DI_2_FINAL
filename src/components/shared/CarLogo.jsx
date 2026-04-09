import smallLogo from '../../assets/small_logo.svg'

export default function CarLogo() {
  return (
    <div className="inline-flex items-center gap-2 text-3xl font-semibold text-[#111111]">
      <img src={smallLogo} alt="CarsRent logo" className="size-9 rounded-full object-contain" />
      <span className="text-3xl leading-none">CarsRent</span>
    </div>
  )
}
