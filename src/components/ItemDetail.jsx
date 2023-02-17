import { useParams } from "react-router-dom";
 
  
  const ItemDetail = ({ relog }) => {
    const { id } = useParams();
  
    const relogFilter = relog.filter((relog) => relog.id == id);

    return (
<>
    {relogFilter.map((relog) => (
    <div key={relog.id}>
    <div className="container py-5">
    <div className="row px-xl-5">
    <div className="col-lg-5 pb-5">
    <div id="product-carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner border">
    <div className="carousel-item active">
    <img className="w-100 h-100" src={relog.url} alt="Image" />
    </div>
    </div>
    </div>
    </div>

    <div className="col-lg-7 pb-5">
    <h3 className="font-weight-semi-bold">{relog.title}</h3>
    <h3 className="font-weight-semi-bold mb-4">{relog.price}</h3>
    <p className="mb-4">{relog.description}</p>

   <div className="d-flex align-items-center mb-4 pt-2">
   <div className="input-group quantity mr-3" style="width: 130px;">
   <div className="input-group-btn">
   <button className="btn btn-primary btn-minus"><i className="fa fa-minus"></i></button>
   </div>
   <input type="text" className="form-control bg-secondary text-center" value="1" />
   <div className="input-group-btn">
   <button className="btn btn-primary btn-plus"><i className="fa fa-plus"></i></button>
   </div>
   </div>
   <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
   </div>
   </div>
   </div>
   </div>
   </div>

))}
      </>
);
};
  
export default ItemDetail;
