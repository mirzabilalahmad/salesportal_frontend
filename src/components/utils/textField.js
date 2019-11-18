import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
export class textField extends Component {
    render() {
        return (
            <Fragment>
                <TextField
                    fullWidth={true}
                    id={this.props.name}
                    margin="normal"
                    name = {this.props.name}
                    label={this.props.label}  
                    value={this.props.value} 
                    onChange ={this.props.change}
                />
            </Fragment>
        )
    }
}

export default textField;
