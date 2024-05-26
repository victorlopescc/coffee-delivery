import { useTheme } from 'styled-components'
import { CoffeeList, Hero, HeroContainer, HeroHeader, HeroInfo } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <Hero>
        <HeroContainer>
          <div>
            <HeroHeader>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </HeroHeader>

            <HeroInfo>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['yellow-dark'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors['base-text'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.background}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </HeroInfo>
          </div>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContainer>

        <img
          src="/images/hero-bg.svg"
          id="hero-bg"
          alt="Background"
          style={{ filter: 'blur(50px)' }}
        />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <p key={coffee.id}>{coffee.title}</p>
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
