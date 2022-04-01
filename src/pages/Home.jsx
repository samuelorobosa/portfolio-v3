import Hero from "../components/Hero/Hero";
import {Link} from "react-router-dom";
import {socialsData} from "../data/Home/socialsData";
import { BsArrowUpRight } from "react-icons/bs";

function Home() {

    return(
        <>
            <Hero />

            <div className="container mt-auto mb-8 flex justify-between items-center">
                <Link to={'/'}
                      className=
                          "text-2xl pl-2 hover-secondary-text-color block
                          font-extrabold after:content-[''] after:w-20
                          after:block after:h-0.5 after:bg-white hover:after:w-full
                          transition duration-500 ease-in-out
                          after:transition-all after:delay-300">
                    View My Projects  &nbsp;  <BsArrowUpRight className="inline"/>
                </Link>

                <div className="social-media-icons hidden md:block font-extrabold">
                    {socialsData.map(social => (
                        <Link className="px-3 inline-block hover-secondary-text-color transition duration-500 ease-in-out"
                              to={social.url}
                              key={social.id}>
                            {social.icon}{social.name} &nbsp;
                            <BsArrowUpRight className="inline"/>
                        </Link>
                    ))
                    }
                </div>
            </div>

        </>
    );
}

export default Home;