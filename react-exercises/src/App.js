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
      {/* <Hello /> */}
      {/* <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <Hello /> */}
      {/* <Message /> */}
      {/* <Welcome name="Riccardo" age={18} /> */}
      {/* <Counter timeout={1000} incrementBy={1} initialValue={0} /> */}{" "}
      <GithubUser username="RiccardoMannino" />
      <ClickCounter initialValue={0} />
      <ToDoList />
      <Counter />
      {/* <ClickTracker />
        <InteractiveWelcome name="Riccardo" />
        <Login />
        <UncontrolledLogin /> */}
      {/* <Sum /> */}
      {/* <TodoList>
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
        </TodoList> */}
    </Container>
  );
}

// render props-02 : usando la children props non cambia nulla nella renderizzazione
