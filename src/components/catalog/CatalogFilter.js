import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../../css/catalog/CatalogFilters.scss';

export default class CatalogFilters extends Component {
  constructor(props) {
    super(props);

    this.modalContainer = React.createRef();

    this.state = {
      filters: ['Beginner', 'Intermediate', 'Advanced'],
    };
  }

  // ===============================================================
  // Handlers
  /**
   * TODO: Handle when filter is clicked
   * @param {Object} selectedCourse the object containing the data for the course to be displayed
   */
  selectFilter = event => {
    console.log(event);
  };

  // ===============================================================
  // Render

  render() {
    const { filters } = this.state;

    return (
      <div id="filter-nav">
        <div id="filter-item">
          {filters.map(filter => (
            <p className={filter}>{filter}</p>
          ))}
        </div>
      </div>
    );
  }
}
