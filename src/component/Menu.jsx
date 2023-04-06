import React from 'react' //libary import

//component body(capital letter in starting) --React functional component
function Menu(props){
    return (
        <nav className='menu'>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            
        </nav>
    )
}
//default export
export default Menu