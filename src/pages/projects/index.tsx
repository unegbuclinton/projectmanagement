import React, { useState } from 'react';
import styled from 'styled-components';
import DashBoardLayout from '../../components/layouts/DashBoardLayout';
import { CreateProjectModal } from '../../components/molecules/CreateProjectModal';
import { COLORS } from '../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../constants/fonts';
import { DPIconHorizontalDots, DPIconPlus, DPIconTime } from '../../icons';
import projectImage from '../../icons/img/mobileImg.jpg';

const ProjectsPage = () => {
  const [show, setShow] = useState(false);
  return (
    <DashBoardLayout text="Clinton" onClick={() => setShow(true)}>
      <CreateProjectModal show={show} hide={() => setShow(false)} />
      <ProjectHeader>Projects</ProjectHeader>
      <ProjectWrapper>
        <ProjectContainer>
          <ProjectBox className="project-box">
            <div className="box-top">
              <h1>Backlog</h1>
              <div className="box-top__icons">
                <DPIconPlus />
                <DPIconHorizontalDots />
              </div>
            </div>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
          </ProjectBox>
          <ProjectBox className="project-box">
            <div className="box-top">
              <h1>In Progress</h1>
              <div className="box-top__icons">
                <DPIconPlus />
              </div>
            </div>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <ProjectImg src={projectImage} />
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
          </ProjectBox>
          <ProjectBox className="project-box">
            <div className="box-top">
              <h1>Done</h1>
              <div className="box-top__icons">
                <DPIconPlus />
              </div>
            </div>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
          </ProjectBox>
          <ProjectBox className="project-box">
            <div className="box-top">
              <h1>Review</h1>
              <div className="box-top__icons">
                <DPIconPlus />
                <DPIconHorizontalDots />
              </div>
            </div>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
            <ProjectsItem>
              <div className="project-info">
                <p className="project-info__header">Market Analysis</p>
                <p className="project-info__time">
                  <span>
                    <DPIconTime />
                  </span>
                  Aug 25 2022
                </p>
              </div>
              <ProjectDescription>Business Market Research </ProjectDescription>
              <div className="project-assignee">
                <div className="project-assignee__item"> UC</div>
              </div>
              <p className="project-status"> In progress</p>
            </ProjectsItem>
          </ProjectBox>
        </ProjectContainer>
      </ProjectWrapper>
    </DashBoardLayout>
  );
};

export default ProjectsPage;

const ProjectWrapper = styled.div`
  max-width: 100%;
  height: 65vh;
  display: flex;
`;

const ProjectContainer = styled.div`
  display: flex;
  gap: 3rem;
  padding-left: 2rem;
  padding-right: 1.9em;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const ProjectHeader = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  color: ${COLORS.white};
  margin-left: 1.5rem;
  margin-top: 3.8rem;
  margin-bottom: 2.7rem;
`;

const ProjectBox = styled.div`
  overflow-y: scroll;
  width: 100%;
  scroll-snap-align: start;
  flex: 1 0 72%;

  .box-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 23.5rem;
    height: 5.2rem;
    background-color: ${COLORS.black};
    border-radius: 1rem;
    color: white;
    padding: 1.4rem 1.2rem;

    &__icons {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const ProjectDescription = styled.div`
  font-size: ${FONTSIZES.base};
`;

export const ProjectsItem = styled.div`
  margin: 2rem auto;
  width: 23.1rem;
  background-color: ${COLORS.white};
  padding: 1.6rem 1.1rem 1.1rem 1.2rem;
  border-radius: 0.8rem;

  .project-status {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    margin-top: 0.8rem;
  }

  .project-assignee {
    margin-top: 1.1rem;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: ${COLORS['smoky-black']};
      color: ${COLORS.white};
    }
  }
  .project-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.1rem;

    &__header {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.bold};
    }

    &__time {
      display: flex;
      align-items: center;
      ${FONTSIZES.small};
      gap: 0.3rem;
    }
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 80px;
  margin-bottom: 1.2rem;
`;
