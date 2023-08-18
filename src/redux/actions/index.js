import * as auth from './auth';
import * as home from './home';
import * as writeTodo from './writeTodo';

export default {
    ...auth,
    ...home,
    ...writeTodo
};
