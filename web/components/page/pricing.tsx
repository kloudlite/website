import { CheckCircleFill } from '@jengaicons/react';
import { GraphExtended, GraphItem } from '~/app/components/graph';
import consts from '~/app/utils/const';
import { cn } from '~/app/utils/commons';
import Wrapper from '../wrapper';
import SuperCharge from '../website/home/supercharge';

const PriceItem = ({
  item,
}: {
  item: (typeof consts.pricing.list)[number];
}) => {
  return (
    <div
      className={cn(
        'wb-relative wb-p-3xl lg:wb-p-4xl 2xl:wb-p-5xl wb-flex wb-flex-col wb-gap-5xl wb-h-full relative',
          {
            'wb-bg-surface-primary-subdued': !!item.selected,
            'wb-bg-surface-basic-subdued': !item.selected,
          }
      )}
    >
      {item.badge && (
        <div className="wb-absolute wb-top-0 -wb-translate-y-1/2  -wb-translate-x-1/2 wb-left-1/2 wb-z-[99]">
          {item.badge}
        </div>
      )}
      <div className="wb-flex wb-flex-col wb-gap-lg md:wb-h-[140px]">
        <span
          className={cn(
            'wb-headingMd md:wb-headingLg',
            item.fade ? 'wb-text-text-disabled' : 'wb-text-text-default'
          )}
        >
          {item.type}
        </span>
        <span
          className={cn(
            'wb-heading3xl md:wb-heading4xl',
            item.fade ? 'wb-text-text-disabled' : 'wb-text-text-default'
          )}
        >
          {item.price}
        </span>
        <span
          className={cn(
            'wb-bodyMd md:wb-bodyLg',
            item.fade ? 'wb-text-text-disabled' : 'wb-text-text-soft'
          )}
        >
          {item.descriptionn}
        </span>
      </div>
      <div className="wb-h-xs wb-bg-border-default" />
      <div className="wb-flex wb-flex-col wb-gap-2xl wb-flex-1">
        {item.featurePrecontent}
        {item.features.map((f) => {
          return (
            <div key={f} className="wb-flex wb-flex-row wb-gap-xl">
              <span
                className={cn(
                  'wb-pt-md',
                  item.fade ? 'wb-text-icon-disabled' : 'wb-text-icon-primary'
                )}
              >
                <CheckCircleFill size={16} />
              </span>
              <span
                className={cn(
                  'wb-bodyLg',
                  item.fade ? 'wb-text-text-disabled' : 'wb-text-text-default'
                )}
              >
                {f}
              </span>
            </div>
          );
        })}
      </div>
      <div>{item.action}</div>
    </div>
  );
};
const PriceRoot = () => {
  return (
    <Wrapper className="wb-relative wb-flex wb-flex-col wb-pt-6xl md:wb-pt-8xl lg:wb-pt-10xl">
      <div className="wb-flex wb-flex-col wb-w-full">
        <div className="wb-flex wb-flex-col wb-gap-6xl wb-text-center wb-w-full">
          <div className="wb-flex wb-flex-col wb-gap-3xl md:wb-max-w-[508px] lg:wb-max-w-[714px] 3xl:wb-max-w-full wb-m-auto">
            <h1 className="wb-heading3xl-marketing md:wb-heading4xl-marketing lg:wb-heading5xl-marketing wb-text-text-default">
              Straightforward & ideal plan for your business
            </h1>
            <p className="wb-bodyXl lg:wb-bodyXXl wb-text-text-soft">
              From early-stage teams to growing enterprises, we support every
              stage of your growth
            </p>
          </div>
        </div>
        <GraphExtended className="lg:wb-mt-5xl">
          <div className="wb-grid wb-grid-cols-1 md:wb-grid-cols-3 wb-gap-3xl lg:wb-gap-5xl wb-mt-3xl md:wb-mt-5xl">
            {consts.pricing.list.map((st) => (
              <GraphItem key={st.id} className="md:wb-min-h-[512px]">
                <PriceItem item={st} />
              </GraphItem>
            ))}
          </div>
        </GraphExtended>
      </div>
      <SuperCharge />
    </Wrapper>
  );
};

export default PriceRoot;
