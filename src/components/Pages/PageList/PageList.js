import React from 'react';
import { Link } from 'react-router-dom';

import PageListItem from './PageListItem.js/PageListItem';

const pageList = (props) => {

  const pageListItems = props.pages.map(page => {
    return <PageListItem key={page.timeCreated} page={page} deleteClick={(event) => props.deleteClick(event)} />
  });

  return (
    <div className='container'>
      <h1>Pages</h1>
      <Link className='btn btn-primary float-right mb-3' to={'/dashboard/add-page'}>Add New Page</Link>
      <table className='table table-striped table-dark table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pageListItems}
        </tbody>
      </table>
    </div>
  );
}

export default pageList;
