import {gql} from "apollo-boost";

export const CREATE_PAYMENT = gql`
    mutation createPayment($plan: PlanType!, $userId: String!) {
        createPayment(plan: $plan, userId: $userId)
    }
`;