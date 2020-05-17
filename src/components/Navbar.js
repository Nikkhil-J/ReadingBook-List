import React ,{useContext} from 'react'
import { BookContext} from '../contexts/BookContext'

const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Nikhil's Reading List</h1>
            <p> You are left with {books.length } to read. </p>
        </div>
    )
}

export default Navbar
