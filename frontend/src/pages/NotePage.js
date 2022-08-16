import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrowLeft.svg'


const NotePage = () => {

    const { noteId } = useParams()
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [note, setNote] = useState({})

    useEffect(() => {
        getNotes()
       
    }, [])

    const getNotes = () => {
        if (noteId === 'new') return
        axios.get(`/api/notes/${noteId}`)
            .then(response => {
                setNote(response.data)
                setText(response.data.content)
                setTitle(response.data.title)
            })

    }

    const manageNoteChange = (e) => {
        setText(e.target.value)
    }

    const manageTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const deleteNote = () => {
        console.log(`deleting ${noteId}...`)
        axios.delete(`/api/notes/${noteId}/`)
    }

    const updateNote = () => {
        const noteUpdated = { ...note, title: title , content: text }
        axios.put(`/api/notes/${noteId}/`, noteUpdated)

    }

    const createNote = () => {
        const content = {title: title, content : text}
        axios.post('/api/notes/', content)
    }

    const handleSubmit = () =>{
        if ( noteId !== 'new' && !text){
            deleteNote()
        } else if( noteId !== 'new' && (note.content !== text || note.title !== title)) {
            console.log('updating')
            updateNote()
        }else if ( noteId === 'new' && text && title){
            createNote()
        }
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <Link onClick={handleSubmit} to='/'>
                    <h3><ArrowLeft  /></h3>
                </Link>

                {noteId !== 'new' ? (
                    <Link onClick={deleteNote} to='/'>
                        <h1>Delete</h1>
                    </Link>
                ) : (
                    <Link onClick={handleSubmit} to='/'> 
                        done
                    </Link>
                )}



            </div>
            <input onChange={manageTitleChange} defaultValue={ title } type='text' placeholder='Title' />
            <textarea onChange={manageNoteChange} value={text} placeholder='Content'></textarea>
        </div>
    )
}

export default NotePage