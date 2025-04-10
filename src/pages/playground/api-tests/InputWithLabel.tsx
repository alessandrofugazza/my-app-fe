type InputWithLabelProps = {
  id: string;
  value: string;
  type?: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused?: boolean;
  children: React.ReactNode;
};

export default function InputWithLabel({
  id,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}: InputWithLabelProps) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} type={type} value={value} autoFocus={isFocused} onChange={onInputChange} />
    </>
  );
}
