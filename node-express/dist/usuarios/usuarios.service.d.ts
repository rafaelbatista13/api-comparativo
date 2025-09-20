import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosService {
    private seq;
    private usuarios;
    create(dto: CreateUsuarioDto): Usuario;
    findAll(): Usuario[];
    findOne(id: number): Usuario;
    update(id: number, dto: UpdateUsuarioDto): Usuario;
    remove(id: number): void;
}
