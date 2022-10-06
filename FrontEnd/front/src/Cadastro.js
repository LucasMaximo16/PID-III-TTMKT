    function cadastrar({botao,eventoTeclado,cadastrar, obj,cancelar,remover}) {
    return ( 
        <>
        <h1>Cadastrar Novo Usuario</h1>
        <form>
            <div class = "row g-3">
                <div class = "col-md-6">
                    <input type='text' value={obj.nome} onChange={eventoTeclado} name="nome" placeholder='Nome' className='form-control' />
                </div>

                <div className="col-md-6">
                    <input type='text' value={obj.sobrenome} onChange={eventoTeclado} name="sobrenome"  placeholder='Sobrenome' className='form-control'/>
                </div>

                <div className="col-md-6">
                    <input type='text' value={obj.cpf} onChange={eventoTeclado} name="cpf"  placeholder='CPF' className='form-control'/>
                </div>

                <div className="col-md-12">
                    <input type='text' value={obj.cargo} onChange={eventoTeclado} name="cargo"  placeholder='Cargo' className='form-control'/>
                </div>

                <div className="col-md-24">
                    <input type='text' value={obj.email} onChange={eventoTeclado} name="email"  placeholder='Email' className='form-control'/>
                </div>

                <div className="col-md-6">
                    <input type='text' value={obj.telefone} onChange={eventoTeclado} name="telefone"  placeholder='Telefone' className='form-control'/>
                </div>
            </div>
            
            
            {
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary"/>
                :
                <div>
                    <input type='button' onClick={remover} value="Remover" className="btn btn-warning" />
                    <input type='button' value="Alterar" className="btn btn-danger" />
                    <input type='button' onClick={cancelar} value="Cancelar" className="btn btn-secondary"/>
                </div>
                    
            }


           
        </form>
        </>
    )
}
export default cadastrar;