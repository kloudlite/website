import { Button as ButtonOrg, IButton } from '@kloudlite/design-system/atoms/button';

const Button = (props: IButton) => {
  const { content } = props;
  return <ButtonOrg {...props} content={content} />;
};

export default Button;
