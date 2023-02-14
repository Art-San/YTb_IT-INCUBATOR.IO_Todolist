import React from 'react'
import AccordionBody from './AccordionBody.jsx'
import AccordionTitle from './AccordionTitle'

const Accordion = ({title}) => {
  
  return (
    <>
      <AccordionTitle title={title}/>
      <AccordionBody/>
    </>
  )
}

export default Accordion