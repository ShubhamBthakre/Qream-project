import React from "react";

function ItemCard({ BusinessItemDetails }) {
  console.log("Business details in Item card", BusinessItemDetails);

  return (
    <div className="max-w-[1200px] bg-medium-sky rounded-lg mt-5 p-1 md:p-5 text-sm md:text-lg">
      <div className="flex justify-between items-center flex-wrap border-b border-border-color p-2">
        <p>Application no -#{BusinessItemDetails[0].id}</p>
        <p>Date: {BusinessItemDetails[0].date}</p>
      </div>
      <div className="flex justify-between items-center flex-wrap p-2 pt-5 border-b border-border-color">
        <div className="w-1/5">
          <h4>Business name</h4>
          <p>{BusinessItemDetails[0].business_name}</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>google@google.com</p>
        </div>
        <div>
          <h4>Phone no</h4>
          <p>9999999999</p>
        </div>
        <div>
          <h4>Type</h4>
          <p>{BusinessItemDetails[0].type}</p>
        </div>
      </div>
      <div className="p-2 pt-5">
        <h4>Location</h4>
      </div>
      <div className="flex justify-between items-center flex-wrap p-2 pt-5 border-b border-border-color">
        <div>
          <p>Street number/name</p>
          <p>Bangalore</p>
        </div>
        <div>
          <p>City</p>
          <p>Bangalore</p>
        </div>
        <div>
          <p>state</p>
          <p>Bangalore</p>
        </div>
        <div>
          <p>Zip code</p>
          <p>560068</p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap items-center p-2 pt-5">
        <div>
          <p> package: starRight</p>
        </div>
        <div>
          <p>
            status:{" "}
            <span
              className={`${
                BusinessItemDetails[0].status === "Completed"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {BusinessItemDetails[0].status}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
