import {Navbar, Image, Form} from "react-bootstrap";
import img from '../../images/github.png'
import LogOutButton from "../auth/LogOutButton";
import {useSelector} from "react-redux";
import {selectAuthenticated} from "../../features/auth/userSlice";
const Header = () => {
    const auth = useSelector(selectAuthenticated);
    return (
        <Navbar  className="font-monospace bg-secondary d-flex flex-row justify-content-center flex-wrap rounded">
            <a href='https://github.com/AmiFideles/backend'>
                <img width='50' height='50' src={img} className= "img-fluid  rounded mx-auto " alt="..."/>
            </a>
            <div className=" d-flex flex-row w-50 justify-content-evenly flex-wrap">
                <div className="navbar  navbar-text text-white">P32312</div>
                <div className="navbar-text text-white">variant 1240</div>
                <div className="navbar-text text-white">Iskandarov Shakhzodbek</div>
            </div>
            {/*<Form inline="true" className="">*/}
            {/*    <LogOutButton/>*/}
            {/*</Form>*/}
            {auth?<LogOutButton/>:<></>}
        </Navbar>

    )
};

export default Header;