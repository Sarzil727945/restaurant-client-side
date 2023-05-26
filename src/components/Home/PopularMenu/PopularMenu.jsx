import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
     const [menu, setMenu] = useState([]);

     useEffect(()=>{
          fetch('menu.json')
          .then(res => res.json())
          .then(data => {
               const popularItem = data.filter(item => item.category === "popular")
               setMenu(popularItem)
          })
     }, [])

     return (
          <div className=' mb-12'>
               <div>
                    <SectionTitle
                    heading = "FROM OUR MENU"
                    subHeading = "---Check it out---"
                    ></SectionTitle>
               </div>
               <div className=' grid lg:grid-cols-2 gap-10'>
                    {
                     menu.map(item => <MenuItem
                     key={item._id}
                     item = {item}
                     ></MenuItem>)    
                    }
               </div>
          </div>
     );
};

export default PopularMenu;