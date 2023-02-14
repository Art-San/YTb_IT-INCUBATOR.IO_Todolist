import './App.css';
import React from 'react'
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Raiting/Rating';

// function hello() {
  
// }

//hello()

function Bpp() {
return (
  <>
    <BppTitle/>
    <Rating value={3}/>
    <Accordion title='Первый заголовок'/>
    <Rating value={4}/>
    <Accordion title='Второй заголовок'/>
  </>
)
}

function BppTitle() {
  return <div>This is bpp component </div>
}
export default Bpp;
