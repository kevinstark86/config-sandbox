type Props = {
  name: string;
  address: string;
};

function Button({name, address}: Props) {
  return (
    <div>
      {name} {address}
    </div>
  );
}

export default Button;
