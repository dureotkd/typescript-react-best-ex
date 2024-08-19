// src/App.tsx
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

// All properties become optional
type PartialUser = Partial<User>;

// All properties become required
type RequiredUser = Required<User>;

// Exclude 'email' property
type UserWithoutEmail = Omit<PartialUser, "name">;

const AdminLayout = ({ id, name, email }: PartialUser) => {
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
      <AdminLayout />
    </div>
  );
};

export default App;
