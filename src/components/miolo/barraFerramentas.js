import React from 'react'

import DataGrid from '@babel/template';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ComputerIcon from '@material-ui/icons/Computer';

export default function BarraFerramentas(props){
    return (
        <div>
            <DataGrid
            columns={[
                <ComputerIcon >{props.ferramenta1}</ComputerIcon>,
                <SubtitlesIcon>{props.ferramenta2}</SubtitlesIcon>,
                <CheckCircleOutlineIcon>{props.ferramenta3}</CheckCircleOutlineIcon>, 
                
            ]}
            />
        
        </div>
    )
}