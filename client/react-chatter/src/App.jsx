import './styles/index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import 'normalize.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Signup from './routes/Signup'
import Room from './routes/Room'

const Layout = ({ children }) => {
  return (
    <div className='h-screen relative'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Signup />
      </Layout>
    )
  },
  {
    path: '/chat',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/room',
    element: (
      <Layout>
        <Room />
      </Layout>
    )
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
