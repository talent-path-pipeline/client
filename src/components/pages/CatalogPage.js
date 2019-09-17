import React from 'react';
import { CatalogList } from '..';
import DUMMY_DATA from '../../DUMMY_DATA';
import '../../css/pages/CatalogPage.scss';

const CatalogPage = () => {
  // TODO: once we have the data in the back-end instead of just a file we can give this
  // a state again to load and hold the current set of courses
  const { courses } = DUMMY_DATA;

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h2 className="page-title">Courses</h2>
        <input className="course-search" type="text" placeholder="Type to search!" />
      </header>
      {/* <section className="filter-container">
          <CatalogFilter />
        </section> */}
      <section className="course-container">
        <CatalogList courses={courses} />
      </section>
    </div>
  );
};

export default CatalogPage;
