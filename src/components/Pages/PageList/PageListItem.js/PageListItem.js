import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../../hoc/Aux/Aux';

const pageListItem = ({ page, deleteClick }) => {
    return (
      <Aux>
        <tr key={page.id}>
          <td><h5 className='float-left'><Link to={`/dashboard/edit-page/${page.id}`}>{page.title}</Link></h5></td>
          <td>Kenneth Bushman</td>
          <td>{page.dateCreated}</td>
          <td>
            <Link className='btn btn-secondary btn-sm mr-2' to={`/${page.url}`}>View</Link>
            <Link className='btn btn-primary btn-sm mr-2' to={`/dashboard/edit-page/${page.id}`}>Edit</Link>
            <button
              className='btn btn-danger btn-sm'
              onClick={(event) => deleteClick(event)}
              id={page.id}>Delete</button>
            </td>
        </tr>
      </Aux>
    );
}

export default pageListItem;
