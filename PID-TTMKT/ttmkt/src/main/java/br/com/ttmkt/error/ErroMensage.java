package br.com.ttmkt.error;

public class ErroMensage extends RuntimeException {
	
	private String mensagem;
	
	private static final long serialVersionUID = 1L;

	public ErroMensage(String msg) {
		super(msg);
	}

	public ErroMensage(String msg, Throwable cause) {
		super(msg, cause);
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	
	
	
}
