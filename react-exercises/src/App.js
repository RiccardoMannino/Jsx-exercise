import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { ToDoList } from "./ToDolist";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList ";
import { MyHookForm } from "./Myhookform";

export function App() {
  // state = {
  //   language: "en",
  // };

  // handleLanguageChange = (event) => {
  //   this.setState({
  //     language: event.target.value,
  //   });
  // };

  return (
    <Container title="My Awesome Application">
      <GithubUserList username={["riccardomannino"]} />
      <ClickCounter initialValue={0} />
      <MyHookForm />
      <Counter />
    </Container>
  );

  {
    /* <ClickTracker />
        <InteractiveWelcome name="Riccardo" />
        <Login />
        <UncontrolledLogin /> */
  }
  {
    /* <Sum /> */
  }
  {
    /* <TodoList>
          {({ id, _inputRef, handleReset, handleReset2, handleTodoList }) => {
            return (
              <>
                <ul className=" flex-col p-2  bg-slate-600 w-fit ml-2 rounded">
                  {id.map((todos, index) => (
                    <>
                      <li
                        className="  bg-red-600 text-zinc-100 w-fit mr-4 mb-2 rounded flex justify-between"
                        key={todos + index}
                      >
                        {todos}
                      </li>
                      <button
                        className=" bg-lime-500 min-w-fit ml-5 rounded mb-2
                 "
                        onClick={handleReset}
                      >
                        Rimuovi Elemento
                      </button>
                    </>
                  ))}
                </ul>

                <input
                  className="border-t-indigo-600 bg-lime-400 p-3 ml-2 mr-2 mt-2"
                  ref={_inputRef}
                ></input>
                <button
                  className="bg-sky-500 p-3 mr-2 mt-2 rounded"
                  onClick={handleTodoList}
                >
                  Aggiungi Task
                </button>
                <button
                  className="bg-cyan-900 p-3 rounded "
                  onClick={handleReset2}
                >
                  Rimuovi Task
                </button>
              </>
            );
          }}
        </TodoList> */
  }
}

// render props-02 : usando la children props non cambia nulla nella renderizzazione
