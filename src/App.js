import React from 'react';
import PropTypes from 'prop-types';

const App =()=> {

  const profiles = [
    { name: "Momiri", age:20 },
    { name: "Abe", age:10 },
    {name: "NoName",age:4}
  ]
  return (
    <div>
      {
        profiles.map((profile,index)=>{
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} />
    </div>
  )
}

const User =(props)=> {
  return <div>Hi! I am {props.name}!, and {props.age}years old! </div>
}
User.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}



export default App;
