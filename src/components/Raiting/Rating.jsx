import React from 'react'

const Rating = ({value}) => {
 
  if (value === 1) {
    return (
      <div>
          <Star selected={true}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
      </div>
    )
  }
  if (value === 2) {
    return (
      <div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={false}/>
          <Star selected={false}/>
          <Star selected={false}/>
      </div>
    )
  }
  if (value === 3) {
    return (
      <div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={false}/>
          <Star selected={false}/>
      </div>
    )
  }
  if (value === 4) {
    return (
      <div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={false}/>
      </div>
    )
  }
  if (value === 5) {
    return (
      <div>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
          <Star selected={true}/>
      </div>
    )
  }

  return (
    <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
  )
  
}

function Star({selected}) {
    // const starSelected = () => {
    //   if (selected) {
    //     return <span> <b>Star</b> </span>
    //   } else {
    //     <span> Star</span>
    //   }
    // }
    // const res = starSelected()
    return (
      <>
      {selected ? <span><b>Star </b></span> : <span> Star </span>}
      </>
    )
}

export default Rating