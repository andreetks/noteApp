import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ( { note }) => {

  const getTime = (note) =>{
    return new Date(note.updated_at).toLocaleDateString()
  }


  return (
    <div>
        <Link to={`/note/${note.id}`}>
          <div className='notes-list-item'>
            <h3>{note.title}</h3>
            <p>{getTime(note)}</p>
            <p> {note.content.substring(0,40)}</p>
          </div>
          
        </Link>
        
    </div>
  )
}

export default ListItem;