import {  useRef } from "react"

type boutton={
valeur:string
}



function App() {
let ref1=useRef<null|HTMLDivElement>(null);
let supprime:boolean=false;

  function supprimer(){
    if(ref1.current)
  {      
  const a=ref1.current.innerText;
    ref1.current.innerText=a.slice(0,a.length-1)
  }
  }

  function resultat()
 {
  if(ref1.current)
  {
  try {
    ref1.current.innerText=eval(ref1.current.innerText)
  } catch (error) {
    console.error(error)
  }
  finally{
    supprime=true
  }

  }
 }


  function afficher(e:React.MouseEvent<HTMLDivElement>)
  {
   const a=e.target as HTMLDivElement;
   if(ref1.current)
   {
    if(a.innerHTML=="=")
      resultat();
    else if(a.innerHTML=="DEL")
      supprimer();
    else 
    { if(supprime==false)
      {ref1.current.innerHTML+=a.innerText;}
      else{
        supprime=false ;
        ref1.current.innerText='';
        ref1.current.innerText+=a.innerHTML;
      }
    }
   }
  }


  function Boutton(props:boutton)
  {
  return <div className=" w-[70px] h-[70px] rounded-full flex justify-center items-center text-white bg-amber-400 text-[20px] hover:bg-yellow-200 cursor-pointer" onClick={afficher}>
   {props.valeur}
  </div>
  }

    return (
      <div className="bg-gray-800 w-[350px] h-[70%] rounded-[10px] flex flex-col items-center pt-4 gap-y-4">
        <div className="bg-gray-500 w-[90%] h-[100px] rounded-[10px] text-[30px] text-white " ref={ref1}></div>
        <div className=" w-[90%] h-[70%] flex justify-center content-start flex-wrap gap-[9px]">
          <Boutton valeur="1"></Boutton>
          <Boutton valeur="2"></Boutton>
          <Boutton valeur="3"></Boutton>
          <Boutton valeur="4"></Boutton>
          <Boutton valeur="5"></Boutton>
          <Boutton valeur="6"></Boutton>
          <Boutton valeur="7"></Boutton>
          <Boutton valeur="8"></Boutton>
          <Boutton valeur="9"></Boutton>
          <Boutton valeur="0"></Boutton>
          <Boutton valeur="*"></Boutton>
          <Boutton valeur="/"></Boutton>
          <Boutton valeur="+"></Boutton>
          <Boutton valeur="-"></Boutton>
          <Boutton valeur="="></Boutton>
          <Boutton valeur="DEL"></Boutton>
        </div>
      </div>
    )
  }
  
  export default App