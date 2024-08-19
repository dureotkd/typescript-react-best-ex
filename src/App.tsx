// src/App.tsx
import React from "react";

interface CounterProps {
  initialCount: number;
}

/**
 * 함수형 컴포넌트와 React Hooks
 *
 * 가능하면 클래스 구성 요소보다 함수형 구성 요소를 선호합니다,
 * React hooks (예:useState,useEffect)를 사용하여 함수형 구성 요소에서 상태 및 라이프사이클 동작을 관리합니다
 */
const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = React.useState(initialCount);

  React.useEffect(() => {}, []);

  return <div>Count</div>;
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Counter initialCount={1} />
      </header>
    </div>
  );
};

export default App;
