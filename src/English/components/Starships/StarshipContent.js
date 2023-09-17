import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolTip3 from "../Tooltip/ToolTip3";

const StarshipContent = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [hover, setHover] = useState();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setFilterData(data.results);
        console.log(data.results);
      });
  }, []);

  const handleFilter = (e) => {
    setFilterData(
      data.filter((item) => {
        return item.name.toLowerCase().includes(e.toLowerCase());
      })
    );
  };

  return (
    <Wrapper>
      <Search>
        <input
          type="text"
          placeholder="Search Starships..."
          onChange={(e) => handleFilter(e.target.value)}
        ></input>
      </Search>
      {filterData.map((starship) => (
        <Tool>
          <StarshipWrapper
            onMouseEnter={() => setHover(starship)}
            onMouseLeave={() => setHover(undefined)}
            onMouseMove={(e) => {
              setLeft(e.pageX - window.scrollX);
              setTop(e.pageY - window.scrollY);
            }}
          >
            <div key={starship.name}>{starship.name}</div>
          </StarshipWrapper>
          {hover == starship ? (
            <ToolTip3 starship={starship} left={left} top={top} />
          ) : undefined}
        </Tool>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #272b30;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20% 0;
  @media screen and (max-width: 960px) {
    margin-top: 150px;
  }
`;

const Tool = styled.div`
  position: relative;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
  margin-top: -5%;
  scale: 1.35;
`;

const StarshipWrapper = styled.div`
  border: yellow 1px solid;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 35% 5% 35%;
  padding: 2% 0;
  box-shadow: -1px 1px 27px 0px rgba(253, 230, 30, 0.39);
  -webkit-box-shadow: -1px 1px 27px 0px rgba(253, 230, 30, 0.39);
  -moz-box-shadow: -1px 1px 27px 0px rgba(253, 230, 30, 0.39);
`;

export default StarshipContent;
