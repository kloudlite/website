import { XFill } from '@jengaicons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import {
  IButton,
  IconButton,
  Button as NativeButton,
} from '@kloudlite/design-system/atoms/button';
import { ComponentProps, ReactNode } from 'react';
import { cn } from '../utils/commons';

const Header = ({ children, showclose = true }: any) => {
  return (
    <div className="border-b border-border-default p-3xl flex flex-row items-center min-h-[69px]">
      <Dialog.Title className="headingLg text-text-strong flex-1">
        {children}
      </Dialog.Title>
      {showclose && (
        <Dialog.Close asChild>
          <IconButton variant="plain" icon={<XFill />} />
        </Dialog.Close>
      )}
    </div>
  );
};

const Content = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'p-3xl overscroll-y-auto overflow-x-hidden flex-1 md:max-h-[65vh]',
        className,
      )}
    >
      {children}
    </div>
  );
};

const Form = (props: ComponentProps<'form'>) => {
  return <form {...props} className="flex-1 flex flex-col " />;
};

const Footer = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="p-3xl flex flex-row justify-end gap-lg bg-surface-basic-active">
      {children}
    </div>
  );
};

interface IPopupButton extends IButton {
  closable?: boolean;
}

const Button = (props: IPopupButton) => {
  const { closable = false } = props;
  return (
    <>
      {closable && (
        <Dialog.Close asChild>
          <NativeButton {...props} />
        </Dialog.Close>
      )}
      {!closable && <NativeButton {...props} />}
    </>
  );
};

interface IPopup {
  show?: boolean;
  onOpenChange?: (val: any) => void;
  backdrop?: boolean;
  className?: string;
  children?: ReactNode;
}

const PopupRoot = ({
  show = false,
  onOpenChange = () => {},
  children,
  backdrop = true,
  className = '',
}: IPopup) => {
  return (
    <Dialog.Root
      open={show}
      onOpenChange={(e) => {
        if (e) {
          onOpenChange(show);
        } else {
          onOpenChange(false);
        }
      }}
    >
      <AnimatePresence>
        {show && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'anticipate' }}
                className={cn(
                  'wb-fixed wb-inset-0 wb-z-[9999999]',
                  backdrop ? 'wb-bg-surface-basic-overlay-bg/60' : '',
                )}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ x: '-50%', y: '10%', opacity: 0 }}
                animate={{ x: '-50%', y: '0%', opacity: 1 }}
                exit={{ x: '-50%', y: '10%', opacity: 0 }}
                transition={{ duration: 0.4, ease: 'anticipate' }}
                className={cn(
                  'wb-flex wb-flex-col wb-rounded-t',
                  'wb-z-[99999999] wb-outline-none wb-transform wb-overflow-hidden md:wb-rounded wb-bg-surface-basic-default wb-shadow-modal',
                  'wb-fixed wb-bottom-0 wb-left-1/2',
                  'wb-w-full md:wb-h-auto md:wb-w-[612px]',
                  'wb-border wb-border-border-default',
                  className,
                )}
              >
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

const PopupDevDoc = {
  Root: PopupRoot,
  Header,
  Content,
  Footer,
  Button,
  Form,
};

export default PopupDevDoc;
