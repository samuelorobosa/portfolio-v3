import {socialsData} from "../../data/Home/socialsData";
import {Link} from "react-router-dom";
import {BsArrowUpRight} from "react-icons/bs";

function SocialSide () {


    return(
        <>
            <ul className="after:content[''] after:mx-auto after:block after:w-px after:h-28 after:bg-white fixed bottom-0 ml-px text-center hidden md:block">
                {socialsData.map(social => (
                    <li key={social.id} className="hover:-translate-y-2 mb-5 hover:transition transition duration-700 ease-in-out delay-150 font-semibold">
                        <Link className="px-3 flex flex-nowrap  hover-secondary-text-color transition duration-500 ease-in-out"
                              to={social.url}>
                            {social.icon}&nbsp;&nbsp;{social.name} &nbsp;
                            <BsArrowUpRight className="inline"/>
                        </Link>
                    </li>
                ))
                }
            </ul>
        </>
    )
}

export default SocialSide;