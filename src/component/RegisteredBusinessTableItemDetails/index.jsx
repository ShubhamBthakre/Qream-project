import React from "react";
import ItemCard from "../RegisteredBusinessTableItemCard/index";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useBusinessContext } from "../../context/businessContext";
import MOCK_DATA from "../../assets/MOCK_DATA.json";

function RegisteredBusinessTableItemDetails() {
  const { setActiveNavbarTitle } = useBusinessContext();
  const { applicationId } = useParams();
  console.log("application id", applicationId);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/registered-business");
    setActiveNavbarTitle("Business Registered");
  };

  const BusinessItemDetails = MOCK_DATA.filter(
    (item) => item.application_no === applicationId
  );

  return (
    <div className="w-full">
      <div>
        <IoMdArrowRoundBack
          onClick={() => handleRedirect()}
          className="cursor-pointer text-2xl"
        />
      </div>
      <ItemCard BusinessItemDetails={BusinessItemDetails} />
    </div>
  );
}

export default RegisteredBusinessTableItemDetails;
