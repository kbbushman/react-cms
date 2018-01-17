import React from 'react';
// import { NavLink } from 'react-router-dom';

const summaryItems = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <main role="main" className="col-sm-9 ml-sm-auto col-md-12">
          <h1 className='mb-5'>Dashboard</h1>
          <section className="row text-center placeholders mb-5">
            <div className="col-6 col-sm-3 placeholder">
              <h4>Label</h4>
              <div className="text-muted">Something else</div>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </section>

          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>amet</td>
                  <td>consectetur</td>
                  <td>adipiscing</td>
                  <td>elit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default summaryItems;
