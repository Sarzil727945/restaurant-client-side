import React from 'react';
import useTitle from '../../hooks/useTitle';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const OurMenu = () => {
     useTitle('Our Menu')
     const [menu] = useMenu();
     const salad = menu.filter(item => item.category === "salad")
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
               title={'Our Dessert'}
               coverImg={dessertImg}
               ></MenuCategory>

               <MenuCategory
               items={pizza}
               title={'Our Pizza'}
               coverImg={pizzaImg}
               ></MenuCategory>

               <MenuCategory
               items={salad}
               title={'Our Salad'}
               coverImg={saladImg}
               ></MenuCategory>

               <MenuCategory
               items={soup}
               title={'Our Soup'}
               coverImg={soupImg}
               ></MenuCategory>
          </div>
     );
};

export default OurMenu;