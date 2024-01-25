import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "./column";
import "./BasicTable.css";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortDescendingLetters } from "react-icons/tb";
import { Checkbox } from "./RowSelection";

function BasicTable() {
  //to imporove performance we use useMemo
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

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
  } = useTable(
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
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex, pageSize } = state;

  return (
    <table {...getTableProps} className="w-full border-collapse">
      <thead className="p-2 text-center">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="">
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="p-2 text-left"
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
            <tr {...row.getRowProps()} onClick={()=>{}} className="even:bg-gray-100 cursor-pointer">
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="p-2">
                  {cell.render("Cell")}{" "}
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

      <div>
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        {/* <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10].map((pageSize) => (
            <option key={pageSize}> show {pageSize}</option>
          ))}
        </select> */}

        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previos Page {"  "}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage} className="ml-3">
         Next Page
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>

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
  );
}

export default BasicTable;
