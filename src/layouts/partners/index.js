import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Navigation from "shared/components/navigation";
import Card from "./card";
import Carousel from "./carousel";
import useMediaQuery from "shared/hooks/useMediaQuery";

import "./styles.scss";

import portoTechHub from "assets/images/media/porto-tech-hub.svg";
import portoIo from "assets/images/media/porto-io.svg";
import significa from "assets/images/media/significa.svg";

const useGetImagesByPartner = (partners, images = []) =>
  partners.reduce((result, partner) => {
    const imgs = images.filter(
      ({ node: { relativePath } }) =>
        relativePath.includes(partner.slug) && relativePath.includes("dark")
    );

    return {
      ...result,
      [partner.slug]: imgs.length ? imgs[imgs.length - 1].node.publicURL : "",
    };
  }, {});

const PartnersListLayout = ({ path }) => {
  const {
    site: {
      siteMetadata: { partners },
    },
    allFile: { edges: logos },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            partners {
              slug
              name
            }
          }
        }
        allFile(
          filter: {
            relativePath: { regex: "/images/partners/" }
            name: { regex: "/logo/" }
          }
        ) {
          edges {
            node {
              publicURL
              name
              relativePath
            }
          }
        }
      }
    `
  );

  const logosByPartner = useGetImagesByPartner(partners, logos);
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const numberOfCarouselItems = isDesktop ? 8 : isMobile ? 4 : 6;

  return (
    <div className="partnersContainer">
      <div className="partnersMain">
        <Navigation path={path} page="partnersPage" />
        <div className="partners-content">
          <div className="sponsors">
            <h2 className="sponsors-title">sponsors</h2>
            <div className="sponsorMatrix">
              {partners.map(({ slug, name }) => (
                <Link className="clickable" to={`/partners/${slug}`}>
                  <Card slug={slug} name={name} image={logosByPartner[slug]} />
                </Link>
              ))}
              <div className="card">
                <div className="content">
                  <div className="center card-invite">
                    <span className="invite-message">
                      <span>this</span>
                      <span> could be</span>
                      <span> your company</span>
                    </span>
                  </div>
                  <div className="card-title">Your company's name</div>
                  <div className="card-link mail">
                    <a href="mailto:hello@matosinhos.tech">Talk to us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="media">
            <h2 className="media-title">partners</h2>
            <div className="partnerMatrix">
              <Carousel show={numberOfCarouselItems}>
                <div className="carousel-item">
                  <a href="https://portotechhub.com/" target="_blank">
                    <Card image={portoTechHub} />
                  </a>
                </div>
                <div className="carousel-item">
                  <a href="https://porto.io/" target="_blank">
                    <Card image={portoIo} />
                  </a>
                </div>
                <div className="carousel-item">
                  <a href="https://significa.co/" target="_blank">
                    <Card image={significa} />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersListLayout;
