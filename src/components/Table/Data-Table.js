import React from "react";
import { useTable, useSortBy } from "react-table";
import { Table } from "reactstrap";
// Had to take out useFilters for time being. It goes in react-table
// useFilters,

// Reference: https://react-table.tanstack.com/docs/quick-start

function DataTable(props) {
  const data = React.useMemo(() => props.employees, [
    props.employees,
  ]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Profile Picture",
        accessor: "picture.medium",
        Cell: (props) => <img src={props.value} alt={props.value} />,
      },
      {
        Header: "First Name",
        accessor: "name.first",
        sortType: "basic",
        // filter: (rows, id, filterType) =>
        //   rows.filter((row) => row.values[id].startsWith(filterType)),
      },
      {
        Header: "Last Name",
        accessor: "name.last",
        sortType: "basic",
      },
      {
        Header: "Email",
        accessor: "email",
        sortType: "basic",
      },
      {
        Header: "Phone",
        accessor: "phone",
        sortType: "basic",
      },
      {
        Header: "State",
        accessor: "location.state",
        sortType: "basic",
      },
      {
        Header: "Age",
        accessor: "dob.age",
        sortType: "basic",
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
  } = useTable(
    {
      columns,
      data,
      initialState: {
        // This is where you can enter input to filter on first name.
        filters: [
          {
            id: "name.first",
            value: "",
          },
        ],
      },
    },
    // useFilters,
    useSortBy
  );

  return (
    <Table striped bordered hover dark {...getTableProps()}>
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
                  +/-{" "}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? " 🔽"
                      : " 🔼"
                    : ""}{" "}
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
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DataTable;
