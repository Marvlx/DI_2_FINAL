import btnFiltro from '../../assets/btn_filtro.svg'
import IconCircleButton from './IconCircleButton'

export default function FilterButton({ onClick }) {
  return (
    <IconCircleButton size="lg" onClick={onClick}>
      <img
        src={btnFiltro}
        alt="Filtrar"
        className="size-5 object-contain"
      />
    </IconCircleButton>
  )
}
