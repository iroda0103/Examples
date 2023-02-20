import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./user.slice";
import { invoicesReducer } from "./invoices.slice";
export const store = configureStore({
    reducer: {
        user: userReducer,
        invoices:invoicesReducer
    }
})