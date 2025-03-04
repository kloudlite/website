import { ReactNode, useState } from 'react';
import { Button } from '@kloudlite/design-system/atoms/button';
import consts from '~/app/utils/const';
import { ArrowRight } from '~/app/icons/icons';
import { Block } from '../../commons';
import Slider from '../../slider';
import { GraphItem } from '../../graph';
import { Anchor } from '../../anchor';

export const ExploringItem = ({
  label,
  desc,
  img,
  to,
}: {
  label: ReactNode;
  desc: ReactNode;
  img: string;
  to?: string;
}) => {
  return (
    <Anchor
      href={to}
      className="wb-h-full wb-flex wb-flex-col wb-bg-surface-basic-default md:wb-min-h-[416px] 2xl:wb-min-h-[176px] 3xl:wb-min-h-[416px] 3xl:wb-max-h-[416px] wb-group hover:wb-will-change-contents focus:wb-will-change-contents wb-ring-offset-0 wb-ring-border-focus wb-outline-none focus-visible:wb-ring-2"
    >
      <img
        alt="explore"
        className="wb-object-cover wb-h-[156px] lg:wb-h-[136px] xl:wb-h-[160px] 2xl:wb-h-[192px] 3xl:wb-h-[232px] md:group-hover:wb-h-[136px] lg:group-hover:wb-h-[108px] xl:group-hover:wb-h-[140px] 2xl:group-hover:wb-h-[156px] 3xl:group-hover:wb-h-[206px] wb-transition-[height] wb-ease-in-out wb-duration-300 md:group-focus-within:wb-h-[136px] lg:group-focus-within:wb-h-[108px] xl:group-focus-within:wb-h-[140px] 2xl:group-focus-within:wb-h-[156px] 3xl:group-focus-within::wb-h-[206px]"
        src={img}
      />
      <div className="wb-flex wb-flex-col wb-gap-lg md:wb-gap-xl wb-p-3xl 2xl:wb-p-4xl">
        <h3 className="wb-headingLg-marketing md:wb-headingXl-marketing lg:wb-heading3xl-marketing wb-text-text-default">
          {label}
        </h3>
        <p className="wb-bodyLg lg:wb-bodyXl wb-text-text-strong">{desc}</p>
      </div>
      <div className="wb-block md:wb-absolute md:wb-bottom-0 wb-px-3xl 2xl:wb-px-4xl md:wb-pt-xl wb-pb-3xl md:wb-opacity-0 group-hover:wb-opacity-100 wb-transition-[padding,opacity] group-hover:wb-pb-3xl 2xl:group-hover:wb-pb-4xl group-hover:wb-will-change-[opacity,padding] group-focus-within::wb-pb-3xl 2xl:group-focus-within:wb-pb-4xl group-focus-within:wb-opacity-100 group-focus-within:wb-will-change-[opacity,padding] wb-duration-300 wb-ease-in-out">
        <Button
          content={<span className="wb-bodyLg">Read more</span>}
          suffix={<ArrowRight />}
          variant="primary-plain"
          className="!wb-pl-0"
        />
      </div>
    </Anchor>
  );
};

const KeepExploring = () => {
  const [active, setActive] = useState(0);
  return (
    <Block
      title="Unveil the untold - Keep exploring"
      graphClass="xl:[clip-path:inset(24px_1.5px_24px_1.5px)] 3xl:[clip-path:inset(1.5px)]"
    >
      <div className="wb-block md:wb-hidden">
        <Slider autoPlay active={`${active}`} onMove={(e) => setActive(e)}>
          {consts.homeNew.exploring.map((message) => (
            <ExploringItem key={message.label} {...message} />
          ))}
        </Slider>
      </div>

      <div className="wb-hidden md:wb-grid wb-grid-cols-1 md:wb-grid-cols-3 wb-gap-3xl lg:wb-gap-5xl">
        {consts.homeNew.exploring.map((e) => {
          return (
            <GraphItem key={e.label}>
              <ExploringItem {...e} />
            </GraphItem>
          );
        })}
      </div>
    </Block>
  );
};

export default KeepExploring;
