import InnerContainer from '@/design-system/base/innerContainer'

function Footer() {
  return (
    <footer className="mt-8 pt-4 border-t">
      <InnerContainer>
        <p className="text-center">
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
