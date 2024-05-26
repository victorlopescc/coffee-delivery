import { Link } from 'react-router-dom'
import { HeaderAside, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery Logo" />
      </Link>

      <HeaderAside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </div>

        <Link to={`cart`}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </HeaderAside>
    </HeaderContainer>
  )
}
