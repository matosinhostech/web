import * as React from "react"
import PartnerLayout from "layouts/partners/PartnerLayout"
import Header from "shared/components/header"
import Seo from "shared/components/seo"
import { useStaticQuery, graphql } from "gatsby"

const useGetImages = (data) => data.allFile.edges.reduce(
  (result, { node: { name, publicURL } }) =>
    name === 'logo-dark' || name === 'logo-color' ? result :
      name === 'logo-light' ?
        [publicURL, ...result] :
        [...result, publicURL],
  []);

const PartnerPage = (props) => {
  const [logo, ...images] = useGetImages(props.data);

  return (
    <>
      <Seo />
      <Header />
      <PartnerLayout
        logo={logo}
        images={images}
        {...props.pageContext}
      />
    </>
  )
}

export const query = graphql`
  query PartnerPageQuery($assetsPath: String!) {
    allFile(filter: {relativePath: {regex: $assetsPath}}) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`;

export default PartnerPage
