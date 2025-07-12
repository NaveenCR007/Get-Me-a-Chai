export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div className="h-[40vh] sm:h-[60vh] flex flex-col justify-center items-center">
          <div className='font-bold text-4xl'>Get Me A Chai</div>

          <div className="text-center text-2xl font-bold mt-10 mb-2">
            Support your favorite creators with a cup of chai
          </div>

          <div className="flex">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Start now!</button>

            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Read more</button>
          </div>
        </div>

        <div className="h-1 bg-slate-800 w-full"></div>

        <div className="desc h-140 sm:h-80 my-10">
          <h2 className="text-3xl text-center font-bold">Fund your favorite creators</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center mt-10">
            <div className="img1 w-fit flex flex-col justify-center items-center space-y-2">
              <img className="bg-slate-500 rounded-full p-3" width={130} src="/man.gif" alt="" />
              <p className="text-center font-bold">Fund yourself</p>
              <p className="text-center">Publish your best work</p>
            </div>

            <div className="img2 w-fit flex flex-col justify-center items-center space-y-2">
              <img className="bg-slate-500 rounded-full p-3" width={120} src="/coin.gif" alt="" />
              <p className="text-center font-bold">Accept Support</p>
              <p className="text-center">Give your audience
                an easy way to say thanks.</p>
            </div>

            <div className="img2 w-fit flex flex-col justify-center items-center space-y-2">
              <img className="bg-slate-500 rounded-full p-3" width={130} src="/group.gif" alt="" />
              <p className="text-center font-bold">Start your cult</p>
              <p className="text-center">Start a membership for
                your biggest fans.</p>
            </div>
          </div>
        </div>

        <div className="h-1 bg-slate-800 w-full"></div>

        <div className="min-h-70 my-10">
          <h2 className="text-3xl text-center font-bold mb-10">Learn more about us!</h2>
          <div className="w-full flex flex-col sm:flex-row justify-around items-center mx-auto">
            <div>
              <iframe max-width="460" height="215" src="https://www.youtube.com/embed/5utdT0ksIws?si=hAIw63tE21NipssE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div>
              <iframe max-width="460" height="215" src="https://www.youtube.com/embed/NcWqHG1ye3g?si=NUtUrXICLIyl9_zL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
