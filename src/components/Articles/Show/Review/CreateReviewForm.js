import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ContainerForm } from "./styles";
import { Button } from "../../../Button";

const schema = yupResolver.object({
  title: yup.string().min(10, "O titulo deve conter no minino 10 caracteres").required("O titulo é obrigatório"),
  body: yup.string().max(200, "A descrição pode ter no máximo 200 caracteres").required("A descrição é obrigatória")
}).required();

export function CreateReviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: yupResolver(schema)
  },
  );

  return(
    <ContainerForm>
      <form onSubmit={handleSubmit((data) => {console.log(data)})}>

        <h1>Deixe sua avaliação</h1>

        <input placeholder="Titulo" {...register("title")} />
        <span>{errors.title?.message}</span>

        <textarea placeholder="Descrição"{...register("description")} />
        <span>{errors.description?.message}</span>

        <div>
          <Button style="btn-return" name="Voltar" />
          <Button type="submit" style="btn-success" name="Enviar avaliação" />
        </div>
      </form>
    </ContainerForm>
  )
}