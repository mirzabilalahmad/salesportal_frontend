import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import LoadingScreen from 'react-loading-screen';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './loading.gif'
import TF from './utils/textField';
import axios from'axios';

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
    loading: false,
    selectedFile:null

  }

  componentWillReceiveProps(newProps) {
    if (newProps.customerId) {
      
      fetch("http://salesportal1.local/api/customers/1/edit")
          .then(res => res.json())
          .then(
              
            (result) => {
                console.log('result: ',result)
              this.setState({

                data: result,
                customerId:newProps.customerId,
                isLoaded:true,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log('error',error)
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        
      
      // setTimeout(() => {
      //   this.setState({
      //     data: {
      //       id: 1,
      //       name: 'Name',
      //       location: 'location',
      //       industry_type: 'industry type',
      //       favourite: false,
      //       image: img,
      //     },
      //     loading: false
      //   })
      // }, 1000)
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
          <div style={{ width: '50%' }}>
            <Typography variant="p">
              Edit Customer
          </Typography>

          </div>

          <div style={{ width: '50%', textAlign: "right" }}>
            <Button variant="contained" onClick={() => this.props.disableCustomer()}  >Close</Button>

          </div>
        </Toolbar>

      </AppBar>
      {/* <Button variant="contained" onClick={()=>this.props.disableCustomer()} >Go Back</Button> */}
      <form noValidate autoComplete="off" style={{ textAlign: "center" }}>
        <div>
          <TF label="Name: " value={this.state.data.name} />
          <TF label="Location: " value={this.state.data.location} />
          <TF label="Industry Type: " value={this.state.data.industryType} />
          <TF label="URL: " value={this.state.data.url} />
        </div>
        <Divider /> <br />
        <div>

        <input
          accept="image/*"
         style={{ display: 'none', }}
         // id="contained-button-file"
          type="file"
          onChange={this.fileSelectedHandler}
          ref={fileInput => this.fileInput = fileInput}
        />

          <img src={img} />
          <Button style={{}} onClick={()=>this.fileInput.click()} >
         <span >   <i className="fa fa-pencil-square-o"></i></span>
         
         </Button>
        </div>
        <Divider /> <br />
      <Button variant="contained" color="secondary" >Cancel</Button>&nbsp; &nbsp;&nbsp;
      <Button variant="contained" color="secondary" onClick={this.fileUploadHandler} >Update</Button>
      </form>
    </div>
  );
  fileSelectedHandler = event =>{
    
    this.setState({
      selectedFile:event.target.files[0]
    });
    console.log('file handler');
  }
  fileUploadHandler=()=>{
    const fd= new FormData();
    
    fd.append('image', this.state.selectedFile);
    // fd.append('key1', 'val1' );
    // fd.append('key2', 'val2');
    // axios.put('http://salesportal.com/api/customers/1',fd).then(res =>{
    //   console.log(res);
    //   console.log('file handler');
    // });
    axios.post('http://salesportal.com/api/customers',fd).then(res =>{
      console.log(res);
      console.log('file upload');
    });
  }

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

          <div style={{ width: 600 }}>
            <h1>Loading...</h1>
            <LoadingScreen
              loading={true}
              bgColor='#f1f1f1'
              spinnerColor='#9ee5f8'
              textColor='#676767'
              logoSrc={logo}
              text='Loading Please Wait!!'
            >

            </LoadingScreen></div>
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