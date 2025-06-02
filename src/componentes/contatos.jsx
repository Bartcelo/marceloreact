import Whasapp from "../assets/svg/whatsapp.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import Github from "../assets/svg/git.svg";



function Contatos() {



    const linkwhatsapp = () => {
        window.open("https://api.whatsapp.com/send?phone=5511953390695&text=Oi%20Marcelo%20tudo%20bem%2C%20pode%20me%20ajudar%20com%20....", "_blank");
    }
    const linkgithub = () => {
        window.open("https://github.com/Bartcelo", "_blank");
    }
    const linklinkdin = () => {
        window.open("https://www.linkedin.com/in/marcelogonzagadev/", "_blank");
    }

    return (
        <div className="flex flex-col justify-center items-center mt-20 bg-white/30" id="contatos">
            <h1 className="text-4xl mb-20 text-white" >Contatos</h1>

            <div className="flex flex-row justify-center items-center">
                <div><img className="w-36 m-10 hover:cursor-pointer" src={Whasapp} onClick={linkwhatsapp} alt="" /></div>
                <div><img className="w-36 m-10 hover:cursor-pointer" src={Linkedin} onClick={linklinkdin} alt="" /></div>
                <div><img className="w-36 m-10 hover:cursor-pointer" src={Github} onClick={linkgithub} alt="" /></div>
            </div>
        </div>
    )
}

export default Contatos;