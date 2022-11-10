export interface User {
  id: string;
  name: string;
  age: number;
  // avartar: string;
}

export interface RequestParams {
  id: string;
}

export interface RequestBody extends RequestParams {
  name: string;
  age: number;
  // avartar: string;
}

export const users: User[] = [
  { id: "1", name: "John", age: 18 },
  { id: "2", name: "Peter", age: 20 },
  { id: "3", name: "David", age: 23 },
  { id: "4", name: "Messi", age: 28 },
];
