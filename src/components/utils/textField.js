import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Input } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';

export class textField extends Component {
    render() {
        console.log('render')
        return (
            <FormControl fullWidth={true}>
                {/* <InputLabel disableAnimation={true}>
                    {this.props.label}
                </InputLabel> */}
                <FormLabel className="pb-0">
                    {this.props.label}
                </FormLabel>
                <Input
                    id={this.props.name}
                    margin="normal"
                    name = {this.props.name}
                    label="" 
                    value={this.props.value} 
                    onChange ={this.props.change}
                />
            </FormControl>
        )
    }
}

export default textField;
