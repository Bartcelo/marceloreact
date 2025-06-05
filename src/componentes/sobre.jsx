import Marcelo from "../assets/marcelorosto.jpg";
function Sobre() {
    return (
        <div className="flex flex-col items-center  text-white" id="sobre">
            <h1 className="text-4xl mb-6 mt-30">Sobre</h1>
            <div className="w-3/4 sm:flex sm:justify-center ">

                <div className=" mb-8  sm:mr-12 ">
                    <img className="sm:h-80 rotate-3 rounded-2xl" src={Marcelo} alt="" />
                </div>
                <div className=" w-auto sm:w-1/2 flex items-center">

                    <p className="text-center">Meu nome é Marcelo Gonzaga, desenvolvedor Full Stack com mais de 3 anos de experiência, apaixonado por transformar ideias em soluções digitais eficientes. Minha jornada começou como professor de informática em 2022, onde descobri minha vocação para a tecnologia. Em outubro de 2024, dei um novo passo ao ingressar no curso de Análise e Desenvolvimento de Sistemas, onde hoje aprimoro meus conhecimentos no segundo semestre.

                        Domino tecnologias como HTML, CSS, JavaScript, Dart, Flutter, Laravel, PHP, Tailwind e C#, além de experiência em APIs REST. Um dos meus projetos recentes inclui o desenvolvimento do site romafla.com.br, onde pude aplicar minha expertise em criação de interfaces funcionais e robustas.

                        Antes da transição para a área de desenvolvimento, atuei como Analista de Processos, experiência que me trouxe uma visão analítica e estratégica para resolver problemas complexos. Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e contribuir com soluções inovadoras.

                        Conecte-se comigo no LinkedIn e vamos conversar sobre tecnologia!</p>
                </div>
            </div>
        </div>
    );
}


export default Sobre;