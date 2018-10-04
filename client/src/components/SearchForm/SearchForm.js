import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'react-emotion';

const FormItemWrapper = styled('div')(
    {
        margin: 10,
        textAlign: 'center'
    }
)

const Button = styled('button')(
    {
        background: '#dc3545',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform: 'capitalize'
    }
)

class SearchForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form styles={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} noValidate autoComplete="off">
                <FormItemWrapper>
                    <TextField
                        required
                        id="outlined-required"
                        label="Keyword/(s)"
                        name="topic"
                        value={this.props.topic}
                        fullWidth={true}
                        margin="normal"
                        variant="outlined"
                        onChange={this.props.handleInputChange}
                    />
                </FormItemWrapper>
                <FormItemWrapper>
                    <TextField
                        select
                        label="Number of Records"
                        name="num"
                        value={this.props.num}
                        fullWidth={true}
                        onChange={this.props.handleInputChange}
                        helperText="Number of Records to Retrieve"
                        margin="normal"
                        variant="outlined"
                        style={{textAlign: 'left'}}
                    >
                        <MenuItem key={1} value={1}>1</MenuItem>
                        <MenuItem key={5} value={5}>5</MenuItem>
                        <MenuItem key={10} value={10}>10</MenuItem>
                    </TextField>
                </FormItemWrapper>
                <FormItemWrapper>
                    <TextField
                        id="outlined-name"
                        label="Start Year"
                        fullWidth={true}
                        name="startYear"
                        value={this.props.startYear}
                        onChange={this.props.handleInputChange}
                        margin="normal"
                        variant="outlined"
                    />
                </FormItemWrapper>
                <FormItemWrapper>
                    <TextField
                        id="outlined-name"
                        label="End Year"
                        fullWidth={true}
                        name="endYear"
                        value={this.props.endYear}
                        onChange={this.props.handleInputChange}
                        margin="normal"
                        variant="outlined"
                    />
                </FormItemWrapper>
                <FormItemWrapper>
                    <Button onClick={this.props.handleFormSubmit}>
                        SUBMIT
                    </Button>
                </FormItemWrapper>
            </form>
        );
    }
}

export default SearchForm;
