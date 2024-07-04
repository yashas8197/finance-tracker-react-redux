const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Current State", store.getState());
  console.log("action", action);
  next(action);
  console.log("New State", store.getState());
};

export default loggerMiddleware;
