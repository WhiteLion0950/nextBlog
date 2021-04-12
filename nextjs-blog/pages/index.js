import Head from 'next/head'
import Layout, { siteTitle } from '../pages/components/layout'
import utilStyles from './styles/utils.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! i'm Valentina, junior Full-stack web developer!</p>
        <h1 className="title">
  Read{' '}
  <Link href="/posts/first-post">
    <a>all my Posts</a>
  </Link>
</h1>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}