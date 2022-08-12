import React from 'react';
import styled from 'styled-components';
import DashBoardLayout from '../../components/layouts/DashBoardLayout';

const Test = () => {
  return (
    <DashBoardLayout>
      <Wrapper>
        <div className="box-container__1">
          <div className="box-1"></div>
          <div className="box-2"></div>
        </div>
        <div className="box-container__2">
          <div className="box-1"></div>
          <div className="box-2"></div>
        </div>
      </Wrapper>
    </DashBoardLayout>
  );
};

export default Test;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 30.1rem;

  .box-container__1,
  .box-container__2 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .box-container__1 {
    .box-1 {
      background-color: #cfe0c3;
      width: 15.2rem;
      height: 13.5rem;
      border-radius: 0.7rem;
    }
    .box-2 {
      background-color: #5f5aa2;
      width: 15.2rem;
      height: 15.1rem;
      border-radius: 0.7rem;
    }
  }

  .box-container__2 {
    .box-1 {
      background-color: #40798c;
      width: 14.7rem;
      height: 14.8rem;
      border-radius: 0.7rem;
    }
    .box-2 {
      background-color: #99e1d9;
      width: 14.7rem;
      height: 12.8rem;
      border-radius: 0.7rem;
    }
  }
`;
