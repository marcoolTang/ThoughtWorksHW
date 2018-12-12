import { store } from "./store.js"

describe("store", () => {
  it("creates new todos", () => {
    const store = new TodoStore
    
    expect(store.state).toBe(true)
    
  })