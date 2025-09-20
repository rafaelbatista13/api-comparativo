"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    constructor() {
        this.seq = 1;
        this.usuarios = new Map();
    }
    create(dto) {
        const usuario = { id: this.seq++, ...dto };
        this.usuarios.set(usuario.id, usuario);
        return usuario;
    }
    findAll() {
        return Array.from(this.usuarios.values());
    }
    findOne(id) {
        const u = this.usuarios.get(id);
        if (!u)
            throw new common_1.NotFoundException('Usuário não encontrado');
        return u;
    }
    update(id, dto) {
        const current = this.usuarios.get(id);
        if (!current)
            throw new common_1.NotFoundException('Usuário não encontrado');
        const updated = { ...current, ...dto };
        this.usuarios.set(id, updated);
        return updated;
    }
    remove(id) {
        const ok = this.usuarios.delete(id);
        if (!ok)
            throw new common_1.NotFoundException('Usuário não encontrado');
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
