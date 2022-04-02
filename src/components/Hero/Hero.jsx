function Hero(){

    return(
        <>
        <div className="w-full mx-auto text-left md:text-center p-3">
            <p className="text-4xl font-semibold">
                Hey there, <br/> I am <span className="font-family-epilogue stand-out-color">Samuel Amagbakhen.</span></p>
            <p className="w-full md:mx-auto md:w-1/2 mt-3 leading-10 text-xl mt-8">
                A creative, ambitious, and self-motivated <span className="inline-block bg-secondary-text-color text-white rounded  px-1.5">frontend developer</span> with a passion for creating things that live and breathe on the web.
                I can work with popular front-end technologies, utilizing these tools to deliver a <span className="inline-block bg-secondary-text-color text-white rounded  px-1.5">pixel-perfect</span> design and user-centered implementation.
            </p>

            <p className="w-full md:mx-auto md:w-1/2 mt-3 leading-10 text-xl mt-8">
                I am a proper <span className="inline-block bg-secondary-text-color text-white rounded  px-1.5">team player</span> and ask questions when necessary.
            </p>

        </div>
        </>
    )
}

export default Hero;