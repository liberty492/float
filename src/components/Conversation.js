import React from 'react';
import {makeStyles,Paper,TextareaAutosize,Typography,} from '@material-ui/core';
const useStyles = makeStyles({
    paper:{
        width: '467px',
       // height: '534px',
        backgroundColor: '#e9eaeb',
        borderRadius: '0px 4px 4px 4px',
        border: '1px solid #e0e0e0',
        padding: '5px',
        opacity: '1',
    },
    typograpgy:{
        width: '455px',
        //height: '49px',
        padding: '10px',
        backgroundColor: '#3b3c39',
        border: '1px solid #e0e0e0',
        borderRadius: '4px 4px 0px 0px',
        color: '#FFFFFF',
        opacity: '1',
    },
    textArea:{
        width: '455px',
        backgroundColor: '#FFFFFF',
        borderRadius: '0px 4px 4px 4px',
        border: '1px solid #e0e0e0',
        outline: '#e0e0e0',
        padding: '10px',
    }
   
});
export default function Conversation() {
    const classes = useStyles();

    return (
        <Paper className = {classes.paper}>
            <Typography className = {classes.typograpgy} >Lorem aliqua officia esse 
            Velit dolor <span>adipisicing culpa enim sint culpa voluptate ad reprehenderit consequat sint laborum ut excepteur.</span></Typography>
            <TextareaAutosize fullWidth rows={30} className = {classes.textArea} />
        </Paper>
    )
}
