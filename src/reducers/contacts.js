import {contacts} from "../static-data";
import {REMOVE_USER} from "../Constants/action-types";
import _ from "lodash";

export default (state = contacts, action) => {
    switch (action.type) {
        case REMOVE_USER:
            return _.omit(state, action.payload.id);
        default:
            return state;
    }
}