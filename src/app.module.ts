import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './controller/usuario.controller';
import { usuarioServico } from './entidades/usuario.entidade';
@Module({
  imports: [],
  controllers: [AppController, UsuarioController],
  providers: [AppService, usuarioServico],
})
export class AppModule {}
