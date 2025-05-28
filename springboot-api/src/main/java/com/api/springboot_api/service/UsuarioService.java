package com.api.springboot_api.service;

import com.api.springboot_api.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class UsuarioService {

    private final List<Usuario> usuarios = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong();

    public List<Usuario> listarTodos() {
        return usuarios;
    }

    public Optional<Usuario> buscarPorId(Long id) {
        return usuarios.stream().filter(u -> u.getId().equals(id)).findFirst();
    }

    public Usuario criar(Usuario usuario) {
        usuario.setId(idCounter.incrementAndGet());
        usuarios.add(usuario);
        return usuario;
    }

    public Optional<Usuario> atualizar(Long id, Usuario dadosAtualizados) {
        return buscarPorId(id).map(usuario -> {
            usuario.setNome(dadosAtualizados.getNome());
            usuario.setEmail(dadosAtualizados.getEmail());
            return usuario;
        });
    }

    public void deletar(Long id) {
        usuarios.removeIf(u -> u.getId().equals(id));
    }
}
