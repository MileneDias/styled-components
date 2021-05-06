import React from 'react';

import Img from 'react-image'

//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';

export default function Cartao(props){
    return (
        <div class='card'>
            <Img src={props.image} />
            <div class='container'>
                <h3><b tit={props.titulo} /></h3>
                <p tex={props.text} />
            </div>
        </div>
    )
}

/*
<Card >
            <CardContent >
                <Typography component="h5" variant="h5">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                </Typography>
            </CardContent>
        </Card>
*/