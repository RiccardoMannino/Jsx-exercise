import { useMemo } from "react";

export function FilteredList({ lista }) {
  function filtroLista(lista) {
    return lista.map(
      (item) =>
        item.age > 18 && (
          <li key={item.id}>
            Nome :{item.name}, Età:{item.age}
          </li>
        )
    );
  }

  const listamemo = useMemo(() => filtroLista(lista), [lista]);

  return <div>{listamemo}</div>;
}
