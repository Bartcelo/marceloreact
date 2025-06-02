import LogomarceloTopo from "../assets/marcelorosto.jpg";
import { Link } from "react-scroll";



function MenuSuperior() {
  return (

    <div >
      <div className='bg-sky-900 flex justify-evenly items-center py-5 z-10 border-4 border-b-sky-200 fixed w-full' >

        {/* <img src={LogomarceloTopo} alt="Marcelo Gonzaga" className='rounded-full w-32 h-32 border-4 border-sky-500' /> */}
        <h1 className='text-white text-lg md:text-4xl' >Marcelo Gonzaga</h1>
        <nav className='hidden sm:flex'>
          <ul className='flex justify-evenly items-center bg-sky-900  '>
            <Link to="sobre" smooth={true} duration={2000} offset={-137}>
              <li className='text-white hover:text-sky-500 cursor-pointer hover:bg-sky-700 active:bg-sky-700  py-5 px-7 focus:bg-sky-700 border-r-2 sm:border-none rounded-md '>Sobre</li>
            </Link>
            <Link to="myskills" smooth={true} duration={3000} offset={-137}>
              <li className='text-white hover:text-sky-500 cursor-pointer hover:bg-sky-700 active:bg-sky-700  py-5 px-7 focus:bg-sky-700 rounded-md'>Conhecimento</li>
            </Link>
            <Link to="projetos" smooth={true} duration={5000} offset={-137}>
              <li className='text-white hover:text-sky-500 cursor-pointer hover:bg-sky-700 active:bg-sky-700  py-5 px-7 focus:bg-sky-700 border-r-2 sm:border-none rounded-md '>Projetos</li>
            </Link>
            <Link to="contatos" smooth={true} duration={6000} offset={-137}>
              <li className='text-white hover:text-sky-500 cursor-pointer hover:bg-sky-700 active:bg-sky-700  py-5 px-7 focus:bg-sky-700 rounded-md'>Contato</li>
            </Link>
          </ul>
        </nav>

      </div>
      <div>
        <nav className='sm:hidden'>
          <ul className='flex justify-evenly items-center bg-sky-900 h-20 w-screen sm:border-t-sky-50 sm:border-2'>
            <li className='text-white hover:text-sky-500 cursor-pointer hover:bg-sky-700 active:bg-sky-700  py-5 px-7 focus:bg-sky-700 border-r-2 sm:border-none  '>Sobre</li>
            <li className='text-white hover:text-sky-500 cursor-pointer hover:bg-sky-700 active:bg-sky-700  py-5 px-7 focus:bg-sky-700 border-r-2 sm:border-none '>Projetos</li>
            <li className='text-white hover:text-sky-500 cursor-pointer hover:bg-sky-700 active:bg-sky-700  py-5 px-7 focus:bg-sky-700 '>Contato</li>
          </ul>
        </nav>

      </div>

    </div>



  )
}

export default MenuSuperior;