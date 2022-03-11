export default function Input({ name, placeholder, labelText }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input required id={name} name={name} placeholder={placeholder}></input>
    </>
  );
}
