import ApolloClient from "apollo-boost"
import { defaults } from "./LocalState";
import { resolvers } from "./LocalState";

export default new ApolloClient({
    uri : "https://jinflix.herokuapp.com/",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})