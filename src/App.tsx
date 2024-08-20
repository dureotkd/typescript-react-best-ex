// src/App.tsx
import React from "react";

interface User {
  id: number;
  name: string;
}

type AsyncResult<T, E> = {
  loading: boolean;
  data: T | null;
  error: E | null;
};

/**
 * 사용자 정의 유형을 사용한 오류 처리
 *
 * 사용자 정의 유형을 사용하여 비동기 작업에서 다양한 오류 상태를 표현합니다,
 * 이를 통해 보다 표현력 있는 오류 처리가 가능하고 오류 사례의 적절한 처리가 보장됩니다
 */
const FetchUserData = async (): Promise<AsyncResult<User[], string>> => {
  const result = await fetch("aaa")
    .then((res) => res.json())
    .catch((e) => {
      throw new Error(e);
    });

  return {
    loading: true,
    data: [],
    error: null,
  };
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
