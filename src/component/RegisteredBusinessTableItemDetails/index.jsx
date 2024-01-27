import React from "react";
import ItemCard from "../../RegisteredBusinessTableItemCard/index";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useBusinessContext } from "../../context/businessContext";

function RegisteredBusinessTableItemDetails() {
  const { setActiveNavbarTitle } = useBusinessContext();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/registered-business")
    setActiveNavbarTitle("Business Registered")
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
