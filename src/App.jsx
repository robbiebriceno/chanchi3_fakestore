import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useProductStore } from './store/product-store'
import Header from './components/Header'
import Footer from './components/Footer'
import CardList from './components/CardList'

function App() {
  const products = useProductStore((state) => state.products)
  const getProducts = useProductStore((state) => state.getProducts)

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
        <>
      <Header />
      <main>
        <section className="py-4">
          <div className="container">
            <h2 className="text-center fw-bolder">Productos</h2>
            <CardList data={products} />
          </div>
        </section>
      </main>
      <Footer />
      <div id="contacto" className="container my-5">
      </div>
    </>
  )
}

export default App
