import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './contexts/CartProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </ThemeProvider>
  )
}
