import React, { useEffect, useMemo, useState } from "react";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { useBusinessContext } from "../../context/businessContext";
import { NavLink } from "react-router-dom";

function RegisteredBusinessTable() {
  const { setActiveNavbarTitle } = useBusinessContext();
  const [mockData, setMockData] = useState(MOCK_DATA);
  const [selectedOption, setSelectedOption] = useState("All");
  const [isAllRowSelected, setAllRowSelected] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(1);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= mockData.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  console.log(Array.from({ length: mockData.length / 10 }));
  console.log(page);
  useEffect(() => {
    if (selectedOption === "All") {
      setMockData(MOCK_DATA);
    } else {
      const filteredData = MOCK_DATA.filter(
        (eachData) => eachData.type === selectedOption
      );
      setMockData(filteredData);
      setPage(1);
    }
  }, [selectedOption]);

  //to improve performance we use useMemo
  const data = useMemo(() => mockData, [mockData]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const allIds = mockData.map((data) => data.id);

  useEffect(() => {
    if (isAllRowSelected === true) {
      setSelectedRows([...allIds]);
    } else {
      setSelectedRows([]);
    }
  }, [isAllRowSelected]);

  // Handle checkbox click
  const handleCheckboxChange = (rowId) => {
    const isSelected = selectedRows.includes(rowId);

    if (isSelected) {
      // If already selected, remove from the selectedRows array
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      // If not selected, add to the selectedRows array
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  return (
    <div className="w-full font-poppins overflow-hidden">
      <table className="w-full border-collapse border table-fixed border-slate-400  rounded-t-xl overflow-hidden">
        <thead className="">
          <tr className="bg-light-blue text-blue-900 text-[10px] lg:text-sm border-collapse border border-slate-400 ">
            <th className="p-1 md:p-3 border border-slate-300 border-collapse flex flex-col items-start md:flex-row md:items-center">
              <input
                type="checkbox"
                checked={isAllRowSelected}
                value={isAllRowSelected}
                name=""
                id=""
                onChange={(e) => setAllRowSelected(e.target.checked)}
              />
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="outline-none border-none bg-transparent text-[10px] lg:text-sm w-full max-w-[60px] overflow-clip"
              >
                <option>All</option>
                <option>Corporation</option>
                <option>LCC</option>
              </select>
            </th>
            <th className="p-1 md:p-3 border border-slate-300">
              Application No.
            </th>
            <th className="p-1 md:p-3 border border-slate-300">
              Business Name
            </th>
            <th className="p-1 md:p-3 border border-slate-300">Type</th>
            <th className="p-1 md:p-3 border border-slate-300">Date</th>
            <th className="p-1 md:p-3 border border-slate-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.slice(page * 10 - 10, page * 10).map((data) => (
            <tr
              className="even:bg-light-sky  hover:bg-slate-300 w-auto text-[9px] lg:text-sm text-wrap font-poppins border-collapse text-black border border-slate-400"
              key={data.id}
            >
              <td
                className={`border-collapse border border-slate-300 p-1 md:p-3`}
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={selectedRows.includes(data.id)}
                  onChange={() => handleCheckboxChange(data.id)}
                  className="mr-2"
                />
                {data.id}
              </td>
              <td
                className={`border-collapse border border-slate-200 p-1 md:p-3 cursor-pointer`}
                onClick={() => setActiveNavbarTitle("#" + data.application_no)}
              >
                <NavLink
                  to={`registered-business/details/${data.application_no}`}
                >
                  {data.application_no}
                </NavLink>
              </td>
              <td
                className={`border-collapse border border-slate-200 p-1 md:p-3`}
              >
                {data.business_name}
              </td>
              <td
                className={`border-collapse border border-slate-200 p-1 md:p-3`}
              >
                {data.type}
              </td>
              <td
                className={`border-collapse border border-slate-200 p-1 md:p-3`}
              >
                {data.date}
              </td>
              <td
                className={`border-collapse border border-slate-200 p-1 md:p-3`}
              >
                <span
                  className={`${
                    data.status === "Completed"
                      ? "bg-green-button"
                      : "bg-orange-button"
                  } px-2 py-1 rounded-lg`}
                >
                  {data.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mockData.length > 0 && (
        <div className="flex justify-center items-center gap-1 p-1 lg:p-2 text-xs lg:text-base">
          <span
            className={`p-2   outline-none cursor-pointer hover:bg-light-blue ${
              page === 1 ? "hidden" : " "
            }`}
            onClick={() => selectedPageHandler(page - 1)}
          >
            <span className="text-blue-900">{"<"}</span> Prev
          </span>

          {[...Array.from({ length: mockData.length / 10 })].map((_, i) => {
            return (
              <span
                key={i}
                className={`p-2 outline-none cursor-pointer hover:bg-light-blue m-1  ${
                  page === i + 1 ? "bg-light-blue" : ""
                }`}
                onClick={() => selectedPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            className={`p-2  outline-none cursor-pointer hover:bg-light-blue 
               ${page === mockData.length / 10 ? "hidden" : " "}`}
            onClick={() => selectedPageHandler(page + 1)}
          >
            Next {">"}
          </span>
        </div>
      )}
    </div>
  );
}

export default RegisteredBusinessTable;
