import React from 'react';
import MyInput from "./input/MyInput";
import MySelect from "./select/MySelect";

const MyFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search posts"
            />
            <MySelect
                defaultOption="Sort by"
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, filter: selectedSort})}
                options={[
                    {value: "title", name: "By title"},
                    {value: "body", name: "By description"}
                ]}
            />
        </div>
    );
};

export default MyFilter;