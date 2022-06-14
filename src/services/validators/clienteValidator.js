export const ClienteValidator = {
  nome: {
    required: "O campo nome é obrigatório",
    minLength: {
      value: 3,
      message: "Qtd mínima de caracteres não informado",
    },
    maxLength: {
      value: 50,
      message: "Qtd máxima de caracteres ultrapassada",
    },
    min: {
      value: 3,
      message: "O valor mínimo é 3",
    },
  },
  email: {
    required: "O campo email é obrigatório",
    minLength: {
      value: 3,
      message: "Qtd mínima de caracteres não informado",
    },
    maxLength: {
      value: 50,
      message: "Qtd máxima de caracteres ultrapassada",
    },
    min: {
      value: 3,
      message: "O valor mínimo é 3",
    },
  },
  telefone: {
    required: "O campo telefone é obrigatório",
    minLength: {
      value: 15,
      message: "Qtd mínima de caracteres não informado",
    },
    maxLength: {
      value: 15,
      message: "Qtd máxima de caracteres ultrapassada",
    },
    min: {
      value: 15,
      message: "O valor mínimo é 15",
    },
  },
  senha: {
    required: "O campo senha é obrigatório",
    minLength: {
      value: 5,
      message: "Qtd mínima de caracteres não informado",
    },
    maxLength: {
      value: 6,
      message: "Qtd máxima de caracteres ultrapassada",
    },
    min: {
      value: 5,
      message: "O valor mínimo é 5",
    },
  },
};
