import React from 'react';
import TextField from '@material-ui/core/TextField';
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

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form styles={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} noValidate autoComplete="off">
                <FormItemWrapper>
                    <h3>Search The Archives</h3>
                </FormItemWrapper>
                <FormItemWrapper>
                    <TextField
                        required
                        id="outlined-required"
                        label="Keyword/(s)"
                        name="topic"
                        // className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        onChange={this.props.handleInputChange}
                    />
                </FormItemWrapper>
                <FormItemWrapper>
                    <TextField
                        id="outlined-name"
                        label="Start Year"
                        // className={classes.textField}
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
                        // className={classes.textField}
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

// SearchForm.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default SearchForm;

/*

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

<form>
<InputWrapper>
    <label style={{ textAlign: 'center' }}>Topic</label>
    <input type="text" value={topic} name="topic" placeholder="Search by topic" onChange={handleInputChange} style={{ borderRadius: 5 }}></input>
</InputWrapper>
<InputWrapper>
    <label style={{ textAlign: 'center' }}>Start Year</label>
    <input type="text" value={startYear} name="startYear" placeholder="YYYY" onChange={handleInputChange}></input>
</InputWrapper>
<InputWrapper>
    <label style={{ textAlign: 'center' }}>End Year</label>
    <input type="text" value={endYear} name="endYear" placeholder="YYYY" onChange={handleInputChange}></input>
</InputWrapper>
<InputWrapper>
    <button onClick={handleFormSubmit}>SUBMIT</button>
</InputWrapper>
</form>

*/