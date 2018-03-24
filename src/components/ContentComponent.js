/**
 * Created by luizcavalieri on 4/4/17.
 */

import React from "react";

const publi_url = process.env.PUBLIC_URL;

export const ContentComponent = ({index, content}) => (

    <div className="content">

        {
            content["content"][index]["thumbnail"] !== undefined && content["content"][index]["thumbnail"].length > 0

            ? (

                <div>
                    <div className="image-container">
                        <img src={`${publi_url}/image/${content["content"][index]["thumbnail"]}`} alt="iPad Mini"/>
                        </div>
                    <div className="text-container">
                        <p dangerouslySetInnerHTML={{__html: content["content"][index]["description"]}}/>
                    </div>
                </div>

            ) : (

                <div className="text-container-full">
                    <p dangerouslySetInnerHTML={{__html: content["content"][index]["description"]}}/>
                </div>
            )
        }
    </div>

)