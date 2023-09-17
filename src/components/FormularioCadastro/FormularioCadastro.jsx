import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetatos, setDados] = useState("");

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetatos);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado Pelo Cadastro!</Typography>
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetatos, ...dados })
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}</>
}

export default FormularioCadastro;