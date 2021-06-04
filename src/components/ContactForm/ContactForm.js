import  { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contact-actions'
import './ContactForm.scss';

class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    };
  
    handleSubmitForm = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { name, number } = this.state;
        
        const isValidateForm = this.validateForm()
        if(!isValidateForm) return 
        onSubmit(name, number)

        this.setState({ name: '' , number: '' ,});
    };
     
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
 

    validateForm = () => {
        const { name, number } = this.state
        const { check } = this.props
        if (!name || !number) {
            alert('Some filed is empty')
        }
        return check(name);
    };

    render() {
        return (
            
            <form className="Form" onSubmit={this.handleSubmitForm}>
                <label className="Label">
                Name  <input className="Input"
                        id={this.state.id}
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange} 
                        placeholder="name"  
                    /> 
                </label>
                <label>
                Number  <input  className="Input"
                        type="tel"
                        name="number"
                        placeholder="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <button className="Button" type="submit">Add contact</button> 
            </form>    
        );
    }
};


const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactActions.addContacts( name, number)),
})

export default connect(null, mapDispatchToProps)(ContactForm);