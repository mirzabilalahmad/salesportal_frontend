import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
export class textField extends Component {
    render() {
        return (
            <div>
                <TextField
                    fullWidth={true}
                    id={this.props.name}
                    margin="normal"
                    name = {this.props.name}
                    label={this.props.label}  
                    value={this.props.value} 
                    onChange ={this.props.change}
                />
            </div>
        )
    }
}

export default textField;
