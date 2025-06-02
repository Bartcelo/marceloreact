import RomaflaSite from '../assets/romafla.png';
import EmprestimoLovros from '../assets/emprestimolivros.png';



function Projetos() {
  return (
    <div className="projetos flex flex-col justify-center  items-center text-white" id="projetos">
      <h1 className="text-4xl mb-20 ">Projetos</h1>

      <div className="flex flex-row justify-center items-center bg-white/30 p-20 rounded-2xl mb-10 shadow-xl/30">
        <div><img className="w-80 h-60 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={RomaflaSite} alt="" /></div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-4">Site Romafla</h2>
          <p className="text-lg mb-4">Desenvolvido com React, Tailwind CSS, Laravel e Mysql.</p>
          <button
            className="bg-blue-500  px-4 py-2 rounded-3xl hover:bg-blue-600"
            onClick={() => window.open("https://www.romafla.com.br/", "_blank")}
          >
            Acessar Projeto
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center bg-white/30 p-20 rounded-2xl mb-10 shadow-xl/30">
        <div><img className="w-80 h-60 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={EmprestimoLovros} alt="" /></div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-4">Sistema de emprestimo de livros</h2>
          <p className="text-lg mb-4">Desenvolvido em C# .Net, HTML, CSS e JS</p>
          <button
            className="bg-blue-500  px-4 py-2 rounded-3xl hover:bg-blue-600"
            onClick={() => window.open("https://github.com/Bartcelo/EmprestimoLivros", "_blank")}
          >
            Acessar Projeto
          </button>
        </div>
      </div>


    </div>
  );
}
export default Projetos;