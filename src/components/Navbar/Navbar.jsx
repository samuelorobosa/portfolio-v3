import NavigationContext from "../../context/NavigationContext/NavigationContext";
import {useCallback, useContext, useEffect} from "react";
import './Navbar.scss';
import {Link} from "react-router-dom";
import {socialsData} from "../../data/Home/socialsData";
import {BsArrowUpRight} from "react-icons/bs";

function Navbar (){
    const {showDropdown, dispatch} = useContext(NavigationContext);
    const toggleDropdown = () => {
        dispatch({type: 'TOGGLE_DROPDOWN'});
    }
    const overFlowDocument = useCallback(() => {
        const body = document.querySelector('body');
        showDropdown ? body.classList.add('overflow-hidden'):body.classList.remove('overflow-hidden')
    },[showDropdown]);

    useEffect(() => {
        overFlowDocument();
    },[showDropdown,overFlowDocument]);


    return(
        <>
            <nav className="bg-main-color py-10 sm:px-4 dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to={'/'} className="flex items-center">
                        <span
                            className="font-family-epilogue self-center text-5xl font-bold whitespace-nowrap dark:text-white pl-3">
                            SA.
                        </span>
                    </Link>
                    <button className={`${showDropdown ? "hamburger hamburger--expanded" : "hamburger"} flex flex-col items-center mr-3 ml-3 md:hidden focus:outline-none dark:text-gray-400`}
                            aria-expanded="false"
                            onClick={toggleDropdown}>
                        <div className="hamburger__bar"/>
                        <div className="hamburger__bar"/>
                    </button>
                    <div className={`${showDropdown ? '': 'hidden' } w-full h-screen md:h-full md:block md:w-auto`}>
                        <ul className="flex flex-col content-between text-3xl mt-4 items-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to={'/projects'}
                                      onClick={toggleDropdown}
                                      className="nav-links  after:transition-all after:delay-300"
                                      aria-current="page">Projects

                                </Link>
                            </li>

                            <li>
                                <Link to={'/resume'}
                                      onClick={toggleDropdown}
                                      className="nav-links after:transition-all after:delay-300"
                                      aria-current="page">Resume
                                </Link>
                            </li>

                            <li>
                                <Link to={'/'}
                                      onClick={toggleDropdown}
                                      className="nav-links after:transition-all after:delay-300"
                                      aria-current="page">Contact
                                </Link>
                            </li>

                            <li>
                               <p className="stand-out-color text-2xl mt-4 font-extrabold block md:hidden">Connect with Me</p>
                            </li>
                            <li>
                                <div className="block mt-4 md:hidden">
                                        {socialsData.map(social => (
                                            <Link className="px-3 inline-block text-base block hover-secondary-text-color transition duration-500 ease-in-out"
                                                  to={social.url}
                                                  key={social.id}>
                                                {social.icon}{social.name} &nbsp;
                                                <BsArrowUpRight className="inline"/>
                                            </Link>
                                        ))
                                        }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;