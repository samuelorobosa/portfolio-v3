import {useContext, useEffect} from "react";
import BlogContext from "../../context/BlogContext/BlogContext";
import {BsFillEyeFill} from "react-icons/bs";
import {ImSpinner9} from "react-icons/im";

function BlogData(){
    const {blogs,loading,dispatch} = useContext(BlogContext);

    useEffect(() => {
        const getAllArticles = async () => {
            try {
                const res = await fetch(`https://dev.to/api/articles?username=samuelorobosa`);
                const data = await res.json();
                dispatch({
                    type: 'GET_ALL_ARTICLES',
                    payload: data
                })
            } catch (e) {
                console.log(`Could not get all articles ${e}`)
            }
        }
        getAllArticles();
    }, [dispatch]);

    return(
        <div className="blogDivContainer px-5 md:px-24 mt-5 pb-44">
            <ImSpinner9 className={`absolute top-60 loadingIcon animate-spin text-5xl stand-out-color ${loading ? "":"hidden"}`}/>
            {blogs.map(({id,title,published_at,tags,canonical_url})=>{
                const convertedDate = new Date(published_at).toLocaleDateString(undefined,{
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });
                return (
                        <div key={id} className="flex flex-col justify-between w-full blogDiv opacity-0 p-4 mx-1 rounded my-3.5 text-left bg-secondary-text-color main-text-color">
                            <div>
                                <h1 className="font-semibold font-family-epilogue text-lg">{title}</h1>
                                <p className="text-sm">{convertedDate}</p>
                            </div>

                            <div className="flex flex-col justify-around">
                                <a className="hover-stand-out-color transition-all duration-500 flex items-center" href={canonical_url}><BsFillEyeFill/> View Post</a>
                                <p className="text-sm secondary-text-color-lighter">#{tags}.</p>
                            </div>
                        </div>

                )
            })}
        </div>
    )
}
export default BlogData;