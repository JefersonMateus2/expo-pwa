export type Usuario = {
  id: string;
  nome: string;
  email: string;
};

export type UsuarioInput = Omit<Usuario, 'id'>;
