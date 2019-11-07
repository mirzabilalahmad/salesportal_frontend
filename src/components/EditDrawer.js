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
import img from '../assets/images/portfolio/portfolio3.jpg';

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
    data: {},
    customerId: null,
    loading: false
    
  }

  componentWillReceiveProps(newProps){
    if(newProps.customerId) {
      this.setState({
        customerId: newProps.customerId,
        loading: true
      })
      setTimeout(() => {
        this.setState({
          data: {
            id:1,
            name:'Name',
            location:'location',
            industryType:'industry type',
            favourite:false,
            image: img,
          },
          loading: false
        })
      }, 1000)  
    } else {
      this.setState({
        data: {},
        customerId: null,
        loading: false
      })
    }
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
    if(!this.state.customerId) {
      return (
        <div></div>
      )
    } else if(this.state.loading) {
      return (
        <Drawer anchor="right" open={true}>
          <div>Loading...</div>
        </Drawer>
      )
    }
    return (
      <div>
         <Drawer anchor="right" open={true} >
           {this.sideList()}
         </Drawer>
       </div>
     );
  }

}
export default EditDrawer;