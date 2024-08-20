# TypeScript & React Best Practices

이 문서는 TypeScript와 React를 사용할 때의 모범 사례와 권장 사항을 다룹니다. 이 지침을 따르면 코드의 유형 안전성을 보장하고, 가독성을 개선하며, 유지보수성을 높일 수 있습니다.

## 1. Props 및 State에 대한 유형 주석

항상 컴포넌트의 `props`와 `state`에 대한 유형(Type) 주석을 제공하여 유형 안전성을 보장하고 코드 가독성을 개선합니다. 

인터페이스나 유형을 사용하여 `props`와 `state` 객체의 모양을 정의하세요.

```typescript
interface MyComponentProps {
  name: string;
  age: number;
}

interface MyComponentState {
  isOpen: boolean;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  // Component implementation
};
```

## 2. 함수형 컴포넌트와 React Hooks

가능하면 클래스 구성 요소보다 함수형 구성 요소를 선호합니다, React hooks(예:`useState`,`useEffect`)를 사용하여 함수형 구성 요소에서 상태 및 라이프사이클 동작을 관리합니다.

```typescript
import React, { useState, useEffect } from 'react';

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // Do something when count changes
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

## 3. Typescript 유틸리티 유형 사용

Typescript의 유틸리티 유형을 활용하여 일반적인 유형 변환을 간소화합니다,
`Partial`,`Required`,`Pick` 및 와 같은 유틸리티 유형을 `Omit`을 사용하여 유형을 효율적으로 수정하고 구성할 수 있습니다

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>; // All properties become optional
type

 RequiredUser = Required<User>; // All properties become required
type UserWithoutEmail = Omit<User, 'email'>; // Exclude 'email' property
```

## 4. 어떤 유형도 피하십시오

`any`가능한 한 타입을 사용하지 마세요, 대신 명시적 타입을 제공하거나 유니온 타입을 사용하여 타입이 두 개 이상의 가능성이 있는 경우를 처리하세요.

```typsscript
const fetchData = (): Promise<User[]> => {
  // Fetch user data from an API
};

const handleData = (data: User[] | null) => {
  // Handle data
};
```

## 5. 사용자 정의 유형을 사용한 오류 처리

사용자 정의 유형을 사용하여 비동기 작업에서 다양한 오류 상태를 표현합니다. 이를 통해 보다 표현력 있는 오류 처리가 가능하고 오류 사례의 적절한 처리가 보장됩니다.

```typescript
type AsyncResult<T, E> = { loading: boolean; data: T | null; error: E | null };

const fetchUserData = (): AsyncResult<User[], string> => {
  // Fetch user data and handle errors
};
```

## 6. 일반 구성 요소 사용

재사용성과 유형 안전성을 강화하기 위해 일반 구성 요소를 만듭니다. 일반 구성 요소는 컴파일 타임에 유형 검사를 유지하면서 다양한 데이터 유형을 처리할 수 있습니다.

```typescript
interface ListItem<T> {
  item: T;
}

const ListItemComponent: React.FC<ListItem<User>> = ({ item }) => {
  // Render item
};
```

## 8. 불필요한 유형 어설션을 피하세요

절대적으로 필요하지 않는 한 유형 단언(`as`)을 사용하지 마십시오. 대신 TypeScript의 유형 추론 기능을 활용하고 명시적 유형을 제공하여 유형 안전성을 보장합니다.

```typescript
const result: number = calculateValue() as number; // Unnecessary type assertion

const result: number = calculateValue(); // Preferred approach with explicit type
```

## 9. 일관된 명명 규칙

구성 요소, props 및 변수에 대해 일관된 명명 규칙을 따릅니다. 의미 있고 설명적인 이름을 사용하여 코드 가독성과 유지 관리를 개선합니다.

```typescript
interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  // Component implementation
};

const getUserData = (): Promise<User> => {
  // Fetch user data
};
```






