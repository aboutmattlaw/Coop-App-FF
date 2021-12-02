import {Container, Navbar} from 'react-bootstrap'




// {listDetails.list.list_name} in theory could dynamically populate List Name.

function ListHeader({listDetails, activeList}) {
    return (
                    <h3>Currnet List: {activeList?.list_name}</h3>
    )
}

export default ListHeader
