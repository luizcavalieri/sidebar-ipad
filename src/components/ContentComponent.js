/**
 * Created by luizcavalieri on 4/4/17.
 */

import React from "react";
import image from '../assets/img/ipad-mini.jpg';

console.log(image);

const publi_url = process.env.PUBLIC_URL;

export const ContentComponent = ({index, content}) => (

    <div className="content">

        <div>{console.log("All AppComponent is being loaded")}</div>


        {content["content"][index]["thumbnail"] !== undefined && content["content"][index]["thumbnail"].length > 0 ? (
            <div>
                <div className="image-container">
                    <img src={`${publi_url}/image/${content["content"][index]["thumbnail"]}`} alt="iPad Mini"/>
                    {/*<img src={image} alt="iPad Mini"/>*/}
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
        {console.log("content rendered")}
    </div>

)