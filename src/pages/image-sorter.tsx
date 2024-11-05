import Head from "next/head";
import styled from "styled-components";

import { pageData } from "@/lib/data/pageData";
import { SortableContentPage } from "@/modules/SortableContentPage";

const PageHeader = styled.div`
  margin: auto;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 24px;
  padding: 16px;

  @media (min-width: 768px) {
    max-width: 600px;
    margin-bottom: 42px;
    padding-bottom: 24px;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0.36px;
    color: #585858;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    color: #797979;
    margin: 0;
  }
`;

const Container = styled.div`
  padding: 24px;
  margin: 0 auto;
`;

export default function Testpage() {
  return (
    <div>
      <Head>
        <title>Test Page | Popsa.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader>
        <h1>Trip to the Beach</h1>
        <p>Hardback Photobook last edited on Thursday 13 April 2022 at 16:28</p>
      </PageHeader>
      <Container>
        <SortableContentPage data={pageData} />
      </Container>
    </div>
  );
}
