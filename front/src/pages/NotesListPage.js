import React from 'react'
import ListItem from '../components/ListItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

  const [notes, setNotes] = useState([])

  useEffect(()=>{
    
    getData()
    
  },[])

  const getData = () => {
      axios.get('/api/notes/')
      .then(response=>setNotes(response.data))
      .catch(e => console.log(e))
  } 
  


  return (
    <div className='notes'>

      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className='notes-list'>
      {notes.map( (note, index) => <ListItem key={index} note={note}/>)}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesListPage