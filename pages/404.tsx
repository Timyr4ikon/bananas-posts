import Head from "next/head";
import Link from "next/link";
import {E404} from '../utils/styled-components'


export default function Error() {
  return (
    <>
      <Head>
        <title>Bananas | 404</title>
      </Head>
      <Link href="/">
        <E404 title="Press to GoHome)">404</E404>
      </Link>
    </>
  );
}


