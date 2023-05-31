import React from 'react';

const FoodCard = ({ item }) => {
     const { image, name, recipe, price } = item;

     const handelAddToCart = (item) =>{
          console.log(item);
     }
     return (
          <div>
               
                    <div className="card card-compact w-100 bg-base-100 shadow-xl">
                         <figure><img src={image} alt="Shoes" /></figure>
                         <p className=' absolute right-0 mr-8 mt-4 px-4 py-1 bg-slate-800 text-white'>${price}</p>
                         <div className="card-body items-center text-center">
                              <h2 className="card-title">{name}</h2>
                              <p>{recipe}</p>
                              <div className="card-actions my-5">
                                   <button onClick={()=> handelAddToCart(item)} className="btn btn-primary uppercase">add to cart</button>
                              </div>
                         </div>
                    </div>
               </div>
     );
};

export default FoodCard;