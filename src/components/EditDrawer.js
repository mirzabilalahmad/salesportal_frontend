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


import img from '../assets/images/portfolio/portfolio3.jpg';

// const useStyles = makeStyles({
//   list: {
//     width: 400,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });
// classes = useStyles();


class EditDrawer extends Component {



  state = {
    data: {},
    customerId: null,
    loading: false

  }

  componentWillReceiveProps(newProps) {
    if (newProps.customerId) {
      this.setState({
        customerId: newProps.customerId,
        loading: true
      })
      setTimeout(() => {
        this.setState({
          data: {
            id: 1,
            name: 'Name',
            location: 'location',
            industryType: 'industry type',
            favourite: false,
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
      //  className={classes.list}
      style={{ width: 600 }}
    >
      <AppBar position="static">

        <Toolbar>
      
        <div style={{width:'50%'}}>

        <Typography variant="p">
            Edit Customer
          </Typography>
        
        </div>
        
        <div style={{width:'50%', textAlign:"right"}}>
        <Button variant="contained" onClick={() => this.props.disableCustomer()}  >Close</Button>
          
        </div>
        
            

         
         
          
        </Toolbar>

      </AppBar>
      {/* <Button variant="contained" onClick={()=>this.props.disableCustomer()} >Go Back</Button> */}
      <form noValidate autoComplete="off" style={{ textAlign: "center" }}>
        <div>
          <TextField
            id="outlined-basic"
            label="Name: "
            margin="normal"
            variant="outlined"
            value={this.state.data.name}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Location:"
            margin="normal"
            variant="outlined"
            value={this.state.data.location}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Industry Type:"
            margin="normal"
            variant="outlined"
            value={this.state.data.industryType}
          />
        </div>
        <div>

          <TextField
            id="outlined-basic"
            label="URL:"
            margin="normal"
            variant="outlined"
            value={this.state.data.url}
          />
        </div>
        <Divider /> <br />
        <input
          accept="image/*"
          style={{ display: 'none', }}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" >
            Upload
        </Button>
        </label>
        <div>
          <img src={img} />
        </div>
      </form>



      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>


  );



  render() {
    // let stylee = {
    //   drawer:{width: 900},
    //   button:{

    //   }
    // }

    if (!this.state.customerId) {
      return (
        <div></div>
      )
    } else if (this.state.loading) {
      return (
        <Drawer anchor="right" open={true}>
          <div style={{ width: 600 }}><h1>Loading...</h1></div>
        </Drawer>
      )
    }
    return (


      <Drawer anchor="right" open={true} >
        {this.sideList()}
        {/* <div style={{width:"900"}}>adsda</div> */}
      </Drawer>



    );
  }

}
export default EditDrawer;