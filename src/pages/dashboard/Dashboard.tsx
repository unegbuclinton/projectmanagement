import React from 'react';
import DashBoardLayout from '../../components/layouts/DashBoardLayout';
import { DPIconMore, DPIconTime } from '../../icons';
import projectImage from '../../icons/img/mobileImg.jpg';
import {
  CardsContainer,
  DashboardHeader,
  DashboardWrapper,
  DashboarMoreButton,
  ProjectDescription,
  ProjectHeader,
  ProjectImg,
  ProjectsContainer,
  ProjectsItem,
} from './styles';

interface Prop {}
const Dashboard: React.FC<Prop> = () => {
  return (
    <DashBoardLayout>
      <DashboardHeader>Project Summary</DashboardHeader>
      <DashboarMoreButton>
        <p>See all</p>
        <span>
          <DPIconMore />
        </span>
      </DashboarMoreButton>
      <DashboardWrapper>
        <CardsContainer>
          <div className="card-1"></div>
          <div className="card-2"></div>
        </CardsContainer>
        <CardsContainer>
          <div className="card-3"></div>
          <div className="card-4"></div>
        </CardsContainer>
      </DashboardWrapper>

      <ProjectHeader> Projects</ProjectHeader>
      <ProjectsContainer>
        <ProjectsItem>
          <div className="project-info">
            <p className="project-info__header">UI Integration</p>
            <p className="project-info__time">
              <span>
                <DPIconTime />
              </span>
              05 August 2023
            </p>
          </div>
          <ProjectDescription>Make a fix for the UI</ProjectDescription>
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
      </ProjectsContainer>
    </DashBoardLayout>
  );
};

export default Dashboard;
