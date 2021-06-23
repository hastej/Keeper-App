import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function card(props){

  function handleClick(event){
    props.ondelete(props.id);
  }

  return <div className = "card">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button onClick = {handleClick} className = "delete-button"><DeleteForeverIcon/></button>
  </div>;
}

export default card;
