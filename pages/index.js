import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Website Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="c-hero-container c-hero-container--blue c-hero-container--large u-inverse">
        <div className="container">
          <div className="section">
            <div className="columns is-vcentered">
              <div className="column is-half-desktop">
                <div className="content is-medium">
                  <h1 className="title">Website Leaderboard</h1>
                  <p>
                    Find the highest scoring websites for each category.
                  </p>
                  <Link
                    href="/sign-up"
                    className="is-success button is-medium has-text-weight-semibold"
                  >
                    Start Now
                  </Link>
                </div>
              </div>
              <div className="column is-half-desktop">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}