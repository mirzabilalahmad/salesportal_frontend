import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
export class textField extends Component {
    render() {
        return (
            <div>
                <TextField
                    id="outlined-basic"
                    margin="normal"
                    variant="outlined" 
                    label={this.props.label}  
                    value={this.props.value} 
                />
            </div>
        )
    }
}

export default textField;
