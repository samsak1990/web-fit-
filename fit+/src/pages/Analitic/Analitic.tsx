import React, { useState } from 'react';
import WrapperInnerContent from '../../components/WrapperInnerContent/WrapperInnerContent';
import BlockRefLink from './components/BlockRefLink/BlockRefLink';
import Block from '../../components/Block/Block';
import BlockUsers from './components/BlockUsers/BlockUsers';
import BlockGeneralTabel from './components/BlockGenerelTabel/BlockGeneralTabel';
import Pagination from './components/Pagination/Pagination';
import { testData, ROWS_PER_PAGE } from './components/BlockGenerelTabel/constants';

const Analitic: React.FC = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testData.length / ROWS_PER_PAGE);
  const pagedData = testData.slice(page * ROWS_PER_PAGE, (page + 1) * ROWS_PER_PAGE);

  return (
    <>
      <WrapperInnerContent>
        <Block>
          <BlockRefLink link="https://fitlife-bot.ru/refs?ref=ivanova" />
        </Block>
      </WrapperInnerContent>
      <WrapperInnerContent>
        <Block>
          <BlockUsers />
        </Block>
      </WrapperInnerContent>
      <WrapperInnerContent>
        <Block>
          <BlockGeneralTabel data={pagedData} />
        </Block>
        <Pagination page={page} total={totalPages} onPage={setPage} />
      </WrapperInnerContent>
    </>
  );
};

export default Analitic;
