import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolTip2 from "../Tooltip/ToolTip2";
import RingLoader from "react-spinners/RingLoader";

const PlanetsContent = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [hover, setHover] = useState();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setFilterData(data.results);
        setIsLoading(false);

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
  if (isLoading) {
    return (
      <Spinner>
        <RingLoader loading={isLoading} size={150} color="#DCAB3D" />
      </Spinner>
    );
  } else {
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
  }
};

const Wrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
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

const Spinner = styled.span`
  background: #272b30;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
  @media screen and (max-width: 475px) {
    margin-top: 30%;
  }
`;

const Tool = styled.div`
  position: relative;
`;

const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
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