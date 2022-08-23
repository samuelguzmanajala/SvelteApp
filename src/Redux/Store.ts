import type {User} from "../Modules/Membership/Domain/User";
import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './slices';

export interface UserStore {
  user:User;
}

export default configureStore<UserStore>({
  reducer: {
    user: userReducer
  }
});