import Html from "../assets/svg/html.svg";
import Css from "../assets/svg/css.svg";
import Js from "../assets/svg/js.svg";
import Php from "../assets/svg/php.svg";
import Dart from "../assets/svg/dart.svg";
import Csharp from "../assets/svg/csharp.svg";
import Git from "../assets/svg/git.svg";
import Flutter from "../assets/svg/flutter.svg";
import Laravel from "../assets/svg/laravel.svg";


function myskills() {
    return (
        <div className="flex flex-col items-center  mt-20 bg-white/30 text-white" id="myskills">
            <h1 className="text-4xl mb-20" >Conhecimento</h1>

            <div className="flex flex-row justify-center items-center bg-white/30 p-20 rounded-2xl mb-10 shadow-xl/30">
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Html} alt="" /></div>
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Css} alt="" /></div>
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Js} alt="" /></div>
            </div>
            <div className="flex flex-row justify-center items-center bg-white/30 p-20 rounded-2xl mb-10 shadow-xl/30">

                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Php} alt="" /></div>
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Dart} alt="" /></div>
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Csharp} alt="" /></div>
            </div>

            <div className="flex flex-row justify-center items-center bg-white/30 p-20 rounded-2xl mb-10 shadow-xl/20 hover:shadow-xl/30">
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Laravel} alt="" /></div>
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Flutter} alt="" /></div>
                <div><img className="w-36 h-36 m-10 hover:cursor-pointer bg-amber-50 p-10 rounded-3xl shadow-xl/20 hover:shadow-xl/30" src={Git} alt="" /></div>

            </div>
        </div>
    );

}
export default myskills;