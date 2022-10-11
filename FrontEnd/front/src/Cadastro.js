import Header from "./Header/Header";
import Nav from "./Nav/Nav";

function cadastrar({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
    return (
        <>
            <Nav />
            <main>
                <div className="container">
                    <div>
                        <Header />
                    </div>
                    <form id="form" className="form">
                        <div className="form-control">
                            <label>Nome</label>
                            <input type='text' id='nome' value={obj.nome} onChange={eventoTeclado} name="nome" placeholder='Digite o nome do usuário...' />
                            <i className="fas fa-circle-exclamation"></i>
                            <i className="fas fa-check-circle"></i>
                            <small>Mensagem de erro</small>
                        </div>

                        <div className="form-control ">
                            <label>Sobrenome</label>
                            <input type='text' id="Sobrenome" value={obj.sobrenome} onChange={eventoTeclado} name="sobrenome" placeholder='Sobrenome' />
                            <i className="fas fa-circle-exclamation"></i>
                            <i className="fas fa-check-circle"></i>
                            <small>Mensagem de erro</small>
                        </div>

                        <div className="form-control">
                            <label>CPF</label>
                            <input type='text' id="cpf" value={obj.cpf} onChange={eventoTeclado} name="cpf" placeholder='---.---.--' />
                            <i className="fas fa-circle-exclamation"></i>
                            <i className="fas fa-check-circle"></i>
                            <small>Mensagem de erro</small>
                        </div>

                        <div className="form-control">
                            <label>Cargo</label>
                            <input type='text' id="cargo" value={obj.cargo} onChange={eventoTeclado} name="cargo" placeholder='Digite o cargo do funcionario' />
                            <i className="fas fa-circle-exclamation"></i>
                            <i className="fas fa-check-circle"></i>
                            <small>Mensagem de erro</small>
                        </div>

                        <div className="form-control">
                            <label>Email</label>
                            <input type='text' id="email" value={obj.email} onChange={eventoTeclado} name="email" placeholder='Email' />
                            <i className="fas fa-circle-exclamation"></i>
                            <i className="fas fa-check-circle"></i>
                            <small>Mensagem de erro</small>
                        </div>

                        <div className="form-control">
                            <label>Telefone</label>
                            <input type='text' id="telefone" value={obj.telefone} onChange={eventoTeclado} name="telefone" placeholder='(+55)(DD)(9987-9879)' className='form-control' />
                            <i className="fas fa-circle-exclamation"></i>
                            <i className="fas fa-check-circle"></i>
                            <small>Mensagem de erro</small>
                        </div>

                        {
                            botao
                                ?
                                <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary form-buttom" />
                                :
                                <div>
                                    <input type='button' onClick={remover} value="Remover" className="btn btn-warning" />
                                    <input type='button' onClick={alterar} value="Alterar" className="btn btn-danger btnClass1" />
                                    <input type='button' onClick={cancelar} value="Cancelar" className="btn btn-secondary btnClass " />
                                </div>

                        }

                    </form>
                </div>
            </main>
        </>
    )
}
export default cadastrar;