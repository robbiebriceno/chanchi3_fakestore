import { useEffect } from 'react'
import { useProductStore } from './store/product-store'
import Header from './components/Header'
import Footer from './components/Footer'
import CardList from './components/CardList'

function App() {
  const products = useProductStore((state) => state.products)
  const loading = useProductStore((state) => state.loading)
  const error = useProductStore((state) => state.error)
  const fetchProducts = useProductStore((state) => state.fetchProducts)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  
  return (
    <>
      <Header />
      <main>
        <section className="py-5 bg-light min-vh-100">
          <div className="container">
            <h1 className="main-title text-center fw-bold mb-5 display-4 text-dark">Catálogo de Productos</h1>
            {loading && <div className="d-flex justify-content-center my-5"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Cargando...</span></div></div>}
            {error && <div className="alert alert-danger text-center">Error: {error}</div>}
            {!loading && !error && <CardList data={products} />}
          </div>
        </section>
      </main>
      <Footer />
      <div id="contacto" className="container my-5"></div>
    </>
  )
}

export default App
