// src/App.tsx
import React from "react";

const calculateValue = () => {
  return 1;
};

/**
 * 불필요한 유형 어설션을 피하세요
 *
 * 절대적으로 필요하지 않는 한
 * 유형 단언( as)을 사용하지 마십시오.
 * 대신 TypeScript의 유형 추론 기능을 활용하고 명시적 유형을 제공하여 유형 안전성을 보장합니다.
 */
const result: number = calculateValue() as number; // Unnecessary type assertion

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
