import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(dto: CreateUsuarioDto): import("./entities/usuario.entity").Usuario;
    findAll(): import("./entities/usuario.entity").Usuario[];
    findOne(id: string): import("./entities/usuario.entity").Usuario;
    update(id: string, dto: UpdateUsuarioDto): import("./entities/usuario.entity").Usuario;
    remove(id: string): void;
}
