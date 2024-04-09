/* eslint-disable react/prop-types */
import React from "react";
export default function Recent({ data }) {
    return (
      <>
       {data
        .filter((ele,index) => index<3)
        .map((ele) => (
        <div key={ele.id} className="col ">
          <div className="card flex-row flex-wrap recent h-100">
          <div className="card-header border-0">
            <img src={ele.img} className="card-img-top image-with-box-shadow" height='100'  alt="..." /></div>
            <div className="card-block px-2">
            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
            </div>
            <div className="card-footer">
              <small className="custom-card-footer">{ele.date}</small>
            </div></div>
          </div>
        </div>))}
      </>
    );
  }