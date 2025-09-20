import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  private seq = 1;
  private usuarios = new Map<number, Usuario>();

  create(dto: CreateUsuarioDto): Usuario {
    const usuario: Usuario = { id: this.seq++, ...dto };
    this.usuarios.set(usuario.id, usuario);
    return usuario;
  }

  findAll(): Usuario[] {
    return Array.from(this.usuarios.values());
  }

  findOne(id: number): Usuario {
    const u = this.usuarios.get(id);
    if (!u) throw new NotFoundException('Usuário não encontrado');
    return u;
  }

  update(id: number, dto: UpdateUsuarioDto): Usuario {
    const current = this.usuarios.get(id);
    if (!current) throw new NotFoundException('Usuário não encontrado');
    const updated: Usuario = { ...current, ...dto };
    this.usuarios.set(id, updated);
    return updated;
  }

  remove(id: number): void {
    const ok = this.usuarios.delete(id);
    if (!ok) throw new NotFoundException('Usuário não encontrado');
  }
}
