import React from 'react';
import DashBoardLayout from '../../components/layouts/DashBoardLayout';
import {
  DPIconChat,
  DPIconLanguage,
  DPIconNotification,
  DPIconProfile,
  DPIconTheme,
} from '../../icons';
import { SettingContainer, SettingText, SettingWrapper } from './styles';

interface Props {}

const Settings: React.FC<Props> = () => {
  const data = [
    { title: 'Profile', icon: <DPIconProfile /> },
    { title: 'Chat', icon: <DPIconChat /> },
    { title: 'Theme', icon: <DPIconTheme /> },
    { title: 'Notifications', icon: <DPIconNotification /> },
    { title: 'Language', icon: <DPIconLanguage /> },
  ];
  return (
    <DashBoardLayout text="Settings">
      <SettingWrapper>
        {data?.map(({ title, icon }, idx) => (
          <SettingContainer key={idx}>
            {icon}
            <SettingText>{title}</SettingText>
          </SettingContainer>
        ))}
      </SettingWrapper>
    </DashBoardLayout>
  );
};

export default Settings;
