import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import MOCK_DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "./column";
import "./BasicTable.css";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortDescendingLetters } from "react-icons/tb";

function BasicTable() {
  //to imporove performance we use useMemo
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    previousPage,
  } = tableInstance;

  const { pageIndex } = state;

  console.log(tableInstance);

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
            <tr {...row.getRowProps()} className="even:bg-gray-100">
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
        <button onClick={() => previousPage()} disabled={!previousPage}>
          Previos Page {"  "}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
      </div>
    </table>
  );
}

export default BasicTable;
