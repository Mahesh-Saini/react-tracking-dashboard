import React from "react";
import trackingData from "../../data/tracking";

const Tracking = () => {
  return (
    <>
      <div className="p-4">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Trailer No.</th>
              <th scope="col">Customer</th>
              <th scope="col">Loding Point</th>
              <th scope="col">Destination</th>
              <th scope="col">Loading Date</th>
              <th scope="col">TT</th>
              <th scope="col">Customer Estimate Date</th>
              <th scope="col">Balance Days to Cover Customer</th>
              <th scope="col">Balance Days to Cover MYT</th>
              <th scope="col">Old Location</th>
              <th scope="col">Current Location</th>
              <th scope="col">Total Distance</th>
              <th scope="col">Distance to Cover</th>
              <th scope="col">Delay Days</th>
              <th scope="col">Actual Delievy Date</th>
              <th scope="col">Status</th>
              <th scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {trackingData.map((data, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{data.trailorNo}</td>
                  <td>{data.customer}</td>
                  <td>{data.loadingPoint}</td>
                  <td>{data.destination}</td>
                  <td>{data.loadingDate}</td>
                  <td>{data.tt}</td>
                  <td>{data.customerEstimateDate}</td>
                  <td>{data.balanceDaysToCover}</td>
                  <td>{data.balanceDaysToMyt}</td>
                  <td>{data.oldLocation}</td>
                  <td>{data.currentLocation}</td>
                  <td>{data.totalDistance}</td>
                  <td>{data.distanceToCover}</td>
                  <td>{data.delayDays}</td>
                  <td>{data.actualDilieryDate}</td>
                  <td>{data.status}</td>
                  <td>{data.remarks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Tracking;
