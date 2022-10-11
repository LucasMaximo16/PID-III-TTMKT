function Tabela({ vetor, selecionar }) {
    return (
        <>
            <table className="tableLucas table table-striped">
                <thead>
                    <tr className="thead">
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

                                <td>{indice + 1}</td>
                                <td>{Obj.nome}</td>
                                <td>{Obj.sobrenome}</td>
                                <td>{Obj.cpf}</td>
                                <td>{Obj.telefone}</td>
                                <td>{Obj.cargo}</td>
                                <div>
                                    <td><p className="fw-bold mb-1">{Obj.email}</p></td>
                                </div>
                                <div>
                                    <td><button onClick={() => { selecionar(indice) }} className="btn btn-success">Selecionar</button></td>
                                </div>

                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </>
    )
}
export default Tabela;