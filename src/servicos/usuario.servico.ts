import { Usuario } from "src/entidades/usuario.entidades";

export class UsuarioServico{

    getUsuarios(): Usuario[]{
        var Usuario = [
            new Usuario("Matheus", "mmg01.2003@gmail.com", "bebe"),
        ];
        return Usuario;
    }
}