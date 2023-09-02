import React from "react";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Promoções" />
                <FormControlLabel control={<Switch defaultChecked />} label="Novidades" />
            </FormGroup>

            <Button variant="contained" type="submit">Cadastrar</Button>


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

export default FormularioCadastro;