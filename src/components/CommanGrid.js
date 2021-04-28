import React,{useState} from 'react';
import {Button, Grid, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
    paper:{
    position: 'absolute',
    top: '20px',
    left: '30%',
    padding: '8px',
    width: '490px',
    //height: '592px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    opacity: '1',
    },
   button:{
    width: '168px',
    height: '34px',
    letterSpacing: '0px',
    color: '#808080',
    border: '1px solid #d7d7d7',
    textAlign: 'left',
    opacity: '1'
   },
   buttonCss:{
    marginLeft:'10px',
    width:'168px',
    height: '34px',
    color:'#242424',
    letterSpacing: '0px',
    //backgroundColor : '#f2f2f2',
    border: '1px solid #d7d7d7',
    opacity: '1',
   },
   btnBorderBottom:{
    borderBottom: '3px solid #f7a445',
    backgroundColor : '#f2f2f2',
   }
});
function CommanGrid(props) {
    const classes = useStyles();
    const [isActive, setisActive] = useState(false)
   
    const  getRoute = route =>{
       let status = route==='conversation'?true:false;
        setisActive(status);
        props.history.push(`/${route}`);
    
    }
    return (
        <div>
            <Grid container >
                <Grid item md = {12} >
                    <Paper className = {classes.paper }>
                            <Button 
                                 onClick = {()=>getRoute('conversation')}
                                className = {`${classes.button} ${isActive===true?classes.btnBorderBottom:''}`}  
                            >  Conversation
                            </Button>
                            <Button
                                onClick = {()=>getRoute('notes')} 
                                className = {`${classes.buttonCss} ${isActive===false?classes.btnBorderBottom:''}`}
                            > Notes
                            </Button>
                        {props.children}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter( CommanGrid);
