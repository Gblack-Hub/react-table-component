import React, {useState} from "react";
import { useAsyncDebounce } from 'react-table';

export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)

    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input
                value={value || ""}
                onChange={e => { setValue(e.target.value); onChange(e.target.value); }}
                placeholder={`${count} records available`}
            />
        </span>
    )
}