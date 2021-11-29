import ListHeader from "./ListHeader"
import {ListGroup, Button, Form} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import NoteForm from "./NoteForm";


function ListDetails({notes, setNotes, currentUser, setCurrentUser, listDetails, allItems, setAllItems, noteFormData, setNoteFormData}) {



console.log("all items:" , allItems)

const all_items = allItems.map(item => {
  return <>
  <ListGroup.Item>{item.item_name}<Button>Add</Button></ListGroup.Item>

  </>
})






  console.log("listdetails:" , listDetails)
  console.log("notes:" , listDetails.notes)

  
  const det = listDetails.map(detail => {
      return (
        <>
         <ListGroup.Item>{detail.quantity} {detail.item.item_name}
         <NoteForm></NoteForm>
     </ListGroup.Item>
         </>
      )
                  
})



// const note_display = listDetails.notes.map(detail => {
//   return (
//     <>
//   <ListGroup.Item>{detail.note_text}
//          <NoteForm></NoteForm>
//      </ListGroup.Item>
//      </>
//   )
              
// })




    return(
  <>

<ListHeader listDetails={listDetails}></ListHeader>

<ListGroup>
<ListGroup.Item>{det}</ListGroup.Item>
<ListGroup.Item></ListGroup.Item>
<ListGroup.Item>{all_items}</ListGroup.Item>
</ListGroup>


    </>   
    )
}

export default ListDetails