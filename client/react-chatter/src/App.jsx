import './styles/index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import 'normalize.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Signup from './routes/Signup'
import Room from './routes/Room'
import ErrorPage from './routes/ErrorPage'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen w-screen flex flex-col justify-around'>
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
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
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
