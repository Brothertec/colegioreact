import React from "react";
import { Redirect, useHistory } from "react-router-dom";

export default function ModalSenha() {

    const history = useHistory();

    
    
    function handleKeyPress(event){
        event.preventDefault();
        if (event.keyCode === 13) {
            verificaSenha(event);
        }
    }

    function verificaSenha(event) {
        event.preventDefault();
        var senhaInformada = document.getElementById('senha').value;
        var alertSenha = document.getElementById('alertSenha');
        console.log(senhaInformada);
        if (senhaInformada !== '123456') {
            alertSenha.classList.remove('d-none');
        }
        else {
            console.log('Redirect');
            document.querySelector("#btnFechaModal").click();
            console.log('btnClick');
            history.push('/Tarefas'); 
        }
    }


    return (

        <div className="modal fade" id="modal-senha" tabIndex="-1" role="dialog" aria-labelledby="modalSenhaLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalSenhaLabel">Senha</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" onKeyUp={handleKeyPress}>
                        <form onSubmit={handleKeyPress}>
                            <div className="form-group">
                                <div className="alert alert-danger d-none" role="alert" id="alertSenha">
                                    A senha informada está incorreta! Tente novamente!
                                </div>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" className="form-control" id="senha" aria-describedby="senhaHelp" />
                                <small id="senhaHelp" className="form-text text-muted">Digite a senha da turma selecionada</small>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={verificaSenha}>Enviar</button>
                        <button data-dismiss="modal" className="d-none" id="btnFechaModal"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}