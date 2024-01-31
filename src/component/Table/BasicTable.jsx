import React, { useEffect, useMemo, useState } from "react";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { useBusinessContext } from "../../context/businessContext";
import { NavLink } from "react-router-dom";

function BasicTable() {
  const { setActiveNavbarTitle, setItemDetails } = useBusinessContext();
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

  useEffect(() => {
    if (selectedOption === "All") {
      setMockData(MOCK_DATA);
    } else {
      const filteredData = MOCK_DATA.filter(
        (eachData) => eachData.type === selectedOption
      );
      setMockData(filteredData);
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
          <tr className="bg-light-blue text-blue-900 text-[12px] md:text-base border-collapse border border-slate-400 ">
            <th className="p-1 md:p-3 border border-slate-300 border-collapse flex flex-col md:flex-row">
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
                className="outline-none border-none bg-transparent text-[10px] md:text-base w-full overflow-hidden"
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
              className="even:bg-light-sky  hover:bg-slate-300 w-auto text-[12px] md:text-base text-wrap font-poppins border-collapse text-slate-700 border border-slate-400"
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
              >
                <NavLink
                  to={`registered-business-details/:${data.application_no}`}
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
                className={`border-collapse border border-slate-200 p-1 md:p-3 ${
                  data.status === "Completed"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {data.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mockData.length > 0 && (
        <div className="flex justify-center items-center gap-1 p-3 text-lg lg:text-xl">
          <span
            className="p-2  border border-slate-400 outline-none cursor-pointer hover:bg-light-blue "
            onClick={() => selectedPageHandler(page - 1)}
          >
            ◀️
          </span>

          {[...Array.from({ length: Math.ceil(mockData.length / 10) })].map(
            (_, i) => {
              return (
                <span
                  key={i}
                  className={`p-2  border border-slate-400 outline-none cursor-pointer hover:bg-light-blue m-1  ${
                    page === i + 1 ? "bg-light-blue" : ""
                  }`}
                  onClick={() => selectedPageHandler(i + 1)}
                >
                  {i + 1}
                </span>
              );
            }
          )}

          <span
            className="p-2  border border-slate-400 outline-none cursor-pointer hover:bg-light-blue"
            onClick={() => selectedPageHandler(page + 1)}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
}

export default BasicTable;
