package br.com.ttmkt.resourse;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.ttmkt.domain.Funcionario;
import br.com.ttmkt.service.FuncionarioService;

@RestController
@RequestMapping(value = "/funcionario")
public class FuncionarioController {

	@Autowired
	private FuncionarioService funcionarioService;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Funcionario funcionario) {

		funcionario = funcionarioService.cadastrar(funcionario.getNome(), funcionario.getSobrenome(),
				funcionario.getCpf(), funcionario.getTelefone(), funcionario.getEmail(), funcionario.getCargo(),
				funcionario.getLocalDate());

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(funcionario.getId())
				.toUri();

		return ResponseEntity.created(uri).build();

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Funcionario> buscarFuncionario(@PathVariable("id") Integer id) {
		Funcionario buscarFuncionarioPorId = funcionarioService.getBuscarFuncionarioPorId(id);

		return ResponseEntity.ok().body(buscarFuncionarioPorId);
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Funcionario>> buscarListaFuncionario() {
		List<Funcionario> buscarFuncionarioPorLista = funcionarioService.getAllFuncionario();

		return ResponseEntity.ok().body(buscarFuncionarioPorLista);
	}

	@RequestMapping(value = "/deletar/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Funcionario> removerFuncionario(@PathVariable("id") Integer id) {
		return funcionarioService.deletarFuncionarioPorId(id);
	}
}
