import React from "react";
import { useTable, useSortBy } from "react-table";

function DataTable(props) {
  const data = React.useMemo(() => props.employees, [
    props.employees,
  ]);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "name.first",
        sortType: 'basic',
      },
      {
        Header: "Last Name",
        accessor: "name.last",
        sortType: 'basic',
      },
      {
        Header: "Email",
        accessor: "email",
        sortType: 'basic',
      },
      {
        Header: "Phone",
        accessor: "phone",
        sortType: 'basic',
      },
      {
        Header: "State",
        accessor: "location.state",
        sortType: 'basic',
      },
      {
        Header: "Age",
        accessor: "dob.age",
        sortType: 'basic',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(
                  column.getSortByToggleProps()
                )}
              >
                {column.render("Header")}
                <span>
                  +{" "}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? " 🔽"
                      : " 🔼"
                    : ""}
                  +{" "}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
