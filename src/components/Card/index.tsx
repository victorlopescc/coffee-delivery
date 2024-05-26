import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import {
  CardContainer,
  CardControl,
  CardDescription,
  CardOrder,
  CardPrice,
  CardTitle,
  CoffeeImage,
  CoffeeTags,
} from './styles'
import { QuantityInput } from '../QuantityInput'
import { CheckFat, ShoppingCart } from '@phosphor-icons/react'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()
  const { addItem } = useCart()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CardContainer>
      <CoffeeImage src={coffee.image} alt={coffee.title} />

      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>

      <CardTitle>{coffee.title}</CardTitle>

      <CardDescription>{coffee.description}</CardDescription>

      <CardControl>
        <CardPrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </CardPrice>

        <CardOrder>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            )}
          </button>
        </CardOrder>
      </CardControl>
    </CardContainer>
  )
}
