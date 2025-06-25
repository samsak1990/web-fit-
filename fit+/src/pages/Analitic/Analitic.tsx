import React from 'react';
import styles from './Analitic.module.css';
import WrapperInnerContent from '../../components/WrapperInnerContent/WrapperInnerContent';
import BlockRefLink from './components/BlockRefLink/BlockRefLink';
import Block from '../../components/Block/Block';
import BlockUsers from './components/BlockUsers/BlockUsers';
import BlockGeneralTabel from './components/BlockGenerelTabel/BlockGeneralTabel';

// type Props = {}

const Analitic: React.FC = () => {
  return (
    <>
      <WrapperInnerContent>
        <Block>
          <BlockRefLink link="https://fitlife-bot.ru/refs?ref=ivanova" />
        </Block>
      </WrapperInnerContent>
      <WrapperInnerContent>
        <Block>
          <BlockUsers data={[]} />
        </Block>
      </WrapperInnerContent>
      <WrapperInnerContent>
        <Block>
          <BlockGeneralTabel />
        </Block>
      </WrapperInnerContent>

      {/* <BlockUsers data={ } />
            <BlockJoined data={ } /> */}
    </>
  );
};

export default Analitic;
