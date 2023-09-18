import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolTip3 from "../Tooltip/ToolTip3";
import BounceLoader from "react-spinners/BounceLoader";

const StarshipContent = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [hover, setHover] = useState();
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://swapi.dev/api/starships/")
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
        <BounceLoader loading={isLoading} size={150} color="#DCAB3D" />
      </Spinner>
    );
  } else {
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
