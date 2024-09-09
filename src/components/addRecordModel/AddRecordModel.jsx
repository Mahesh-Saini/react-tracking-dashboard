import React from "react";
import trailerdata from "../../data/trailer";
import customer from "../../data/customer";

const AddRecordModel = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add New Record
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="">Trailer No.</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>NL03AR4587 </option>
                    {trailerdata.map((data, i) => {
                      return (
                        <option key={i} value={data}>
                          {data}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="">Customer</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    {customer.map((data, i) => {
                      return (
                        <option key={i} value={data}>
                          {data}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="">Destination</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="">Loading Date</label>
                  <input type="date" className="form-control" id="dateInput" />
                </div>
                <div className="col-2"></div>
                <div className="col-2"></div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecordModel;
