import { useMyMiniForm } from "./useMyMiniForm";

export function MyHookForm() {
  const { input, form } = useMyMiniForm();
  return (
    <>
      <form>
        <input name="username" onChange={form} value={input.username}></input>
        <input
          name="password"
          type="password"
          onChange={form}
          value={input.password}
        ></input>
      </form>
    </>
  );
}
