// Write your code here

import {ListItem, Title, NotesPara} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, notes} = details
  return (
    <ListItem>
      <Title>{title}</Title>
      <NotesPara>{notes}</NotesPara>
    </ListItem>
  )
}

export default NoteItem
