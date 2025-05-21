import Header from './Header.jsx'
import {Outlet} from 'react-router'
export default function Layout(){
    return(
    <>
    <Header/>
    <Outlet/>
    <footer className='footer'>footer of the page</footer>
    </>)
}