type InputWithLabelProps = {
  id: string;
  label: string;
  value: string;
  type?: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputWithLabel({ id, label, value, type = "text", onInputChange }: InputWithLabelProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </>
  );
}
