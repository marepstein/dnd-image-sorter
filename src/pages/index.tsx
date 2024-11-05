import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Intro = styled.div`
  text-align: center;
  padding: 100px 20px;

  h1 {
    margin-top: 50px;
  }

  a {
    color: white;
    background-color: #ff015c;
    font-weight: 600;
    font-size: 13px;
    margin-top: 50px;
    display: inline-block;
    border-radius: 8px;
    padding: 12.5px 50px;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Popsa.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Intro>
          <Image src="/logo.svg" alt="Popsa" width="127" height="32" />
          <h1>Welcome to the React frontend test</h1>
          <Link href="/image-sorter">
            <a>Start test</a>
          </Link>
        </Intro>
      </div>
    </>
  );
}
