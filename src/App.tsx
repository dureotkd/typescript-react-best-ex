// src/App.tsx
import React from "react";

interface MyComponentProps {
  name: string;
  age: number;
}

/**
 * 항상 컴포넌트 props와 state에 대한 유형 주석을 제공하여 유형 안전성을
 * 보장하여 코드 가독성을 개선합니다,
 * 인터페이스나 유형을 사용하여 props나 state객체의 모양을 정의합니다
 */

// 제네릭문법 Generic
const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      {name} & {age}
    </div>
  );
};

// 타입주석 Type Annotation
const MyComponent2 = ({ name, age }: MyComponentProps) => {
  return (
    <div>
      {name} & {age}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyComponent name="z" age={5} />
        <MyComponent2 name="성민" age={30} />
      </header>
    </div>
  );
};

export default App;
