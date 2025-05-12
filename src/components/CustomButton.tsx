type Drops = {
    label: string
    onClick: ()=> void;
}


export const CustomButton = ({label, onClick}: Drops)=>{
    return(
        <button onClick={onClick} className="p-3 text-white bg-blue-500">{label}</button>
    )
}

