import React from 'react';


import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiCircle,
 } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem : React.FC = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
         <Username>rocketset_oficial</Username>
         <Info>36 new videos</Info>
        </Column>
      </LeftSide>
     <RightSide>
      <WhiCircle />
    </RightSide>
    </ChannelContainer>

    
  );
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
}

export default ChannelList;