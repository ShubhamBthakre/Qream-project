import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "./column";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortDescendingLetters } from "react-icons/tb";
import { Checkbox } from "./RowSelection";
import { useBusinessContext } from "../../context/businessContext";
import { NavLink } from "react-router-dom";

function BasicTable() {
  //to improve performance we use useMemo
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const { setActiveNavbarTitle, setItemDetails } = useBusinessContext();

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
    <div>
      <table
        {...getTableProps}
        className="w-full border-collapse border border-slate-300  rounded-t-xl overflow-hidden"
      >
        <thead className="text-center p-2">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-light-blue "
              key={headerGroup.id}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="p-1 md:p-3 text-left text-sm md:text-base border border-slate-300"
                  key={column.id}
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
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => setActiveNavbarTitle(Number(row.id) + 1)}
                className="even:bg-light-sky cursor-pointer hover:bg-sky-100"
                key={row.id}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="w-auto text-sm md:text-base text-wrap border-collapse border border-slate-200 p-1 md:p-3"
                    key={cell.id}
                    onClick={() => setItemDetails(Number(row.id) + 1)}
                  >
                    <NavLink
                      to="/registered-business-Item-details"
                      className={"w-full"}
                    >
                      {cell.render("Cell")}{" "}
                    </NavLink>
                  </td>
                ))}
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

      <div className="w-full flex gap-x-4 text-xl">
        {/* <div>
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="cursor-pointer"
            >
              {"<< "}
            </button>
          </div> */}

        <div className="w-full flex items-center gap-x-2 mt-2">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`p-2 md:p-3 bg-light-sky hover:bg-light-blue rounded-full text-base md:text-lg font-semibold ${!canPreviousPage?"opacity-40 cursor-not-allowed":"opacity-1 cursor-pointer"}`}
          >
            {"Prev"}
          </button>

          <div>
            <span className="font-semibold">{pageIndex + 1}</span> of{" "}
            <span className="font-semibold">{pageOptions.length}</span>
          </div>


        
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`p-2 md:p-3 bg-light-sky hover:bg-light-blue rounded-full text-base md:text-lg font-semibold ${!canNextPage?"opacity-40 cursor-not-allowed":"opacity-1 cursor-pointer"}`}
          >
            {"Prev"}
          </button>

         

          {/* <div>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="cursor-pointer"
            >
              {">>"}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BasicTable;
