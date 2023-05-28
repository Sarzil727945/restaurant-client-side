import React from 'react';
import useTitle from '../../hooks/useTitle';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import MenuItem from '../../shared/MenuItem/MenuItem';
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const OurMenu = () => {
     useTitle('Our Menu')
     const [menu] = useMenu();
     const popular = menu.filter(item => item.category === "popular")
     const salad = menu.filter(item => item.category === "salad")
     const drinks = menu.filter(item => item.category === "drinks")
     const dessert = menu.filter(item => item.category === "dessert")
     const pizza = menu.filter(item => item.category === "pizza")
     const soup = menu.filter(item => item.category === "soup")
     const offered = menu.filter(item => item.category === "offered")

     return (
          <div>
               <Cover
                    bgImg={menuImg}
                    title={'Our Menu'}
               ></Cover>
               <div className='mt-5'>
                    <SectionTitle
                         heading="TODAY'S OFFER"
                         subHeading="---Don't miss---"
                    ></SectionTitle>
               </div>
               <MenuCategory
               items = {offered}
               ></MenuCategory>

               <MenuCategory
               items={dessert}
               title={'our dessert'}
               coverImg={dessertImg}
               ></MenuCategory>

               <MenuCategory
               items={pizza}
               title={'our pizza'}
               coverImg={pizzaImg}
               ></MenuCategory>

               <MenuCategory
               items={salad}
               title={'our salad'}
               coverImg={saladImg}
               ></MenuCategory>
          </div>
     );
};

export default OurMenu;