import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import CreateCard from "./CreateCard"


function App(){

  const [notes,setNotes] = React.useState([]);

  function addNote(note){

    setNotes(prevValue => {return[...prevValue,note]});

  }

  function deleteNote(id){
    setNotes(prevNotes => {
     return prevNotes.filter((noteItem, index) => {
       return index !== id;
     });
   });
 }

  return (<div>
  <Header/>
  <CreateCard onadd = {addNote}/>
  {notes.map((NoteItem,index) => {
    console.log(index);
    return <Card key = {index} id = {index} title = {NoteItem.title} content = {NoteItem.content} ondelete = {deleteNote}/>
  })}
  <Footer/>
  </div>);
}

export default App;
