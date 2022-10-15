// import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

import { FormContacts, Btn } from "./Form.styled";
import { useState } from "react";

const initialState = {
    name: '',
    number: '',
};

export default function Form ({onSubmit}) {

const [state,setState] = useState(initialState);


    const nameId = nanoid();
    const numberId = nanoid();

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        setState((prev)=>{
            return{...prev,
                [name]: value,
            }
        })
    };

    const handleSubmit = event => {
        event.preventDefault()
        const { number, name } = state;
        onSubmit({ number, name })
        setState(initialState);
    };



    return (
        <FormContacts onSubmit={handleSubmit}>
            <label htmlFor={nameId}>Name</label>
        <input
                    id={nameId}
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
            <label htmlFor={numberId}>Number</label>
            <input
                    id={numberId}
                    type="tel"
                    name="number"
                    value={state.number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            <Btn type="submit">add contact</Btn>
        </FormContacts>
    );
}








// export class Form extends React.Component{
//     state = {
//         name: '',
//         number: '',
//     };
//     nameId = nanoid();
//     numberId = nanoid();

//     handleChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value })
//     };

//     handleSubmit = event => {
//         event.preventDefault()
//         const { number, name } = this.state;
//         this.props.onSubmit({ number, name })
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: ''})
//     };

//     render() {
//         const { nameId, numberId } = this;
//         return (
//             <FormContacts onSubmit={this.handleSubmit}>
//                 <label htmlFor={nameId}>Name</label>
//             <input
//                         id={nameId}
//                         type="text"
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                     />
//                 <label htmlFor={numberId}>Number</label>
//                 <input
//                         id={numberId}
//                         type="tel"
//                         name="number"
//                         value={this.state.number}
//                         onChange={this.handleChange}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                     />
//                 <Btn type="submit">add contact</Btn>
//             </FormContacts>
//         );
//     }
// }

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};