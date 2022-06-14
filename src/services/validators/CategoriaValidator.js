export const CategoriaValidator = {
   nome: {
     required: 'O campo nome é obrigatório',
     minLength: {
        value: 2,
        message: "Qtd mínima de caracteres não informado"
    },
    maxLength: {
        value: 50,
        message: "Qtd máxima de caracteres ultrapassada"
    },
    min: {
        value: 2,
        message: "O valor mínimo é 3"
    },
   }
}