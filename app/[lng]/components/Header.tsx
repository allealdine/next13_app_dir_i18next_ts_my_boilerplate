interface HeadProps {
  heading: string;
}
export const Header = ({ heading }: HeadProps) => (
  <>
    <h2>
      Next.js 13 <small>(app directory)</small> - i18next
      <hr />
    </h2>
    <h1>{heading}</h1>
    <a className="github" href="//github.com/i18next/i18next">
      <i className="typcn typcn-social-github-circular" />
    </a>
  </>
);
