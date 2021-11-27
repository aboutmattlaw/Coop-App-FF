import ListHeader from "./ListHeader"
import {ListGroup} from 'react-bootstrap'

function ListDetails({setCurrentUser, listDetails}) {


  // const details = listDetails.map(detail => {
  //   return <>
  //       <ListGroup.Item>
  //           {detail.list_item}
  //           </ListGroup.Item>
  //   </>
  // })
  

//   const lists = currentUserLists.map(list => {
//     return <>
//         <ListGroup.Item onClick={() => getListDetails(list.id)}>
//             {
//             list.list_name
//         }</ListGroup.Item>
//     </>
// })





    return(
  <>

<ListHeader></ListHeader>

<ListGroup>
{listDetails}

</ListGroup>

    
    </>   
    )
}

export default ListDetails