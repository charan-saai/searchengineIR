import React, { useState } from "react";
import { Input } from "antd";
import { useHistory } from "react-router-dom";

const { Search } = Input;
function SearchPage() {
  const [search, setSearch] = useState("");

  const history = useHistory();
  const handleClick = (value) => {
    setSearch(value);
    history.push({ pathname: "/results", state: search });
  };
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={handleClick}
        enterButton
      />
    </div>
  );
}

export default SearchPage;
