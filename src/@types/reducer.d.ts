import rootReducer from "@/store/reducer/reducer";

declare global {
  type AppState = ReturnType<typeof rootReducer>;
}
