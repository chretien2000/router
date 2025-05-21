import {Link} from 'react-router'
export default function Header(){

    return(
    <main className="header">
     <Link to='/'>Home</Link>
     <div>
        <Link to='/about'>about</Link>
     </div>
     
    </main>)
}