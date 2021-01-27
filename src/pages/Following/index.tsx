import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';

import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
 const { data, indexes }= React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <View />,
      },

      {
        key: 'FOLLOWED_CATEFORIES',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C1', render:() => <View/>, },

      {
        key: 'LIVE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C2', render:() => <View/>, },
      
      {
        key: 'CONTINUE_WATCHING',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C3', render:() => <View/>, },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C4', render:() => <View/>, },
    ];

    const indexes: number[] =[];

    items.forEach((item, index) => item.isTitle && indexes.push(index));
   
    return {
      data: items,
      indexes,
    }
  },[]);
  return (
  <Wrapper>
    <Container>
       <Header />
      <Main></Main>
    </Container>
  </Wrapper>
  );
}

export default Following;