import React from 'react'

const DogFrontCard = (props) => {
  const imgUrls = props.dogData.photos
  console.log(props.dogData.pet_finder_id);
  return (
    <div className='DogFrontCard'>
      <img src={imgUrls[0]} onClick={props.toggleCard} /><br/>
      Name: {props.dogData.name}<br/>
      Age: {props.dogData.age}<br/>
      Breed: {props.dogData.breed}<br/>
      Gender: {props.dogData.sex}<br/>
      <button name="remove" onClick={props.handleClick}>not today</button>
      <button name="save" onClick={props.handleClick}>save</button>
    </div>
  )
}

export default DogFrontCard;
