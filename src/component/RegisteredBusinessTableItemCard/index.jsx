import React from "react";

function ItemCard({ BusinessItemDetails }) {
  console.log("Business details in Item card", BusinessItemDetails);

  return (
    <div className=" w-full max-w-[1200px] bg-medium-sky rounded-lg mt-5 p-1 md:p-5 text-xs md:text-sm font-poppins">
      <div className="flex justify-between items-center flex-wrap border-b border-border-color p-2">
        <p>Application no -#{BusinessItemDetails[0].application_no}</p>
        <p>Date: {BusinessItemDetails[0].date}</p>
      </div>
      <div className="w-full flex justify-between flex-wrap p-2 pt-5 border-b border-border-color">
        <div className=" text-start ">
          <h4 className="font-semibold">Business name</h4>
          <p>{BusinessItemDetails[0].business_name}</p>
        </div>
        <div className=" text-start">
          <h4 className="font-semibold">Email</h4>
          <p>google@google.com</p>
        </div>

        <div className=" text-start w-[120px]">
          <h4 className="font-semibold">Phone no</h4>
          <p>9999999999</p>
        </div>
        <div className=" text-start w-[120px]">
          <h4 className="font-semibold">Type</h4>
          <p>{BusinessItemDetails[0].type}</p>
        </div>
      </div>

      <div className="p-2 pt-5">
        <h4 className="font-semibold">Location</h4>
      </div>
      <div className="w-full flex  justify-between flex-wrap p-2 pt-2 border-b border-border-color">
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
          <p>
            {" "}
            package: <span className="font-semibold">starRight</span>
          </p>
        </div>
        <div>
          <p>
            status:{" "}
            <span
              className={`font-semibold ${
                BusinessItemDetails[0].status === "Completed"
                  ? "text-green-500"
                  : "text-orange-500"
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
