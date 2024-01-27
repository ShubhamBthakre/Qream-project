import React from "react";
import ItemCard from "../../RegisteredBusinessTableItemCard/index";
import { IoMdArrowRoundBack } from "react-icons/io";

function RegisteredBusinessTableItemDetails() {


  const handleRedirect = () => {
    history.goBack();
  };
  return (
    <div className="w-full ">
      <div>
        <IoMdArrowRoundBack onClick={()=>handleRedirect()}/>
      </div>
      <ItemCard />
    </div>
  );
}

export default RegisteredBusinessTableItemDetails;
