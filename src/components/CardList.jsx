import { useProductStore } from "../store/product-store";

const CardList = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="alert alert-warning text-center">No hay productos para mostrar.</div>;
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {data.map((item) => {
        const { id, title, price, description, category, image } = item;
        return (
          <div key={id} className="col d-flex align-items-stretch">
            <div className="card h-100 shadow border-0">
              <img src={image || 'https://via.placeholder.com/400x200'} className="card-img-top p-3 bg-white" alt={title} style={{objectFit:'contain',height:'220px'}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-primary">{title || 'Sin título'}</h5>
                <p className="card-text text-muted small flex-grow-1">{(description || '').slice(0, 90)}...</p>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="badge bg-info category-badge">{category || 'N/A'}</span>
                  <span className="fw-bold text-success fs-5">${price}</span>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <button type="button" className="btn btn-outline-primary btn-sm w-100">Ver</button>
                  <button type="button" className="btn btn-outline-secondary btn-sm w-100">Editar</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;