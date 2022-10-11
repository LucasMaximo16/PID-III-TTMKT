package br.com.ttmkt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.ttmkt.domain.Funcionario;
import br.com.ttmkt.error.ErroMensage;
import br.com.ttmkt.repository.FuncionarioRepository;

@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funRepository;

	public ResponseEntity<?> cadastrar(Funcionario funcionario) {
		if ("".equals(funcionario.getNome())) {
			throw new ErroMensage("Nome do funcionario é obrigatório");
		}
		if ("".equals(funcionario.getCpf())) {
			throw new ErroMensage("Nome do funcionario é obrigatório");
		}
//		if(funcionario.getNome().equals("")) { 
//			erroMensage.setMensagem("Campo nome obrigatório");
//			return new ResponseEntity<ErroMensage>(erroMensage,HttpStatus.BAD_REQUEST);
//		}else if (funcionario.getSobrenome().equals("")){
//			erroMensage.setMensagem("Campo Sobrenome é obrigatório");
//			return new ResponseEntity<ErroMensage>(erroMensage,HttpStatus.BAD_REQUEST);
//		}else if (funcionario.getCpf() == ' '){
//			erroMensage.setMensagem("Campo CPF é obrigatório");
//			return new ResponseEntity<ErroMensage>(erroMensage,HttpStatus.BAD_REQUEST);
//		}else if (funcionario.getSobrenome().equals("")){
//			erroMensage.setMensagem("Campo Sobrenome é obrigatório");
//			return new ResponseEntity<ErroMensage>(erroMensage,HttpStatus.BAD_REQUEST);
//		}else if (funcionario.getCargo().equals("")){
//			erroMensage.setMensagem("Campo Cargo é obrigatório");
//			return new ResponseEntity<ErroMensage>(erroMensage,HttpStatus.BAD_REQUEST);
//		}else if (funcionario.getEmail().equals("")){
//			erroMensage.setMensagem("Campo Email é obrigatório");
//			return new ResponseEntity<ErroMensage>(erroMensage,HttpStatus.BAD_REQUEST);
//		}else if (funcionario.getTelefone() == ' '){
//			erroMensage.setMensagem("Campo Sobrenome é obrigatório");
//			return new ResponseEntity<ErroMensage>(erroMensage,HttpStatus.BAD_REQUEST);
//		}else {
//			
		return new ResponseEntity<Funcionario>(funRepository.save(funcionario), HttpStatus.CREATED);
	}

	public Funcionario getBuscarFuncionarioPorId(Integer id) {

		Optional<Funcionario> optional = funRepository.findById(id);
		if (!optional.isPresent()) {
			return null;
		}

		return optional.get();
	}

	public ResponseEntity<Funcionario> deletarFuncionarioPorId(Integer id) {
		funRepository.deleteById(id);
		return new ResponseEntity<Funcionario>(HttpStatus.OK);
	}

	public List<Funcionario> getAllFuncionario() {
		return funRepository.findAll();
	}

	public ResponseEntity<?> alterar(Funcionario funcionario) {
		return new ResponseEntity<Funcionario>(funRepository.save(funcionario), HttpStatus.OK);
	}
}
