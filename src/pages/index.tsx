import { CustomButton } from "@/components/CustomButton";

const Page = () => {
  function handleClick() {
    alert("Clicou");
  }

  function alertParams (msg: string){
    alert(msg);
  } 

  return (
      <div className="w-screen h-screen flex items-center justify-center">
        
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="p-3 bg-blue-700 text-white rounded-md m-3"
        >
        Clique 1
      </button>
      <button
        onClick={()=> alertParams ('Agora consigo passar o parametro')}
        className="p-3 bg-blue-700 text-white rounded-md"
        >
        Clique 2
      </button>

    </div>
      <div>
      <CustomButton label='testerre' onClick={handleClick}></CustomButton>
      </div>
    </div>
  );
};

export default Page;
