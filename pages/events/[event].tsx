import { CalendarBlank, Clock, Globe } from '@jengaicons/react';
import fs from 'fs';
import graymatter from 'gray-matter';
import { Avatar } from '@kloudlite/design-system/atoms/avatar';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import path from 'path';
import { Block } from '~/app/components/commons';
import Container from '~/app/components/container';
import { GraphItem } from '~/app/components/graph';
import ResponsiveContainer from '~/app/components/responsive-container';
import ResponsiveImage from '~/app/components/website/responsive-image';
import { Button } from '@kloudlite/design-system/atoms/button';
import useCountdown from '~/app/utils/use-countdown';
import ExternalLayout from '~/app/layout/alternate-layout';
import { createComponents } from '~/app/layout/mdx-components';
import { cn } from '~/app/utils/commons';
import { useCallback, useMemo } from 'react';
import { webinarUrl } from '~/app/utils/config';
import events from '~/app/events.json';

type IEvent = {
  event: string;
  content: any;
  frontMatter: {
    name: string;
    date: string;
    starttime: string;
    endtime: string;
    type: 'Online' | 'Offline';
    banner: string;
    organizer: {
      author: string;
      title: string;
    };
  };
};

function convertTo12Hour(time24: string, hasPeriod?: true) {
  // Split the time into hours and minutes
  const [hours, minutes] = time24.split(':');

  // Determine whether it's AM or PM
  const period = parseInt(hours, 10) >= 12 ? 'PM' : 'AM';

  // Convert the hours from 24-hour format to 12-hour format
  const hours12 = parseInt(hours, 10) % 12 || 12; // Modulo to handle 0 and 12

  // Return the formatted time
  if (!hasPeriod) {
    return `${hours12}:${minutes}`;
  }
  return `${hours12}:${minutes} ${period}`;
}

const TimeItem = ({ value, unit }: { value: string; unit: string }) => {
  return (
    <div className="wb-flex wb-flex-col wb-gap-md">
      <div className="wb-headingLg wb-text-text-default wb-text-center">
        {value}
      </div>
      <div className="wb-bodySm wb-text-text-soft wb-text-center">{unit}</div>
    </div>
  );
};

const TimeSeparator = () => (
  <span className="wb-headingLg wb-text-text-default wb-text-center">:</span>
);

