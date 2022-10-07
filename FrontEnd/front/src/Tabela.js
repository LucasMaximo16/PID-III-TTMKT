function Tabela({vetor,selecionar}){
    return(
        <>
        <table className="table table-bordered border-success">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Cargo</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((Obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{Obj.nome}</td>
                            <td>{Obj.sobrenome}</td>
                            <td>{Obj.cpf}</td>
                            <td>{Obj.telefone}</td>
                            <td>{Obj.cargo}</td>
                            <td>{Obj.email}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                            
                        </tr>
                    ))
                }
            </tbody>

        </table>
        
        </>
    )
}
export default Tabela;