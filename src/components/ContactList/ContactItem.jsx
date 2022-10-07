import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export default class ContactItem extends React.Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <>
        <p className={css.contact}>
          {name}: {number}
        </p>
        <button
          id={id}
          className={css.deleteBtn}
          type="button"
          onClick={onDeleteContact}
        >
          Delete
        </button>
      </>
    );
  }
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