export default function Event({ event }: { event: IEvent }) {
  const { content, frontMatter } = event;

  const { banner, date, endtime, organizer, starttime, name, type } =
    frontMatter;

  const countdown = useCountdown(new Date(`${date}T${starttime}`));

  const countDownComponent = useMemo(() => {
    return (
      <div className="wb-grid wb-grid-cols-[36px_6px_36px_6px_36px_6px_36px] wb-gap-lg wb-justify-center">
        <TimeItem value={`${countdown.days}`} unit="days" />
        <TimeSeparator />
        <TimeItem value={`${countdown.hours}`} unit="hours" />
        <TimeSeparator />
        <TimeItem value={`${countdown.minutes}`} unit="mins" />
        <TimeSeparator />
        <TimeItem value={`${countdown.seconds}`} unit="sec" />
      </div>
    );
  }, [countdown]);

  const components = useCallback(() => createComponents({}), []);

  const isNow = useCallback(() => {
    return (
      countdown.days === 0 &&
      countdown.hours === 0 &&
      countdown.minutes === 0 &&
      countdown.seconds === 0
    );
  }, [countdown]);

  return (
    <ExternalLayout frontMatter={frontMatter}>
      <Container
        className={cn(
          'wb-min-h-[calc(100vh-76px)] wb-flex-row',
          'lg:wb-m-auto lg:!wb-max-w-[896px] wb-w-full wb-px-3xl md:!wb-px-5xl lg:!wb-px-8xl xl:!wb-px-11xl 2xl:!wb-px-12xl xl:!wb-max-w-[1024px] 2xl:!wb-max-w-[1120px] 3xl:!wb-min-w-[1408px] lg:!wb-box-content',
        )}
      >
        <Block title={name}>
          <ResponsiveContainer className="wb-grid-rows-1">
            <div className="wb-grid wb-grid-rows-[auto_auto] md:wb-grid-rows-[380px_auto] lg:wb-grid-rows-[480px_auto] wb-gap-3xl md:wb-gap-5xl wb-relative">
              <GraphItem>
                <ResponsiveImage
                  alt={name}
                  rmobile={`/events/${banner}-mobile.jpg`}
                  rmobileDark={`/events/${banner}-mobile.jpg`}
                  r768={`/events/${banner}-768.jpg`}
                  r768Dark={`/events/${banner}-768.jpg`}
                  r1024={`/events/${banner}-1024.jpg`}
                  r1024Dark={`/events/${banner}-1024.jpg`}
                  r1280={`/events/${banner}-1280.jpg`}
                  r1280Dark={`/events/${banner}-1280.jpg`}
                  r1440={`/events/${banner}-1440.jpg`}
                  r1440Dark={`/events/${banner}-1440.jpg`}
                  r1920={`/events/${banner}-1440.jpg`}
                  r1920Dark={`/events/${banner}-1440.jpg`}
                  className="wb-w-full md:wb-h-full"
                />
                <div className="wb-p-3xl wb-flex wb-flex-col md:wb-flex-row wb-gap-5xl md:wb-absolute wb-bg-surface-basic-default md:wb-z-50 md:wb-bottom-0 md:wb-left-1/2 md:-wb-translate-x-1/2 md:wb-translate-y-5xl md:wb-rounded md:wb-border md:wb-border-border-dark">
                  {countDownComponent}
                  <Button
                    block
                    content={isNow() ? 'Join now' : 'Register now'}
                    variant="primary"
                    linkComponent={Link}
                    toLabel="href"
                    to={`${webinarUrl}/around/join?aroundUrl=${webinarUrl}/around/join`}
                  />
                </div>
              </GraphItem>
              <GraphItem className="wb-relative wb-grid wb-grid-cols-1 md:wb-grid-cols-[auto_288px] wb-gap-3xl md:wb-gap-5xl wb-items-start">
                <div className="wb-border wb-border-r-[1.5px] wb-border-border-dark wb-bg-surface-basic-subdued wb-p-5xl wb-h-full">
                  <MDXRemote {...content} components={components} />
                </div>
                <div className="wb-hidden md:wb-block wb-absolute wb-w-[288px] wb-right-0 wb-bg-surface-basic-subdued wb-border wb-border-l-[1.5px] wb-border-border-dark wb-h-full wb-bottom-0 wb-top-0" />
                <div className="wb-sticky wb-top-0 wb-p-5xl wb-flex wb-flex-col wb-gap-5xl">
                  <div className="wb-flex wb-flex-col wb-gap-2xl wb-pb-5xl wb-border-b wb-border-border-default">
                    <div className="wb-flex wb-flex-row wb-gap-lg wb-items-center wb-bodyXl wb-text-text-soft">
                      <span>
                        <CalendarBlank size={20} />
                      </span>
                      <span>{date}</span>
                    </div>
                    <div className="wb-flex wb-flex-row wb-gap-lg wb-items-center wb-bodyXl wb-text-text-soft">
                      <span>
                        <Clock size={20} />
                      </span>
                      <span>
                        {convertTo12Hour(starttime)} to{' '}
                        {convertTo12Hour(endtime, true)}
                      </span>
                    </div>
                    <div className="wb-flex wb-flex-row wb-gap-lg wb-items-center wb-bodyXl wb-text-text-soft">
                      <span>
                        <Globe size={20} />
                      </span>
                      <span>{type}</span>
                    </div>
                  </div>
                  <div className="wb-flex wb-flex-col wb-gap-xl">
                    <Avatar size="md" color="one" />
                    <div className="wb-flex wb-flex-col wb-gap-md">
                      <span className="wb-text-text-default wb-headingLg">
                        {organizer.author}
                      </span>
                      <span className="wb-text-text-soft wb-bodyMd">
                        {organizer.title}
                      </span>
                    </div>
                  </div>
                </div>
              </GraphItem>
            </div>
          </ResponsiveContainer>
        </Block>
      </Container>
    </ExternalLayout>
  );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const paths = Object.keys(events).map((event) => {
    return { params: { event } };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: any) {
  // const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const filePath = path.join(
    process.cwd(),
    'pages',
    'events',
    '_md',
    `${params.event}.mdx`,
  );

  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { content, data } = graymatter(fileContents);

  // const processedContent = await remark().use(html).process(content);
  // const contentHtml = processedContent.toString();

  const contentHtml = await serialize(content);

  const event = {
    event: params.event,
    content: contentHtml,
    // @ts-ignore
    frontMatter: { ...data, ...events[params.event] },
  };

  return {
    props: { event },
  };
}
