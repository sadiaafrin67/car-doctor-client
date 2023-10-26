

const Service = ({ service }) => {

    const {service_id, title, img, price, description} = service

    return (
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl lg:h-[208px]" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title">{title}</h2>
    <p className="text-start font-bold text-orange-500">Price: ${price}</p>
    
  </div>
</div>
    );
};

export default Service;