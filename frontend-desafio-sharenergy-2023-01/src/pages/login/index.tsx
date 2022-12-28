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
    <form onSubmit={handleSubmit(submitedForm)}>
        <label>
        EMAIL
        {errors && errors.email?.message as string}
        </label>
        <input
        {...register("email")}
        placeholder="Seu email !"
        />

        <label>
        SENHA
         {errors && errors.email?.message as string}
        </label>
        <input
        {...register("password")}
        placeholder="************"
        type="password"
        />
        <div>
        <button type="submit">LOGIN !</button>
        </div>
    </form>
    )
}
export default Login