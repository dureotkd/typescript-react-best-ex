// src/App.tsx
import React from "react";

type Gift = {};
type GiftList<T> = {
  item: T;
};

/**
 * 일반 구성 요소 사용
 *
 * 재사용과 유형 안전성을 강화하기 위해 일반 구성 요소를 만듭니다,
 *
 * 일반 구성 요소는 컴파일 타임에 유형 검사를 유지하면서 다양한 데이터 유형을 처리할 수 있습니다
 *
 */
const ListItemComponent: React.FC<GiftList<Gift>> = ({ item }) => {
  return <div></div>;
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <ListItemComponent item={[]} />
    </div>
  );
};

export default App;
