export function Sum({ numbers = [1, 2, 3, 4, 5] }) {
  return (
    <h1>
      La somma degli elementi è :{numbers.reduce((num1, num2) => num1 + num2)}
    </h1>
  );
}
// possiamo settare il valore di default della prop direttamente nella function e se successivamente volessimo modificarlo
// lo possiamo settare direttamente quando andremo a implementare il componente Sum in App (<Sum numbers= {[2,2,2,2]})
// usando questo comportamento è come se usassimo un Conditional Rendering.
//(Function and Components 03)
