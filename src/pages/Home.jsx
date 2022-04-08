import Hero from "../components/Hero/Hero";
import {Link} from "react-router-dom";
import {socialsData} from "../data/Home/socialsData";
import { BsArrowUpRight } from "react-icons/bs";

function Home() {

    return(
        <>
            <Hero />

            <div className="container mt-3 md:mt-auto mb-14 flex justify-between items-center">
                <Link to={'/projects'}
                      className=
                          "text-2xl pl-2 hover-secondary-text-color block
                          font-extrabold after:content-[''] after:w-20
                          after:block after:h-0.5 after:bg-white view-my-projects
                          transition duration-500 ease-in-out
                          after:transition-all after:delay-300">
                    View My Projects  &nbsp;  <BsArrowUpRight className="inline"/>
                </Link>

                <div className="social-media-icons hidden md:block font-extrabold">
                    {socialsData.map(social => (
                        <a className="px-3 inline-block hover-secondary-text-color transition duration-500 ease-in-out"
                              href={social.url}
                              key={social.id}
                              target="_blank"
                              rel="noopener noreferrer">
                            {social.icon}{social.name} &nbsp;
                            <BsArrowUpRight className="inline"/>
                        </a>
                    ))
                    }
                </div>
            </div>

        </>
    );
}

export default Home;