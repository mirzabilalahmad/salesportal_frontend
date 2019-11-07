import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



// const useStyles = makeStyles({
//   list: {
//     width: 400,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });
// classes = useStyles();


class EditDrawer extends Component{
 
 

  state={
    customer:null
    
  }

  componentWillReceiveProps(props){
    this.state.customer =props.customer;
    console.log('updated props',this.props.customer);
  }


  sideList = () => (
    <div 
    // className={classes.list}
      
      role="presentation"
    >
      <AppBar position="static">
        <Toolbar> 
        <Typography variant="h10">
            Edit Customer
          </Typography>  
        <Button variant="contained" onClick={()=>this.props.disableCustomer()} >Close</Button>
        </Toolbar>
      </AppBar>
      {/* <Button variant="contained" onClick={()=>this.props.disableCustomer()} >Go Back</Button> */}
      <form noValidate autoComplete="off">
        
      <div>
        <TextField
          id="outlined-basic"
          label="Name: "
          margin="normal"
          variant="outlined"
        />
      </div>
     
   
      <div>
        <TextField
          id="outlined-basic"
          label="Location:"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Industry Type:"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="URL:"
          margin="normal"
          variant="outlined"
        />
      </div>
      <input
        accept="image/*"
       
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" >
          Upload
        </Button>
      </label>
    </form>
      <List >

        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

      </List>

      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );



  render(){
    {var open = false
    if(this.state.customer != null) open = true
    console.log('open : ',open)
    }

    return (
   
      <div>
  
     
         <Drawer anchor="right" open={open} >
           {this.sideList()}
           
         </Drawer>
       </div>
     );
  }

}
export default EditDrawer;