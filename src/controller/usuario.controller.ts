
import { Controller, Get } from "@nestjs/common";
import { Usuario } from "src/entidades/usuario.entidades";
import { UsuarioServico } from "src/servicos/usuario.servico";


@Controller({
    path: "Usuario"
})

export class UsuarioController {
    constructor(private UsuarioServico: UsuarioServico) {
        
    }

    @Get("listarUsuario")
    public listarUsuario(): Usuario[]{

        return this.UsuarioServico.getUsuarios();
  }


  public getUsuarioporId(id: number): Usuario | underfined{
    var usuario
  }
}
