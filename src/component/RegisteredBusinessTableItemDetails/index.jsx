import React from "react";
import ItemCard from "../../RegisteredBusinessTableItemCard/index";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function RegisteredBusinessTableItemDetails() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/registered-business")
  };
  return (
    <div className="w-full ">
      <div>
        <IoMdArrowRoundBack onClick={()=>handleRedirect()} className="cursor-pointer text-2xl"/>
      </div>
      <ItemCard />
    </div>
  );
}

export default RegisteredBusinessTableItemDetails;
