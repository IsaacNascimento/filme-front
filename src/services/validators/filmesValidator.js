export const FilmeValidator = {
   nome: {
     required: 'O campo nome é obrigatório',
     minLength: {
        value: 3,
        message: "Qtd mínima de caracteres não informado"
    },
    maxLength: {
        value: 50,
        message: "Qtd máxima de caracteres ultrapassada"
    },
    min: {
        value: 3,
        message: "O valor mínimo é 3"
    },
   }
}