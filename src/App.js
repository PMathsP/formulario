import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import { validarCPF, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {

	render() {
		return (
			<Container component="article" maxWidth="sm">
				<Typography align='center' variant='h3' component="h1">Formulário de Cadastro</Typography>
				<ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
					<FormularioCadastro aoEnviar={aoEnviarForm} />
				</ValidacoesCadastro.Provider>
			</Container>
		);
	}
}

function aoEnviarForm(dados) {
	console.log(dados);
}

export default App;
