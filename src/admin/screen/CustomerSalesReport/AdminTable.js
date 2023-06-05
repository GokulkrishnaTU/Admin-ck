import React, { useRef, useState } from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    usePagination,
} from "react-table";
import { Styles } from "./AdminTable.styled";
// import { colors, role, size } from "../../../const/const";
import { BiSort } from "react-icons/bi";
import { InputElement, SelectElement } from "../../Input/Input";
import { SaveButtonElement, IconElement } from "../../Button/Button";
// import { InputElement, SelectElement } from '../Input/Input'

function AdminTable({ data, columns, heading }) {
    const inputRef = useRef(null);
    const [value1, setValue1] = useState();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        // setHiddenColumns,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const settingFilter = (e) => {
        setGlobalFilter(e.target.value);
        setValue1(e.target.value);
        inputRef.current?.focus();
    };

    React.useEffect(() => {
        // inputRef.current?.focus();
    }, []);

    return (
        <Styles>
            {/* <h3>{heading}</h3> */}

            <div className="search-div">
                <InputElement
                    ref={inputRef}
                    placeholder="Search"
                    value={value1}
                    onChange={(e) => settingFilter(e)}
                ></InputElement>
            </div>
            {/* </div> */}

            <table {...getTableProps()}>
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
                                    <span
                                        style={{
                                            float: "right",
                                            color: "#c4c4c4",
                                        }}
                                    >
                                        {column.isSorted ? (
                                            column.isSortDesc ? (
                                                <BiSort fontSize={12} />
                                            ) : (
                                                <BiSort fontSize={12} />
                                            )
                                        ) : column.isSortDesc ? (
                                            <BiSort fontSize={12} />
                                        ) : (
                                            <BiSort fontSize={12} />
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
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
            </table>

            <div className="pagination">
                <SaveButtonElement
                    style={{ width: "auto", height: "auto" }}
                    type={!canPreviousPage ? "#c4c4c4" : "#c4c4c4"}
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    {"<<"}
                </SaveButtonElement>
                &nbsp;
                <SaveButtonElement
                    style={{ width: "auto", height: "auto" }}
                    type={!canPreviousPage ? "#c4c4c4" : "#999999"}
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    {"<"}
                </SaveButtonElement>
                &nbsp;
                <SaveButtonElement
                    style={{ width: "auto", height: "auto" }}
                    type={!canNextPage ? "#c4c4c4" : "#999999"}
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    {">"}
                </SaveButtonElement>
                &nbsp;
                <SaveButtonElement
                    style={{ width: "auto", height: "auto" }}
                    type={!canNextPage ? "#c4c4c4" : "#999999"}
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    {">>"}
                </SaveButtonElement>
                &nbsp;
                <span>
                    Page&nbsp;
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                    &nbsp;
                </span>
                <span>
                    | Go to page:&nbsp;
                    <InputElement
                        type="number"
                        style={{ width: "auto", height: "auto" }}
                        placeholder=""
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            gotoPage(page);
                        }}
                    ></InputElement>
                </span>
                &nbsp;
                <SelectElement
                    style={{ width: "auto", height: "auto" }}
                    placeholder=""
                    dropdown="true"
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </SelectElement>
            </div>
        </Styles>
    );
}
export default AdminTable;
