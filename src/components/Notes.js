import React from 'react';
import {Typography,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Grid, TextField, Button, TextareaAutosize } from '@material-ui/core';
import {makeStyles,createStyles,withStyles} from '@material-ui/core/styles';
const useStyles = makeStyles({
    typograpgy:{
        fontWeight:'bold',
        backgroundColor: 'black',
        color: '#fff',
        padding: '10px',
        borderTopRightRadius: '8px',
        borderTopLeftRadius:  '8px',
        textAlign: 'left',
    },
    link:{
        color: "yellow",
        fontWeight: 600,
        cursor: 'pointer',
        textDecoration:'none',
    },
    paper:{
        padding: '10px',
        backgroundColor: '#dbd7d7',
        color: '#242424',
        opacity: 1,
        textAlign: 'left',

    },
    table: {
        minWidth: 700,
        borderTop:'2px solid rgba(0, 0, 0, 0.1)',
        borderBottom:'2px solid rgba(0, 0, 0, 0.1)',
        marginTop: '15px',
        borderRadius: '5% !importent',

      },
    containerTable:{
        padding: '10px',
        backgroundColor: '#fff',
    },
    
});
const StyledTableCell = withStyles(theme=>createStyles({
    body: {
        //fontSize: 14,
        textAlign:'left',
        borderLeft: '2px solid rgba(0, 0, 0, 0.1)',
        borderRight: '2px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '5%',
        padding: '20px'
      },
    
}))(TableCell);
const StyledTableRow = withStyles(theme=>createStyles({
    root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
          '&>.MuiTableCell-body':{
            color:'#000',
            fontWeight: 'bold',
          }
        },
      },
}))(TableRow);
const CssTextField = withStyles({
  root: {
   '& .MuiOutlinedInput-root': {
        '& input':{
            padding: '10px',
        }
    },
  },
})(TextField);
const CssButton = withStyles({
    root: {
        width: '47%',
        display: 'inline'
    }
})(Button);


function Notes() {
    const classes = useStyles();
    return (
        <Paper className = {classes.paper}>
            <Typography className = {classes.typograpgy} >Lorem aliqua officia esse 
            <Link className = {classes.link}> exercitation</Link>exercitation consequat esse tempor.</Typography>
            <TableContainer className = {classes.containerTable} component = {Paper}>
                <Grid container >
                    <Grid container  item xs = {12}>
                        <Grid item xs = {8} ><CssTextField fullWidth  variant="outlined" /> </Grid>
                        <Grid item xs = {4} >
                            <CssButton  variant = "contained" color="primary" >Search</CssButton>
                            <CssButton 
                            style = {{marginLeft:'15px'}}
                            variant = "contained" >Clear</CssButton>
                        </Grid>
                        
                    </Grid>
                </Grid> 
                <Table className = {classes.table}>
                    <TableBody>
                    {[1,2,3,4,5].map((row) => (
                        <StyledTableRow key={row}>
                            <StyledTableCell>{row}</StyledTableCell>
                            <StyledTableCell>{row}</StyledTableCell>
                            <StyledTableCell>{row}</StyledTableCell>
                            <StyledTableCell>{row}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paper style = {{marginTop: '15px',padding:'8px'}}>
                <Grid container>
                    <Grid item xs = {12}>
                        <Typography className = {classes.typograpgy} >Lorem aliqua officia esse 
                            <Link className = {classes.link}> exercitation</Link>exercitation consequat esse tempor.
                        </Typography>
                    </Grid>
                    <Grid item xs = {12}>
                        <TextareaAutosize rowsMax = {15} placeholder="Text here!"  variant="outlined"  style = {{width:'100%',height:"20vh"}} />
                    </Grid>
                    <Grid item xs = {12} style = {{textAlign:'right'}}>
                        <CssButton style = {{height:'100%',width:'20%',}}
                         variant = "contained">Clear</CssButton>
                        <CssButton style = {{height:'100%',width:'20%',marginLeft:'15px'}}
                        color = "primary" variant = "contained" >Submit</CssButton>
                    </Grid>
                </Grid> 
            </Paper>    
        </Paper>
    )
}

export default Notes;
