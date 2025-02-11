type IRenderOption = {
  sitekey: string;
  size?: string;
  badge?: string;
  theme?: any;
};
declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        reset: () => void;
        render: (container: string, option?: IRenderOption) => void;
        ready: (callback: () => Promise<void>) => void;
        execute: (
          sitekey: string,
          action: {
            action: string;
          },
        ) => Promise<string>;
      };
    };
  }
}

export const onReady = (callback: () => Promise<void>) => {
  if (
    !window.grecaptcha ||
    !window.grecaptcha.enterprise ||
    !window.grecaptcha.enterprise.ready
  ) {
    console.warn('window.grecaptcha.enterprise.ready is not defined.');
    return;
  }
  const ready = window.grecaptcha.enterprise.ready;
  return ready(callback);
};

export const render = (container: string, option: IRenderOption) => {
  if (
    !window.grecaptcha ||
    !window.grecaptcha.enterprise ||
    !window.grecaptcha.enterprise.render
  ) {
    console.warn('window.grecaptcha.enterprise.render is not defined.');
    return;
  }
  const render = window.grecaptcha.enterprise.render;
  render(container, option);
};

export const execute = async (
  sitekey: string,
  action: {
    action: string;
  },
) => {
  if (
    !window.grecaptcha ||
    !window.grecaptcha.enterprise ||
    !window.grecaptcha.enterprise.ready
  ) {
    console.warn('window.grecaptcha.enterprises.ready is not defined.');
    return;
  }
  const exec = window.grecaptcha.enterprise.execute;
  return exec(sitekey, action);
};

export const reset = async () => {
  if (
    !window.grecaptcha ||
    !window.grecaptcha.enterprise ||
    !window.grecaptcha.enterprise.reset
  ) {
    console.warn('window.grecaptcha.enterprises.reset is not defined.');
    return;
  }
  const r = window.grecaptcha.enterprise.reset;
  return r();
};

const grecaptcha = {
  onReady,
  render,
  execute,
  reset,
};

export default grecaptcha;
