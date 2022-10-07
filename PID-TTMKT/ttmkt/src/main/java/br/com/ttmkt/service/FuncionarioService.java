package br.com.ttmkt.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.ttmkt.domain.Funcionario;
import br.com.ttmkt.repository.FuncionarioRepository;

@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funRepository;
	
	private String mensagem = "Sucesso";

	public ResponseEntity<?> cadastrar(Funcionario funcionario) {
		
		funcionario.getNome();
		funcionario.getSobrenome();
		funcionario.getCpf();
		funcionario.getEmail();
		funcionario.getTelefone();
			
		return new ResponseEntity<Funcionario>(funRepository.save(funcionario), HttpStatus.CREATED);
	}

	public Funcionario getBuscarFuncionarioPorId(Integer id) {
		
		 Optional<Funcionario> optional = funRepository.findById(id);
		 if(!optional.isPresent()) {
			 return null;
		 }
		 
		 return optional.get();
	}
	
	public ResponseEntity<Funcionario> deletarFuncionarioPorId(Integer id) {
		funRepository.deleteById(id);
		System.out.println(mensagem);
		return new ResponseEntity<Funcionario>(HttpStatus.OK);
	}
		 

	public List<Funcionario> getAllFuncionario() {
		return funRepository.findAll() ;
	}
	
	public ResponseEntity<?> alterar(Funcionario funcionario) {
		return new ResponseEntity<Funcionario>(funRepository.save(funcionario), HttpStatus.OK);
	} 
}
