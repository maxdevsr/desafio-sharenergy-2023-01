import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

function Login() {
const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório !")
      .email("Formato de email inválido !"),

    password: yup
      .string()
      .required("Senha obrigatória !")
      .min(8, "Necessário de no mínimo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitedForm = (data: object) => {
    console.log("oi", data)
  };


return (
    <form className="flex flex-col justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(submitedForm)}>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            EMAIL
           <span className="text-red-600">{errors && errors.email?.message as string}</span>
        </label>
        <input className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("email")}
        placeholder="Seu email !"
        />
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          SENHA
          <span className="text-red-600">
            {errors && errors.password?.message as string}
          </span>
        </label>
        <input className="mb-6  shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register("password")}
        placeholder="************"
        type="password"
        />
        <div className="w-[100%]">
          <button type="submit" className="mb-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
            Login
          </button>
        </div>
        <label className="md:w-2/3 flex text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox"/>
          <span className="text-sm">
            Manter conectado
          </span>
        </label>
    </form>
    )
}
export default Login