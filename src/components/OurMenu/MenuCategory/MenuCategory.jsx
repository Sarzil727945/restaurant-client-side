import React from 'react';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import Cover from '../../../shared/Cover/Cover';

const MenuCategory = ({ items, title, coverImg }) => {
     return (
          <div className='my-5'>
              <div className='my-4'>
              {
                  title &&  <Cover bgImg={coverImg} title={'Our Menu'} ></Cover>
               }
              </div>
               <div className=' grid lg:grid-cols-2 gap-10'>
                    {
                         items.map(item => <MenuItem
                              key={item._id}
                              item={item}
                         ></MenuItem>)
                    }
               </div>
          </div>
     );
};

export default MenuCategory;