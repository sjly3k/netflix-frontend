import {MaturityRating_12, MaturityRating_15, MaturityRating_18, MaturityRating_ALL} from "../../Components/Icons";
import React from "react";
import {useMutation, useQuery} from "react-apollo-hooks";
import {SEE_FULL_CONTENT, TOGGLE_LIKE} from "./ContentDetailQueries";
import {CONTENT_QUERY, ME_QUERY} from "../SharedQueries";
import ContentDetailPresenter from "./ContentDetailPresenter";

export default ({ match }) => {
    const contentId = match.params.id

    const { data, loading } = useQuery(SEE_FULL_CONTENT, {
        variables : {
            id : contentId
        }
    })

    const {
        data : allContentData,
        loading : allContentDataLoading
    } = useQuery(CONTENT_QUERY)

    const [toggleLikeMutation] = useMutation(TOGGLE_LIKE)

    const { data : meData, loading : meLoading } = useQuery(ME_QUERY)

    const ageChanger = (data) => {
        const contentType = data.type
        const ageLimit = data.age_limit
        if (contentType === "TV_SHOW") {
            if (ageLimit === "ALL") {
                return "ALL"
            } else if (ageLimit === "OVER_12") {
                return "12+"
            } else if (ageLimit === "OVER_15") {
                return "15+"
            } else if (ageLimit === "OVER_18") {
                return "18+"
            }
        } else {
            if (ageLimit === "ALL") {
                return <MaturityRating_ALL size={32}/>
            } else if (ageLimit === "OVER_12") {
                return <MaturityRating_12 size={32}/>
            } else if (ageLimit === "OVER_15") {
                return <MaturityRating_15 size={32}/>
            } else if (ageLimit === "OVER_18") {
                return <MaturityRating_18 size={32}/>
            }
        }
    }

    const durationChanger = (duration) => {
        const tvShowMinute = Math.floor(duration / 60)
        const MovieHour = Math.floor(duration / 3600)
        const MovieMinute = Math.floor((duration % 3600) / 60)
        return [tvShowMinute, MovieHour, MovieMinute]
    }


    const handleToggleLike = (contentId) => {
        if (contentId !== undefined) {
            const handle = toggleLikeMutation({
                variables : {contentId : contentId}
            })
        }
    }

    return (
        <ContentDetailPresenter
            contentData={data}
            allContentData={allContentData}
            loading={loading}
            allContentDataLoading={allContentDataLoading}
            meLoading={meLoading}
            ageChanger={ageChanger}
            durationChanger={durationChanger}
            meData={meData}
            handleToggleLike={handleToggleLike}
        />
    )
}