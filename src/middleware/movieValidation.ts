import { error } from "console";
import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
        .isString()
        .withMessage("O titulo é obrigatorio")
        .isLength({min: 5})
        .withMessage("O titulo precisa ter no minimo 5 caractere"),
        body("rating")
        .isNumeric()
        .withMessage("A nota precisa ser um número.")
        .custom((value:number) => {
            if(value < 0 || value > 10){
                throw new Error("A nota precisa ser entre 0 e 10");
            } return true
        }),
        body("descriptions")
        .isString()
        .withMessage("Descrição é obrigatoria"),
        body("director")
        .isString()
        .withMessage("O diretor é obrigatorio"),
        body("poster")
        .isURL()
        .withMessage("A capa do filme precisa ser uma URL")

    ]
}