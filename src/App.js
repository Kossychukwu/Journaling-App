//import logo from './logo.svg';
//import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note'
//import NoteList from '../src/notes'
import CreateArea from './Components/CreateArea';
import { useState } from 'react';

//console.log(NoteList)



function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNotes){
    setNotes(prevNotes => {
      return [...prevNotes, newNotes]
    })

  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      });
    });
  }



  return (
    <div className="App">
     <Header/>
     <CreateArea
     onAdd={addNote}
     />
     {notes.map((noteItem, index) => {
      return( <Note key={index}
        id={index}
         title = {noteItem.title} 
         content = {noteItem.content}
        onDelete = {deleteNote} 
      /> 
      )
     })}

     {/* {NoteList.map((noteDetails) =>
     <Note
   key = {noteDetails.key}
  title = {noteDetails.title}
  content ={ noteDetails.content}
/>
)} */}
<Footer/>
     
</div>
  );
}

export default App;
