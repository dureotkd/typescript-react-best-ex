// src/App.tsx
import React from "react";

interface User {
  id: number;
  name: string;
}

/**
 * Any 유형을 피하십시오
 *
 * any는 가능한 한 타입을 사용하지마세요, 대신 명시적 타입을 제공하거나 유니온 타입을
 * 사용하여 타입이 두개 이상의 가능성이 있는 경우를 처리하세요
 */
const fetchUser = async (): Promise<User[] | null> => {
  const result = await fetch("asd")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    });

  return result;
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
