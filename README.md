# TypeScript & React Best Practices

이 문서는 TypeScript와 React를 사용할 때의 모범 사례와 권장 사항을 다룹니다. 이 지침을 따르면 코드의 유형 안전성을 보장하고, 가독성을 개선하며, 유지보수성을 높일 수 있습니다.

## 1. Props 및 State에 대한 유형 주석

항상 컴포넌트의 `props`와 `state`에 대한 유형(Type) 주석을 제공하여 유형 안전성을 보장하고 코드 가독성을 개선합니다. 인터페이스나 유형을 사용하여 `props`와 `state` 객체의 모양을 정의하세요.

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
