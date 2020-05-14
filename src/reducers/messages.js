import {getMessages} from "../static-data";

export default (state = getMessages(10), action) => {
    return state;
}