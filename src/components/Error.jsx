export default function Error({ message }) {
  if (!message) {
    message = "Error";
  }
  return (
    <>
      <h1>{message}</h1>
    </>
  );
}
