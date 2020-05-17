import React ,{useContext} from 'react'
import { BookContext} from '../contexts/BookContext'

const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Nikhil Reading List</h1>
            <p> {books.length } to do ... </p>
        </div>
    )
}

export default Navbar
