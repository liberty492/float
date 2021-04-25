import React,{useState} from 'react';
import {Button, ButtonGroup,Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    paper:{
        textAlign: 'left',
        backgroundColor: '#fff',
    },
    grid_item:{
        backgroundColor: '#fff',
        padding: '15px',
        boxShadow:' 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    },
    nav_link:{
        textDecoration:'none',
        display:'block',
        padding: '15x',
        height: '100%',
    },
    button:{
        width: '100%',
    },
    btnBottom:{
        borderBottom: '2px solid red',
    }
});
function CommanGrid(props) {
    const [state, setState] = useState('');
    const classes = useStyles();
    return (
        <div>
            <Grid container >
                <Grid item md = {12} className = {classes.grid_item}>
                    <Paper className = {classes.paper}>
                        <ButtonGroup style = {{width:'50%'}} >
                            <Button 
                                 onClick = {()=>{setState('conversation');}}
                                className = {`${classes.button} ${state==='conversation'?classes.btnBottom:''}`}  
                                variant = {state==='conversation'?"contained":"outlined"}
                            > 
                                <NavLink to ="/conversation" className = {classes.nav_link}> Conversation</NavLink>
                            </Button>
                            <Button
                                onClick = {()=>{setState('notes');}} 
                                className = {`${classes.button} ${state==='notes'?classes.btnBottom:''}`}
                                variant = {state==='notes'?"contained":"outlined"}> 
                                <NavLink to ="/notes" className = {classes.nav_link}>Note</NavLink>
                            </Button>
                        </ButtonGroup>
                        
                        {props.children}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default CommanGrid;
