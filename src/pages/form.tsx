import { FormEvent } from "react"

export const FormPage = ()=>{

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert("Mandando")
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl mb-5">Form de Login</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" />
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default FormPage