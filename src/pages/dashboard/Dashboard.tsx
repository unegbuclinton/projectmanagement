import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashBoardLayout from '../../components/layouts/DashBoardLayout';
import {
  DPIconBackLog,
  DPIconCompleted,
  DPIconInproogress,
  DPIconMore,
  DPIconPending,
  DPIconTime,
} from '../../icons';
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
  const navigate: any = useNavigate();
  return (
    <DashBoardLayout>
      <DashboardHeader>Project Summary</DashboardHeader>
      <DashboarMoreButton onClick={() => navigate('/projects')}>
        <p>See all</p>
        <span>
          <DPIconMore />
        </span>
      </DashboarMoreButton>
      <DashboardWrapper>
        <CardsContainer>
          <div className="card-1">
            <div className="icon">
              <DPIconBackLog />
            </div>
            <div className="project-num">10 Projects</div>
            <div className="category">Backlog</div>
          </div>
          <div className="card-2">
            <div className="icon">
              <DPIconCompleted />
            </div>
            <div className="project-num">15 Projects</div>
            <div className="category">Completed</div>
          </div>
        </CardsContainer>
        <CardsContainer>
          <div className="card-3">
            <div className="icon">
              <DPIconInproogress />
            </div>
            <div className="project-num">12 Projects</div>
            <div className="category">In Progress</div>
          </div>
          <div className="card-4">
            <div className="icon">
              <DPIconPending />
            </div>
            <div className="project-num">5 Projects</div>
            <div className="category">Pending</div>
          </div>
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
