import React from 'react';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Container, Avatar, OnlineStatus, RightSide, Button, Image } from './styles';
import colors from '../../styles/colors';



const Header: React.FC = () => {
  return (
    <Container>
      <Avatar >
        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/53905314?s=60&u=e725d59a2b38aff6ed2e6a66b6e64ee507126347&v=4' }} />
        <OnlineStatus />
      </Avatar>
      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>

    </Container>
  );
}

export default Header;