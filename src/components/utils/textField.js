<<<<<<< HEAD
import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Input } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';

=======
import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
>>>>>>> 762aae96e8385b828fddb5ba8842cb4dc7aa6c75
export class textField extends Component {
    render() {
        console.log('render')
        return (
<<<<<<< HEAD
            <FormControl fullWidth={true}>
                {/* <InputLabel disableAnimation={true}>
                    {this.props.label}
                </InputLabel> */}
                <FormLabel className="pb-0">
                    {this.props.label}
                </FormLabel>
                <Input
=======
            <Fragment>
                <TextField
                    fullWidth={true}
>>>>>>> 762aae96e8385b828fddb5ba8842cb4dc7aa6c75
                    id={this.props.name}
                    margin="normal"
                    name = {this.props.name}
                    label="" 
                    value={this.props.value} 
                    onChange ={this.props.change}
                />
<<<<<<< HEAD
            </FormControl>
=======
            </Fragment>
>>>>>>> 762aae96e8385b828fddb5ba8842cb4dc7aa6c75
        )
    }
}

export default textField;
