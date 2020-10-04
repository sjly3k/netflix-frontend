import ApolloClient from "apollo-boost"
import { defaults } from "./LocalState";
import { resolvers } from "./LocalState";

export default new ApolloClient({
    uri : "http://localhost:8000/",
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
})