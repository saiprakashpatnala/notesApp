// Write your code here

import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  Container,
  Heading,
  Form,
  Input,
  Text,
  Button,
  EmptyContainer,
  SubHeader,
  Description,
  Img,
  NotesListElement,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  const [notesList, setNotesList] = useState([])

  const changeTitle = event => {
    setTitle(event.target.value)
  }

  const addNotes = event => {
    setNotes(event.target.value)
  }

  const startNotes = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    setNotesList(prevState => [...prevState, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <Form onSubmit={startNotes}>
        <Input
          value={title}
          placeholder="Title"
          onChange={changeTitle}
          type="text"
        />
        <Text
          onChange={addNotes}
          rows="16"
          value={notes}
          placeholder="Take a Note..."
        />
        <Button type="submit">Add</Button>
      </Form>
      <>
        {notesList.length === 0 ? (
          <EmptyContainer>
            <Img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <SubHeader>No Notes Yet</SubHeader>
            <Description>Notes you add will appear here</Description>
          </EmptyContainer>
        ) : (
          <NotesListElement>
            {notesList.map(each => (
              <NoteItem details={each} key={each.id} />
            ))}
          </NotesListElement>
        )}
      </>
    </Container>
  )
}

export default Notes
