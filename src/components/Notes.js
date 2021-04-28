import React,{useState} from 'react';
import {Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Grid,Button, TextareaAutosize, TableHead, InputBase } from '@material-ui/core';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
const useStyles = makeStyles({
    typograpgy:{
        width: '455px',
        //height: '49px',
        padding: '10px',
        backgroundColor: '#3b3c39',
        border: '1px solid #e0e0e0',
        borderRadius: '4px 4px 0px 0px',
        opacity: '1',
        '& span':{
            color: '#fbc600',
        }
    },
    paper:{
        width: '467px',
       // height: '534px',
        backgroundColor: '#e9eaeb',
        borderRadius: '0px 4px 4px 4px',
        border: '1px solid #e0e0e0',
        padding: '5px',
        opacity: '1',
    },
    inputText:{
        width: '225px',
        height: '35px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #d7d7d7',
        opacity: '1',
        marginTop: '10px',
        color: '#94969a',
        letterSpacing: '0px',
        outline: 'none',
    },
    clearButton:{
        width:'95px',
        height: '35px',
        backgroundColor: '#d7d7d7',
        borderRadius: '5px',
        marginTop:'10px',
        marginLeft: '3px',
        color: '#3b3c39',
        opacity: '1',
    },
    table:{
        width: '430px',
        height: '150px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #d7d7d7',
        borderRadius: '4px',
        opacity: '1',
       
        
    },
    theading:{
        width: '420px',
        height: '28px',
        backgroundColor: '#e9eaeb',
        border: '1px solid #d7d7d7',
        borderRadius: '4px 4px 0px 0px',
        opacity: '1', 
    },
    thcell:{
        width:'46px',
        height: '20px',
        backgroundColor:'#fff',
        color:'#000',
        borderRadius: '2px',
        border: '1px solid #d7d7d7',
        opacity: '1',
    },
    note:{
        height: '147px !importent',
        width: '454px',
        border: '1px solid #e0e0e0',
        borderRadius: '0px 0px 4px 4px',
        opacity: '1',
        color: '#000000',
        backgroundColor:'red !importent',
    },
    tcell:{
        border: '1px solid #d7d7d7',
    }
        
});
const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
        width: '410px',
        height: '51px',
        opacity: '1', 
        backgroundColor: '#fff',
      '&:nth-of-type(odd)': {
        backgroundColor: '#e9eaeb',
      },
    },
  }),
)(TableRow);
const CssButton = withStyles({
    root: {
        width:'106px',
        height: '35px',
        backgroundColor: '#33657f',
        border: '1px solid #d7d7d7',
        borderRadius: '5px',
        opacity: '1',
        color: '#FFFFFF',
        letterSpacing: '0px',
        marginTop: '10px',
    }
})(Button);


function Notes() {
    const classes = useStyles();
    const tableHead = ['Team','Reason','Status','Details'];
    const  initialNotes = [
        {Team:'Team1',Reason:'Reason 1',Status:'open',Details:'Minim nisi duis aliqua aliquip nulla do magna ad nostrud excepteur ea dolor id.'},
        {Team:'Team2',Reason:'Reason 2',Status:'close',Details:'Minim nisi duis aliqua aliquip nulla do magna ad nostrud excepteur ea dolor id.'},
        {Team:'Team3',Reason:'Reason 3',Status:'pending',Details:'Minim nisi duis aliqua aliquip nulla do magna ad nostrud excepteur ea dolor id.'},
    ];
    const [notes, setnotes] = useState(initialNotes);
    const [newNote, setnewNote] = useState('');
    const [searchKey, setsearchKey] = useState('');

    return (
        <Paper className = {classes.paper}>
            <Typography className = {classes.typograpgy} >Lorem aliqua officia esse 
            Velit dolor <span>adipisicing culpa enim sint culpa voluptate ad reprehenderit consequat sint laborum ut excepteur.</span></Typography>
            <Grid container style = {{padding:'10px 12px'}} component = {Paper}>
                <Grid container  item xs = {12}>
                <InputBase className = {classes.inputText} placeholder = "Shearch here!" value = {searchKey} onChange = {event=>{
                        setsearchKey(event.target.value);
    
                        }}/> 
                        <CssButton onClick = {
                                ()=>{
                                  let filterdNotes = notes.filter( (obj,index)=>
                                        {
                                            let str = obj.Status+obj.Reason+obj.Team+obj.Details;
                                            console.log(str,searchKey);
                                           if(str.toLowerCase().includes(searchKey.toLowerCase())){
                                               return obj;
                                           }
                                        }).map(note=>{console.log("MAP",note);return note;});
                                        setnotes(filterdNotes);
                                        setsearchKey('');
                                }
                        }>Search</CssButton>
                        <Button className = {classes.clearButton}>Clear</Button>
                </Grid>    
                <TableContainer >
                    <Table className = {classes.table}>
                        <TableHead className = {classes.theading}>
                         { tableHead.map(heading=><TableCell className = {classes.thcell}  >{heading}</TableCell>)}  
                        </TableHead>
                        <TableBody className = {classes.tbody}>
                        {notes.map((row) => (
                            <StyledTableRow key={row.Team}>
                                <TableCell className = {classes.tcell}>{row.Team}</TableCell>
                                <TableCell className = {classes.tcell}>{row.Reason}</TableCell>
                                <TableCell className = {classes.tcell}>{row.Status}</TableCell>
                                <TableCell className = {classes.tcell}>{row.Details}</TableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid> 
            <Grid >
        </Grid>
                            
        <Grid container style = {{marginTop: '8px'}}>    
            <Typography className = {classes.typograpgy} >Lorem aliqua officia esse 
                <span > exercitation</span>exercitation consequat esse tempor.
            </Typography>
            <TextareaAutosize fullWidth rows={10} placeholder="Note here!" onChange = {(e)=>setnewNote(e.target.value)}  value = {newNote} className= {classes.note}/>
        </Grid> 
        <Grid style = {{textAlign:'right'}}>
            <Button className = {classes.clearButton} onClick = {()=>setnewNote('')}>Clear</Button>
            <CssButton onClick = {()=>{
                let newNoteObje = {Team:'Team3',Reason:'Reason 3',Status:'pending',Details:newNote}
                setnotes([...notes,newNoteObje]);
                setnewNote('');
            }}>Submit</CssButton>
        </Grid>  
        </Paper>
    )
}

export default Notes;
