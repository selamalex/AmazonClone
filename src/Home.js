import React from 'react';
import './Home.css';
import Product from './Productt';
function Home() {
    return (
        <div>
             <div className='home-container'>
                <img className='home-image' src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt=''/>
                <div className='home-row'>
                     <Product
                     id="firstRowFColumn"
                     title="OXO Good Grips Kitchen Drawer, Expandable Utensil Organizer, White"
                     price="11.96"
                     rating={5}
                     image="https://m.media-amazon.com/images/I/71HfAcG8RoL._AC_UL480_FMwebp_QL65_.jpg"/>
                     <Product
                     id="firstRowSColumn"
                     title="More Garlic Grinding Machine Originality Garlic Cutter Kitchen Garlic Stirring Device Mashed Organ Small Tool"
                     price="19"
                     rating={2}
                     image="https://m.media-amazon.com/images/I/5119-WJ04aL._AC_UL480_QL65_.jpg"
                     />
                     <Product
                     id="firstRowTColumn"
                     title="Ninja BL610 Professional 72 Oz Countertop Blender with 1000-Watt Base and Total Crushing Technology"
                     price="52.56"
                     rating={4}
                     image="https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_UL320_.jpg"
                     />
                </div>
                <div className='home-row'>
                     <Product
                     id="secondRowFColumn"
                     title="OXO Good Grips 5-lb Food Scale with Pull-Out Display,Black"
                     price="23.99"
                     rating={3}
                     image="https://m.media-amazon.com/images/I/81RuhfaLExL._AC_UL480_QL65_.jpg"
                     />
                     <Product
                     id="secondRowSColumn"
                     title="Lux Minder Timer Mechanical"
                     price="98.99"
                     rating={5}
                     image="https://m.media-amazon.com/images/I/41j6lLkhZOL._AC_UL480_QL65_.jpg"
                     />
                     <Product
                     id="secondRowTColumn"
                     title="OXO Good Grips 5-lb Food Scale with Pull-Out Display,Black"
                     price="59.99"
                     rating={3}
                     image="https://m.media-amazon.com/images/I/81RuhfaLExL._AC_UL320_.jpg"/>
                     <Product
                     id="secondRowFColumn"
                     title="T-fal Experience Nonstick Fry Pan Set 3 Piece, 8, 10.25, 12 Inch Induction Oven Broiler Safe 400F Cookware andPots"
                     price="39.29"
                     rating={2}
                     image="https://m.media-amazon.com/images/I/81BiJk3eXlL._AC_UL320_.jpg"
                     />
                </div>
                <div className='home-row'>
                     <Product
                     id="ThirdRowFColumn"
                     title="Swift Kitchen Vegetable Peeler with Ultra Sharp Surgical Grade Stainless Steel - Multipurpose, Rustproof"
                     price="6"
                     rating={2}
                     image="https://m.media-amazon.com/images/I/71UQByYiLCL._AC_UL320_.jpg"
                     />
                     <Product
                     id="ThirdRowSColumn"
                     title="Geedel Vegetable Chopper, Onion Chopper Pro Food Chopper, Kitchen Vegetable Slicer Dicer Cutter"
                     price="26.99"
                     rating={5}
                     image="https://m.media-amazon.com/images/I/514RZaRSSbL._AC_UL320_.jpg"
                     />
                     <Product
                     id="ThirdRowTColumn"
                     title="Mueller Austria Ultra-Stick 500 Watt 9-Speed Immersion Multi-Purpose Hand Blender"
                     price="34.97"
                     rating={3}
                     image="https://m.media-amazon.com/images/I/61jiMJXWlJL._AC_UL320_.jpg"
                     />
                </div>
                <div className='home-row'>
                     <Product
                     id="firstRowSColumn"
                     title="Crosley Furniture Tara 3-Piece Sideboard and Pantry Set, Distressed Gray"
                     price="190.7"
                     rating={4}
                     image="https://m.media-amazon.com/images/I/71sqHCf2w2L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                     />
                   
                </div>
            </div>
        </div>
    );
}

export default Home;
