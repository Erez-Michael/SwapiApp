import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolTip2 from "../Tooltip/ToolTip2";

const PlanetsContent = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [hover, setHover] = useState();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
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
          placeholder="Search Planets..."
          onChange={(e) => handleFilter(e.target.value)}
        ></input>
      </Search>
      {filterData.map((planet) => (
        <Tool>
          <PlanetWrapper
            onMouseEnter={() => setHover(planet)}
            onMouseLeave={() => setHover(undefined)}
            onMouseMove={(e) => {
              setLeft(e.pageX - window.scrollX);
              setTop(e.pageY - window.scrollY);
            }}
          >
            <div key={planet.name}>{planet.name}</div>
          </PlanetWrapper>
          {hover == planet ? (
            <ToolTip2 planet={planet} left={left} top={top} />
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

const PlanetWrapper = styled.div`
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

export default PlanetsContent;