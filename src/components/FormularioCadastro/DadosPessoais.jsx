import React, { useState } from "react";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function DadosPessoais({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                id="nome"
                label="Nome"
                type="text"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                id="sobrenome"
                label="Sobrenome"
                type="text"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={(event) => {
                    const ehValido = validarCPF(cpf)
                    setErros({ cpf: ehValido })
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch checked={promocoes} onChange={(event) => {
                    setPromocoes(event.target.checked)
                }} name="promocoes" color="primary" />}
            />
            <FormControlLabel
                label="Novidades"
                control={<Switch checked={novidades} onChange={(event) => {
                    setNovidades(event.target.checked)
                }} name="novidades" color="primary" />}
            />

            <Button variant="contained" type="submit" color="primary">
                Cadastrar
            </Button>


            {/* <label>Nome</label>
            <input type="text" />

            <label>Sobrenome</label>
            <input type="text" />

            <label>CPF</label>
            <input type="text" />

            <label>Promoções</label>
            <input type="checkbox" />

            <label>Novidades</label>
            <input type="checkbox" />

            <button type="submit">Cadastrar</button> */}

        </form>

    );
}

export default DadosPessoais;