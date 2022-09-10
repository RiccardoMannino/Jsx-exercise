export function Sum({ numbers = [1, 2, 3, 4, 5] }) {
  return (
    <h1>
      La somma degli elementi è :{numbers.reduce((num1, num2) => num1 + num2)}
    </h1>
  );
}
