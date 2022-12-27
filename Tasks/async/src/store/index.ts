import { configureStore } from '@reduxjs/toolkit';

// Мы используем `redux-logger` для примера добавления дополнительного посредника
import logger from 'redux-logger';

// и `redux-batch` для примера добавления дополнительного усилителя
import { reduxBatch } from '@manaflair/redux-batch';

import todosReducer from './todos/todosReducer';
import visibilityReducer from './visibility/visibilityReducer';

const reducer = {
  todos: todosReducer,
  visibility: visibilityReducer,
};

const preloadedState = {
  todos: [
    {
      text: 'Eat food',
      completed: true,
    },
    {
      text: 'Exercise',
      completed: false,
    },
  ],
  visibilityFilter: 'SHOW_COMPLETED',
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== production,
  preloadedState,
  enhancers: [reduxBatch],
});
/**
 * Хранилище будет иметь такие настройки:
 * - частичные редукторы будут переданы в `combineReducers()`
 * - `redux-thunk` и `redux-logger` будут добавлены в качестве посредников
 * - инструменты разработчика будут отключены в производственном режиме
 * - будет создана композиция из посредников, усилителя и инструментов разработчика
 */
