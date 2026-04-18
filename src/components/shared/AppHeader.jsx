import Navbar from '../layout/Navbar'
import BackIcon from './BackIcon'
import DotMenu from './DotMenu'
import IconCircleButton from './IconCircleButton'

export default function AppHeader({ title, onBack, leftContent, rightContent }) {
  const resolvedLeftContent =
    leftContent ?? (onBack ? <IconCircleButton onClick={onBack}><BackIcon /></IconCircleButton> : null)
  const resolvedRightContent =
    rightContent ?? (
      <IconCircleButton>
        <DotMenu />
      </IconCircleButton>
    )

  return (
    <Navbar
      title={title}
      leftContent={resolvedLeftContent}
      rightContent={resolvedRightContent}
    />
  )
}
