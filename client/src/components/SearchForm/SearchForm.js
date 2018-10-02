import React from "react";
import styled from "react-emotion";

const FormWrapper = styled('div')(
    {
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        // border: '2px dashed green'
    }
)

const InputWrapper = styled('div')(
    {
        fontSize: 32,
        display: 'flex',
        flexDirection: 'column',
        // border: '2px dashed orange',
        margin: 20
    }
)
//WILL LATER TAKE PROPS SUCH E.G. ONCHANGE LISTENER
const SearchForm = ({ topic, startYear, endYear, handleInputChange, handleFormSubmit }) => {
    return (
        <FormWrapper>
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
        </FormWrapper>
    )
}

export default SearchForm;