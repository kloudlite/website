import consts from '~/app/utils/const';
import { GraphExtended, GraphItem } from '../../graph';
import ResponsiveImage from '../responsive-image';
import SectionWrapper from '../section-wrapper';

const AboutMain = () => {
  return (
    <SectionWrapper className="wb-flex wb-flex-col wb-w-full">
      <div className="wb-flex wb-flex-col wb-gap-3xl wb-text-center">
        <h1 className="wb-heading3xl-marketing md:wb-heading4xl-marketing lg:wb-heading5xl-marketing wb-text-text-default">
          About us
        </h1>
      </div>
      <GraphExtended>
        <div className="wb-grid wb-grid-cols-1 md:wb-grid-rows-[352px_auto] xl:wb-grid-rows-[416px_auto] md:wb-grid-cols-none md:wb-gap-8xl">
          <GraphItem
            className="wb-relative -wb-mx-3xl -wb-mt-4xl md:-wb-mt-7xl lg:-wb-mt-10xl md:wb-mx-auto xl:wb-mr-0 xl:wb-ml-auto 2xl:wb-mx-auto"
            lines={{ left: false, right: false, bottom: false, top: false }}
          >
            <ResponsiveImage
              alt="about-cover"
              rmobile={consts.aboutus.hero.images.rmobile}
              rmobileDark={consts.aboutus.hero.images.rmobileDark}
              r768={consts.aboutus.hero.images.rmd}
              r768Dark={consts.aboutus.hero.images.rmdDark}
              r1024={consts.aboutus.hero.images.rlg}
              r1024Dark={consts.aboutus.hero.images.rlgDark}
              r1280={consts.aboutus.hero.images.rxl}
              r1280Dark={consts.aboutus.hero.images.rxlDark}
              r1440={consts.aboutus.hero.images.r2xl}
              r1440Dark={consts.aboutus.hero.images.r2xlDark}
              r1920={consts.aboutus.hero.images.r3xl}
              r1920Dark={consts.aboutus.hero.images.r3xlDark}
            />
          </GraphItem>
          <div className="wb-grid wb-grid-cols-1 md:wb-grid-cols-[448px_auto] wb-gap-3xl md:wb-gap-5xl xl:wb-h-[544px] 2xl:wb-h-[480px] 3xl:wb-h-[320px]">
            <GraphItem className="wb-bg-surface-basic-subdued wb-p-5xl">
              <p className="wb-text-text-default wb-headingXl-marketing md:wb-heading2xl-marketing lg:wb-heading3xl-marketing">
                We make development a breeze, saving developers' time with our
                ultra-efficient platform
              </p>
            </GraphItem>
            <GraphItem className="wb-bg-surface-basic-subdued wb-p-5xl">
              <p className="wb-bodyLg md:wb-bodyXl lg:wb-bodyXXl wb-text-text-strong">
                At Kloudlite, we understand the challenges developers face
                because we've experienced them ourselves. We know how precious
                your time is, so we created a platform to streamline and
                simplify the development process. Our mission is to provide you
                with the tools for a seamless, productive experience. With
                Kloudlite, you can easily integrate any Kubernetes cluster,
                whether on the cloud or locally. We're here to make development
                smoother, faster, and more enjoyable. Join us and let’s build
                something amazing together.
              </p>
            </GraphItem>
          </div>
        </div>
      </GraphExtended>
    </SectionWrapper>
  );
};

export default AboutMain;
