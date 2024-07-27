import  pageNotFound  from '../assets/pagenotfound.png'

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, OOPS!</p>
          <img className='rounded' src={pageNotFound} alt="404 Page Not Found" />

        </div>
      </section>
    </main>
  )
}
