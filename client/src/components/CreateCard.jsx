import React from 'react';
import Fab from '@material-ui/core/Fab';

function CreateCard(props){

  const [currSection,setCurrSection] = React.useState({
    title : "",
    content : ""
  });

  function handleChange(event){

    var name = event.target.name;
    var value = event.target.value;

    return setCurrSection(prevValue => {
      return {...prevValue,
      [name] : value};
    })

  }

  function handleClick(event){

    props.onadd(currSection);

    setCurrSection({
      title : "",
      content : ""
    });

    event.preventDefault();

  }

  return <div className = "formstyle">
  <form>
    <input type="text" onChange = {handleChange} name="title" value={currSection.title} placeholder = "Enter Title Here"/>
    <br/>
    <input type="text" onChange = {handleChange} name="content" value={currSection.content} placeholder = "Enter Content Here"/>
    <br/>
    <Fab  onClick = {handleClick}>+</Fab>
  </form>
  </div>
}

export default CreateCard;
