import type { Item } from 'nextra/normalize-pages';
import type { ReactElement } from 'react';
import { Fragment } from 'react';
import { ChevronRight } from '@jengaicons/react';
import { cn } from '../utils/commons';
import { Button } from '@kloudlite/design-system/atoms/button';
import Link from 'next/link';

export function Breadcrumb({
  activePath,
}: {
  activePath: Item[];
}): ReactElement {
  return (
    <div className="wb-items-center wb-gap-md wb-overflow-hidden">
      {activePath
        .filter((f) => f.name !== 'index')
        .map((item, index) => {
          const isLink = !!item.children;
          const isActive = index === activePath.length - 1;

          return (
            <Fragment key={item.route + item.name}>
              {index > 0 && (
                <span className="wb-text-icon-soft wb-inline-block [vertical-align:middle]">
                  <ChevronRight size={16} />
                </span>
              )}
              <span
                className={cn(
                  'wb-shrink-0 wb-transition-colors [vertical-align:middle]',
                  {
                    'wb-bodyMd-medium wb-text-text-default': isActive,
                    'wb-bodyMd wb-min-w-[24px] wb-overflow-hidden wb-text-ellipsis wb-text-text-soft':
                      !isActive,
                    'hover:wb-text-text-strong hover:wb-underline wb-underline-offset-4':
                      !!isLink,
                  },
                )}
                title={item.title}
              >
                {isLink && !isActive ? (
                  <Button
                    to={item.route}
                    linkComponent={Link}
                    toLabel="href"
                    content={item.title}
                    variant="plain"
                    size="sm"
                    className="!wb-inline-block !wb-no-underline  [vertical-align:bottom]"
                  />
                ) : (
                  <span className="wb-px-md wb-py-sm">{item.title}</span>
                )}
              </span>
            </Fragment>
          );
        })}
    </div>
  );
}
