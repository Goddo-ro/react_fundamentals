import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={e => setFilter({...filter, sort: e.target.value})}
        defaultValue="Sort"
        options={[
          {value: 'title', name: 'By name'},
          {value: 'body', name: 'By description'}
        ]}
      />
    </div>
  );
};

export default PostFilter;