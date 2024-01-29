import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "./column";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortDescendingLetters } from "react-icons/tb";
import { Checkbox } from "./RowSelection";
import { useBusinessContext } from "../../context/businessContext";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function BasicTable() {
  const [mockData, setMockData] = useState(MOCK_DATA);
  const [selectedOption, setSelectedOption] = useState("All");

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
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockData, [mockData]);
  const { setActiveNavbarTitle, setItemDetails } = useBusinessContext();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  console.log(tableInstance);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    setPageSize,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    previousPage,
    selectedFlatRows,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  return (
    <div className="w-full">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="outline-none mb-5 border border-slate-300 p-2 rounded-md font-poppins"
      >
        <option>All</option>
        <option>Corporation</option>
        <option>LCC</option>
      </select>

      <div className="border border-slate-300 rounded-xl">
        <table
          {...getTableProps}
          className="w-full border-collapse border table-fixed border-slate-300  rounded-t-xl overflow-hidden"
        >
          <thead className="text-center p-2">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-light-blue "
                key={uuidv4()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-1 md:p-3 text-left text-sm md:text-base border border-slate-300 font-poppins"
                    key={uuidv4()}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TbSortDescendingLetters />
                        ) : (
                          <AiOutlineSortAscending />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row) => {
              prepareRow(row);
              console.log("row", row.values.application_no);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() =>
                    setActiveNavbarTitle(row.values.application_no)
                  }
                  className="even:bg-light-sky cursor-pointer hover:bg-sky-100"
                  key={uuidv4()}
                >
                  {row.cells.map((cell) => {
                    console.log("cell :- ", cell.value);
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`w-auto text-sm md:text-base text-wrap border-collapse border border-slate-200 p-1 md:p-3 font-poppins ${
                          cell.value === "Completed"
                            ? "text-green-500"
                            : cell.value === "In-progress"
                            ? "text-red-500"
                            : "text-slate-700"
                        }`}
                        key={uuidv4()}
                        onClick={() => setItemDetails(Number(row.id) + 1)}
                      >
                        <NavLink
                          to="/registered-business-Item-details"
                          className={"w-full"}
                        >
                          {cell.render("Cell")}{" "}
                        </NavLink>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {/* <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot> */}

          {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map(row => row.original)
            },
            null,
            2
          )}
        </code>
      </pre> */}
        </table>

        {/* <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10].map((pageSize) => (
            <option key={pageSize}> show {pageSize}</option>
          ))}
        </select> */}

        <div className="w-full flex items-center gap-x-2 mt-2 font-poppins">
          <div>
            <span className="p-1 md:p-2 text-base md:text-md font-medium">
              {pageIndex + 1}
            </span>{" "}
            of{" "}
            <span className="p-1 md:p-2 text-base md:text-md font-medium">
              {pageOptions.length}
            </span>
          </div>

          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className={`p-2 md:p-3 text-base md:text-md font-medium ${
              !canPreviousPage
                ? "opacity-40 cursor-not-allowed"
                : "opacity-1 cursor-pointer"
            }`}
          >
            {"<<First"}
          </button>

          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`p-2 md:p-3 text-base md:text-md font-medium ${
              !canPreviousPage
                ? "opacity-40 cursor-not-allowed"
                : "opacity-1 cursor-pointer"
            }`}
          >
            {"<Prev"}
          </button>

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`p-2 md:p-3 text-base md:text-md font-medium ${
              !canNextPage
                ? "opacity-60 cursor-not-allowed"
                : "opacity-1 cursor-pointer"
            }`}
          >
            {"Next>"}
          </button>

          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className={`p-2 md:p-3 text-base md:text-md font-medium ${
              !canNextPage
                ? "opacity-60 cursor-not-allowed"
                : "opacity-1 cursor-pointer"
            }`}
          >
            {"Last>>"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasicTable;
