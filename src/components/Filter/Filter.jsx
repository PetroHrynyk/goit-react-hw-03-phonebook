import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default class Filter extends React.Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className={css.filter}>
        Find contacts by name
        <label className={css.filterLabel}>
          <input
            type="text"
            name={filter}
            className={css.filterInput}
            onChange={onChange}
            placeholder="Enter name"
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
