import React from "react";
import Button from "../component/Button";
import Woman from "../image/Woman.png";

const Call = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center m-2">
        <h2 className="col px-md-5">Services</h2>
        <Button name="Connect Payout" />
        </div>
        <div className="callbtn">
          <Button name="1:1 Call" />
          <img src={Woman} alt="Woman" />
        </div>
        <div className="w-50 m-3">
                <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Duration</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <label for="exampleInputPassword1" class="form-label">Amount</label>

        <div class="mb-3 d-flex col">
            <input type="password" class="form-control " id="exampleInputPassword1" placeholder="Rs."/>
            <input type="password" class="form-control mx-4" id="exampleInputPassword1" placeholder="Price Suggestions"/>
        </div>
        </form>
        </div>
        <div className="d-flex align-items-center justify-content-center my-5">
        <Button name="+ Add" />
        </div>
      </div>
    </>
  );
};

export default Call;
