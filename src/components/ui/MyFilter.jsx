import React from 'react';
import MyInput from "./input/MyInput";
import MySelect from "./select/MySelect";

const MyFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search users"
            />
            <MySelect
                defaultOption="Sort by"
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: "name", name: "By name"},
                    {value: "age", name: "By age"}
                ]}
            />
        </div>
    );
};

export default MyFilter;