export type BtnProps = {
  variant: 'primary' | 'secondary' | 'warning';
  disabled: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export type StyleType = {
  backgroundColor: string;
  padding: string;
  color: string;
};
