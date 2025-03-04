import { CalendarBlank, Clock, GlobeSimple } from '@jengaicons/react';
import { Block } from '~/app/components/commons';
import { GraphItem } from '~/app/components/graph';
import ResponsiveContainer from '~/app/components/responsive-container';
import Profile from '@kloudlite/design-system/molecule/profile';
import Button from '~/app/components/button';
import { useEffect, useRef, useState } from 'react';
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Radio from '@kloudlite/design-system/atoms/radio';
import ResponsiveImage from '../responsive-image';
import Link from 'next/link';
import { webinarUrl } from '~/app/utils/config';

const events = [
  {
    eventTitle: (
      <div>
        Code Unbound:
        <br className="wb-hidden lg:wb-block" /> No Builds, No Deploys
        <br className="wb-hidden lg:wb-block" /> The New Era of Developments
      </div>
    ),
    eventId: 'code-unbound-new-age-development-environments',
    eventType: 'Online',
    eventDate: 'Aug 31, 2024',
    eventTime: '11:00 to 12:00 pm',
    eventAuthorName: 'Karthik Thriumalasetti',
    eventAuthorDetail: 'Founder & CEO, Kloudlite',
  },
];

const Events = () => {
  const sliderRef = useRef<Splide>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.go(active);
    }
  }, [sliderRef.current, active]);

  const profileData = (es: any) => ({
    title: es.eventAuthorName,
    responsive: false,
    name: (
      <span className="wb-headingSm md:wb-headingMd xl:wb-headingLg">
        {es.eventAuthorName}
      </span>
    ),

    subtitle: (
      <span className="wb-bodySm md:wb-bodyMd xl:wb-bodyLg">
        {es.eventAuthorDetail}
      </span>
    ),
  });
  return (
    <Block
      title="Kloudlite live"
      desc="Join us at upcoming events and learn with the Community"
    >
      <GraphItem>
        <Splide
          ref={sliderRef}
          options={{
            autoplay: true,
            arrows: false,
            pagination: false,
            type: 'loop',
          }}
          onMove={(e) => setActive(e.index)}
          hasTrack={false}
        >
          <SplideTrack>
            {events.map((es) => {
              const banner = es.eventId;
              return (
                <SplideSlide key={es.eventId}>
                  <ResponsiveContainer className="wb-grid !wb-gap-0 wb-grid-cols-1 lg:wb-grid-cols-2 2xl:wb-grid-cols-[auto_608px] wb-bg-surface-basic-default">
                    <ResponsiveImage
                      alt={es.eventId}
                      rmobile={`/events/${banner}-home-mobile.png`}
                      rmobileDark={`/events/${banner}-home-mobile.png`}
                      r768={`/events/${banner}-home-768.png`}
                      r768Dark={`/events/${banner}-home-768.png`}
                      r1024={`/events/${banner}-home-1024.png`}
                      r1024Dark={`/events/${banner}-home-1024.png`}
                      r1280={`/events/${banner}-home-1280.png`}
                      r1280Dark={`/events/${banner}-home-1280.png`}
                      r1440={`/events/${banner}-home-1440.png`}
                      r1440Dark={`/events/${banner}-home-1440.png`}
                      r1920={`/events/${banner}-home-1920.png`}
                      r1920Dark={`/events/${banner}-home-1920.png`}
                      className="wb-w-full wb-h-full wb-object-contain xl:wb-max-h-[416px]"
                    />
                    <div className="wb-bg-surface-basic-default wb-p-4xl xl:wb-p-5xl wb-flex wb-flex-col wb-gap-4xl xl:wb-gap-4xl">
                      <div className="wb-flex wb-flex-row wb-items-center lg:wb-justify-between wb-gap-lg xl:wb-gap-x-3xl wb-gap-y-lg wb-bodyLg 2xl:wb-bodyXl wb-text-text-soft wb-flex-wrap">
                        <div className="wb-flex wb-flex-row wb-items-center wb-gap-lg wb-h-5xl">
                          <span>
                            <CalendarBlank size={20} />
                          </span>
                          <span>{es.eventDate}</span>
                        </div>
                        <div className="wb-flex wb-flex-row wb-items-center wb-gap-lg wb-h-5xl">
                          <span>
                            <Clock size={20} />
                          </span>
                          <span>{es.eventTime}</span>
                        </div>
                        <div className="wb-flex wb-flex-row wb-items-center wb-gap-lg wb-h-5xl">
                          <span>
                            <GlobeSimple size={20} />
                          </span>
                          <span>{es.eventType}</span>
                        </div>
                      </div>
                      <div className="wb-heading2xl xl:wb-heading3xl wb-text-text-default xl:wb-min-h-[129px] wb-flex wb-items-center wb-line-clamp-3">
                        {es.eventTitle}
                      </div>
                      <div>
                        <div className="wb-hidden xl:wb-block">
                          <Profile size="lg" {...profileData(es)} />
                        </div>
                        <div className="wb-block xl:wb-hidden">
                          <Profile size="md" {...profileData(es)} />
                        </div>
                      </div>

                      <div>
                        <div className="wb-hidden 2xl:wb-block">
                          <Button
                            block
                            size="lg"
                            content="Register now"
                            variant="primary"
                            linkComponent={Link}
                            toLabel="href"
                            to={`${webinarUrl}/around/join?aroundUrl=${webinarUrl}/around/join`}
                          />
                        </div>
                        <div className="2xl:wb-hidden">
                          <Button
                            block
                            size="md"
                            content="Register now"
                            variant="primary"
                            linkComponent={Link}
                            toLabel="href"
                            to={`${webinarUrl}/around/join?aroundUrl=${webinarUrl}/around/join`}
                          />
                        </div>
                      </div>
                    </div>
                  </ResponsiveContainer>
                </SplideSlide>
              );
            })}
          </SplideTrack>
        </Splide>
      </GraphItem>
      <div className="wb-h-[31px] wb-bg-surface-basic-subdued wb-flex wb-flex-row wb-items-center wb-justify-center wb-z-10 wb-relative">
        <Radio.Root
          value={`${active}`}
          onChange={(e) => {
            if (sliderRef.current) {
              sliderRef.current.go(parseInt(e, 10) || 0);
            }
          }}
          className="!wb-flex-row wb-self-center"
        >
          {/* @ts-ignore */}
          {events.map((_, index) => {
            const i = index;
            // @ts-ignore
            return <Radio.Item key={i} value={`${i}`} />;
          })}
        </Radio.Root>
      </div>
    </Block>
  );
};

export default Events;
