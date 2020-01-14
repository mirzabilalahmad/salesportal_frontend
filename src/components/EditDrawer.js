import React, { Component, Fragment } from 'react';
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
import TextField from './utils/textField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CloseRoundIcon from '@material-ui/icons/CloseRounded';
import EditIcon from '@material-ui/icons/Edit';
import qs from 'qs';


import FormControlLabel from '@material-ui/core/FormControlLabel'

import axios from 'axios';
import $ from 'jquery';

import img from '../assets/images/portfolio/portfolio3.jpg';
import { IconButton } from '@material-ui/core';

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
    name        : '',
    web_url     : '',
    location_id : '',
    industry_id : '',
    locations   : {},
    industries  : {},
    img_url     : '',
    customerId  : null,
    loading     : false,
    selectedFile: null,

  }

  componentWillReceiveProps(newProps) {
    if (newProps.customerId) {
      
      fetch(`http://salesportal1.local/api/customers/${newProps.customerId}/edit`)
          .then(res => res.json())
          .then((result) => {
                console.log('result: ',result)
              this.setState({
                name       : result.name,
                web_url    : result.web_url,
                industry_id: result.industry_id,
                location_id: result.location_id,
                industries : result.industries,
                locations  : result.locations,
                img_url    : result.img_url,
                customerId : newProps.customerId,
                isLoaded   : true,
              });
            },
            (error) => {
                console.log('error',error)
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

    } else {
      this.setState({
        name        : '',
        web_url     : '',
        location_id : '',
        industry_id : '',
        locations   : {},
        industries  : {},
        img_url     : '',
        customerId  : null,
        loading     : false,
        selectedFile: null
      })
    }
  }

  handleChange =( event)=>{
    console.log('handleChnage call',event.target.name);
    this.setState({
      
        [event.target.name]: event.target.value
      
    }
    )
  }
  listLocations(){

    return(

        <Fragment>

        <InputLabel id = "inputLable-location">Location</InputLabel>
        <Select
          fullWidth = {true}
          labelId   = "label-location"
          id        = "location"
          value     = {this.state.location_id}
          name      = "location_id"
          onChange  = {this.handleChange}
        >
          {
            this.state.locations.map((location)=>{
             return <MenuItem value = {location.id}>{location.name}</MenuItem>

            })
          }
          
        </Select>
        </Fragment>

    )

  }


  listIndustries(){

    return(

        <div>

        <InputLabel id = "inputLable-location" className = {{textAlign:"left"}}>Industry</InputLabel>
        <Select
         fullWidth = {true}
         labelId   = "label-location"
         id        = "location"
         value     = {this.state.industry_id}
         name      = "location_id"
         onChange  = {this.handleChange}
        >
          {
            this.state.industries.map((industry)=>{
             return <MenuItem value = {industry.id}>{industry.name}</MenuItem>

            })
          }
          
        </Select>
        </div>

    )

  }

  sideList = () => (
    <div
      //  className={classes.list}
      style = {{ width: 600 }}
    >
      <AppBar position = "static">
        <Toolbar>
          <div        style   = {{ width: '50%' }}>
          <Typography variant = "p" color = "" style = {{color:"white"}} >
              Edit Customer
          </Typography>

          </div>

          <div        style = {{ width: '50%', textAlign: "right" }}>
          <IconButton style = {{color:"white"}} onClick = {() => this.props.disableCustomer()} > <CloseRoundIcon/></IconButton>
          </div>
        </Toolbar>

      </AppBar>
      {/* <Button variant="contained" onClick={()=>this.props.disableCustomer()} >Go Back</Button> */}
      <form      noValidate autoComplete = "off">
      <div       className               = "p-2" >
      <Grid      container  style        = {{padding:10}}>
      <Grid      item xs                 = {12} style    = {{marginTop:20}}>
      <TextField label                   = "Name " value = {this.state.name} change = {this.handleChange} name = "name" />
              
            </Grid>
            <Grid item xs = {12} style = {{marginTop:20}}>
            {this.listLocations()}
              
              </Grid>
              <Grid item xs = {12} style = {{marginTop:20}}>
              {this.listIndustries()}             
              </Grid>
              <Grid      item xs = {12} style   = {{marginTop:20}}>
              <TextField label   = "URL " value = {this.state.web_url} change = {this.handleChange} name = "web_url"/>
              </Grid>

              <Grid item xs = {12} style = {{marginTop:20}}>
              <div  style   = {{position:"relative", textAlign:"center"}}>

                  <input
                    accept = "image/*"
                    style  = {{ display: 'none', }}
                  // id="contained-button-file"
                    type     = "file"
                    onChange = {this.fileSelectedHandler}
                    ref      = {fileInput => this.fileInput = fileInput}
                  />

                    <img id = "customer-screenshot" src = {this.state.img_url} key = {this.state.img_url} width = "500" height = "300" />
                    <div>
                   <IconButton style = {{position:"absolute",top:0,right:30}} onClick = {()=>this.fileInput.click()}><EditIcon/></IconButton>
                {/* <Button style={{position:"absolute",top:0,right:20}} onClick={()=>this.fileInput.click()} >
                  <span >   <i style = {{fontSize:20,fontWeight:"bold"}} className = "fa fa-pencil-square-o"></i></span>
                  
                  </Button>  */}
                </div>
                </div>
              
               
              </Grid>
                <Grid item xs = {12} style = {{marginTop:70}}>

                  <div    className = "text-right pr-3 mt-3">
                  <Button variant   = "contained" color = "secondary" className = "mr-2" onClick = {() => this.props.disableCustomer()}>Cancel</Button>
                  <Button variant   = "contained" color = "primary" onClick     = {this.fileUploadHandler} >Update</Button>
                  </div>
                </Grid>
            

    

          </Grid>

          {/* <TextField label="Location " value={this.state.location  } change={this.handleChange} name ="location" /> */}
          {/* <TextField label="Industry Type " value={this.state.industry_type} change={this.handleChange}  name ="industry_type"/> */}
        </div>
    
       
      </form>
    </div>
  );

  fileSelectedHandler = event =>{
    console.log('file', event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0]
    });
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#customer-screenshot').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(event.target.files[0]);
  }

  fileUploadHandler=()=>{
    console.log('clicked');
    var fd = new FormData();
    fd.append('image', this.state.selectedFile);
    console.log(this.state.selectedFile);
    console.log('state',this.state);
     fd.append('name', this.state.name );
     fd.append('location', this.state.location );
     fd.append('Industry_type', this.state.industry_type );
     fd.append('web_url', this.state.web_url);

     
    console.log('update request');
    console.log('fd',fd);
     
    axios({
      method: 'post',
      url: 'http://salesportal1.local/api/updatefile/' + this.state.customerId,
      data: fd,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
        console.log('response',response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
  //   axios.puf('http://salesportal1.local/api/customers/' + this.state.customerId, (fd))
  //   .then((res) => {
  //     console.log('res');
  //   })
  //   .catch(err=> console.log(err));
    }

  render() {

    if (!this.state.customerId) {
      return (
        <div></div>
      )
    } else if (this.state.loading) {
      return (
        <Drawer anchor = "right" open = {true}>

          <div style = {{ width: 600 }}>
            <h1>Loading...</h1>
            <LoadingScreen
              loading      = {true}
              bgColor      = '#f1f1f1'
              spinnerColor = '#9ee5f8'
              textColor    = '#676767'
              logoSrc      = {logo}
              text         = 'Loading Please Wait!!'
            >

            </LoadingScreen></div>
        </Drawer>
      )
    }
    return (


      <Drawer anchor = "right" open = {true} >
        {this.sideList()}
      
      </Drawer>



    );
  }

}
export default EditDrawer;