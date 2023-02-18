import InnerContainer from '@/design-system/base/innerContainer'

function Footer() {
  return (
    <footer>
      <InnerContainer>
        <p>
          © {new Date().getFullYear()} Kraft - This application was developed
          for the Sirius take-home assignment, submitted by{' '}
          <a
            href="https://kaungmyat.vercel.app/"
            className="underline text-secondary"
          >
            Kraft
          </a>
          .
        </p>
      </InnerContainer>
    </footer>
  )
}

export default Footer
