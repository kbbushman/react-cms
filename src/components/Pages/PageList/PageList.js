import React from 'react';
import { Link } from 'react-router-dom';

import PageListItem from './PageListItem.js/PageListItem';

const pageList = (props) => {
  // console.log('Pages Props',  props);
  const pageList = props.pages.map(page => {
    return <PageListItem key={page.timeCreated} page={page} deleteClick={(event) => props.deleteClick(event)} />
  });

  if(!props.pages.length) {
    return (
      <div className='container mt-5'>
        <h4>There are no pages to display...</h4>
        <Link className='btn btn-primary mb-3' to={'/dashboard/add-page'}>Add New Page</Link>
      </div>
    );
  }

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
          {pageList}
        </tbody>
      </table>
    </div>
  );
}

export default pageList;
