import React from "react";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom'
import { mq } from "../styles/media-query";

function FindPasswordForm() {
  return (
    <>
      <title>아챠 | 비밀번호 찾기</title>
      <FindPasswordContainer>
        <HeaderWrap>
          <Logo type="button">
            <Link to="/">아챠</Link>
          </Logo>

          <Login type="button">
            <Link to="/login">로그인</Link>
          </Login>
        </HeaderWrap>
        <FindPasswordWrapper>
          <form>
            <Link to="/login">
              <BackSpace />
            </Link>
            <FormHeader>
              <h2>비밀번호 찾기</h2>
            </FormHeader>
            <InputBox>
              <input
                type="email"
                placeholder="이메일 (example@gmail.com)"
              />
            </InputBox>
            <Notice>
              기존에 가입하신 이메일 주소를 입력해주시면 임시주소가 발송됩니다.
              임시주소로 들어오신 뒤 새로운 비밀번호를 설정하세요.
            </Notice>
            <Button
              type="submit"
            >
              확인
            </Button>
          </form>
        </FindPasswordWrapper>
      </FindPasswordContainer>
    </>
  );
}

export default FindPasswordForm;

const FindPasswordContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url("/via.placeholder.com/250/000000/ffffff") center center /
    cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 24, 0.8);
  }
`;

const FindPasswordWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  color: white;
`;



const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 0px 0px 21px;
  border-bottom: 1px solid rgba(154, 151, 161, 0.2);
  background-color: rgb(248, 47, 98);
  color: rgb(255, 255, 255);
  font-weight: 700;
  letter-spacing: -0.1px;
  text-align: center;
  border-radius: 40px;
  border: none;
  font-size: 16px;
  line-height: 47px;
  height: 48px;

  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`

const Logo = styled.button`
  width: 94px;
  height: 72px;
  background: url('/via.placeholder.com/250/000000/ffffff') no-repeat center center;
  background-size: contain;
  border: none;
  a {
    width: 100%;
    height: 100%;
    line-height: 0;
    padding: 1em 5em;
    opacity: 0;
  }
`

const Login = styled.button`
  background: none;
  border: none;
  a {
    background: #fff;
    padding: 0.5em 1em;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 700;
  }
`

// 헤더 네비게이션
const HeaderWrap = styled.nav`
  z-index: 80;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${mq({
    padding: ['0 3em', '0 1em', '0 1.5em', '0 1.5em', '0 2.5em', '0 2em 0 3em'],
  })};
`

const BackSpace = styled.a`
  position: absolute;
  top: -9px;
  left: -46px;
  background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5BcnRib2FyZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxOS42OTM2MTY4IDExLjIxODg4IDQuOTU1ODk4OTUgMTEuMjE4ODggMTEuMTk2NzA3NCAxNy4zOTU0MTg5IDkuNDgxNDQgMTkuMDkyNDk2OCAwLjMgMTAuMDA1NjQyMSAyLjAxNTI2NzM3IDguMzA4NTY0MjEgMi4wMTU4NzM2OCA4LjMwOTE3MDUzIDkuNDgxNDQgMC45MiAxMS4xOTY3MDc0IDIuNjE3MDc3ODkgNC45NTU4OTg5NSA4Ljc5MzYxNjg0IDE5LjY5MzYxNjggOC43OTM2MTY4NCI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4=')
    center center / 20px 20px no-repeat;
  width: 34px;
  height: 34px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
`



const FormHeader = styled.div`
  margin: 0px 0px 14px;

  & > h2 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  & > a {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.4px;
    opacity: 0.5;
    cursor: pointer;
  }
`

const InputBox = styled.div`
  position: relative;
  width: 100%;

  & > input {
    width: 100%;
    padding: 12px 44px 12px 14px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: normal;
    border: 1px solid rgba(154, 151, 161, 0.2);
    border-bottom: none;
    border-radius: 4px;
    line-height: 1;
  }

  & > input::placeholder {
    color: #a7a8af;
  }
`

const Notice = styled.p`
  color: rgb(213, 212, 215);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.3px;
  text-align: left;
  padding: 10px 14px 0px;
  line-height: normal;
`