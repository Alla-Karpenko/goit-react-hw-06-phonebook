import React from "react";
import PropTypes from "prop-types";
import './Filters.scss';
import {connect} from 'react-redux';
import contactActions from '../../redux/contact/contact-actions'

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
        <h3> Find contacts by me </h3>
      <input className="Input-Filter"
        type="text"
        name=''
        value={filter}
        onChange={changeFilter}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  changeFilter: (e) => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);