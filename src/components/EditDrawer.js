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

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });
// const classes = useStyles();

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
      
      role="presentation"
    >
      <Button variant="contained" onClick={()=>this.props.disableCustomer()} >back</Button>
      <List>
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