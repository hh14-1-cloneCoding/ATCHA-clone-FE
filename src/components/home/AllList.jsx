import React from "react";
import { useQuery } from "react-query";
import { allListAPI } from "../../api/listdata/allListAPI";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function AllList() {

  const navigate = useNavigate();
  const { data } = useQuery("allListAPI", allListAPI);
  console.log("받아온 데이터값 => ", data)
  
  return (
    <Container>
      <Title>전체</Title>
      <Title2>뭘 볼지 모르겠다면 여기서 골라보세요!</Title2>
      <Content>
        {data &&
          data?.map(
            (allList) => (
              allList?.category === "MOVIE" ? (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/movie/${allList.id}`)}
                  src={allList.image}
                />
              ) : (
                <Img
                  key={allList.id}
                  onClick={() => navigate(`/detailPage/tv/${allList.id}`)}
                  src={allList.image}
                />
              )
            )
          )}
      </Content>
    </Container>
  );
}

export default AllList;

const Container = styled.div`
  padding-bottom: 32px;
  padding-right: 30px;
  padding-left: 10px;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;
  :hover {
    transform: scale(1.12);
  }
`;

const Img = styled.img`
  width: 170px;
  height: auto;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 26px;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const Title2 = styled.h1`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgb(186, 186, 193);
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`;
