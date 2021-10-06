import React, { Component } from 'react';
import useStyles from './styles';
import { Typography, Container, Buttom } from '@material-ui/core';
import bodegas from "../Datos/bodegas.json";
import { useParams } from 'react-router';

const DetalleBodega = () =>{
    
    const classes = useStyles();
    const { id } = useParams();
    let bodega = bodegas.filter((detBodega) => detBodega.id === id);

    return (
        <>
            <div className={classes.barra} />
            <div>
                {bodega.map((bod, index) => (
                    <div key={index}>
                        <Typography className={classes.subtitulo2} align="center" variant="h4" color="inherit">{bod.nombre}</Typography>
                    </div>
                ))}
            </div>
        </>
    )
}
export default DetalleBodega