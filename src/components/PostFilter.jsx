import React from 'react';
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Please type in your search query"
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultOption='Sort by'
                options={[
                    {value: "title", name: "By title"},
                    {value: "body", name: "By description"},
                    {value: "id", name: "By adding time"},
                ]}
            />
        </div>
    );
};

export default PostFilter;