export default function Head() {
  return (
    <>
      <title>シリウス</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Welcome to our animes news website!" />
      <link rel="icon" href="/favicon.ico" />

      {/* <!-- Open Graph tags --> */}
      <meta property="og:title" content="シリウス" />
      <meta
        property="og:description"
        content="Welcome to our animes news website!"
      />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <meta property="og:url" content="https://sirius-gogoanime.vercel.app" />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter card tags --> */}
      <meta name="twitter:title" content="シリウス" />
      <meta
        name="twitter:description"
        content="Welcome to our animes news website!"
      />
      <meta
        name="twitter:image"
        content="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
