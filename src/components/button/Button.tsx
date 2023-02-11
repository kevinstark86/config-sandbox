type BtnProps = {
  variant: string;
  disabled: boolean;
  children: React.ReactNode;
};

type StyleType = {
  backgroundColor: string;
  padding: string;
};

function Button({variant, disabled, children}: BtnProps) {
  const primaryStyle: StyleType = {
    backgroundColor: 'blue',
    padding: '20px 40px',
  };
  const secondaryStyle = {};
  return (
    <button
      style={variant === 'primary' ? primaryStyle : secondaryStyle}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
