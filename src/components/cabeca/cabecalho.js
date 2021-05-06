import React from 'react'
import Img from 'react-image'

import DataGrid from '@babel/template';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ComputerIcon from '@material-ui/icons/Computer';

export default function Cabecalho(props){
    return (
        <div>
            <Img src={props.image} />
            <DataGrid
            columns={[
                <ComputerIcon >Somente para desktop</ComputerIcon>,
                <SubtitlesIcon>Criado com componentes</SubtitlesIcon>,
                <CheckCircleOutlineIcon>Facil aproveitamento</CheckCircleOutlineIcon>, 
                
            ]}
            />
        
        </div>
    )
}