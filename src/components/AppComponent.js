//Core libs
import React, {createClass} from "react";
import {Link} from "react-router";

//Third party libraries
import FaCaretLeft from "react-icons/lib/fa/caret-left";
import FaCaretRight from "react-icons/lib/fa/caret-right";
import Collapsible from "react-collapsible";

//Custom components
import {HeaderComponent} from "./HeaderComponent";
import {ContentComponent} from "./ContentComponent";

//Style files
import "../style/styles.css";

// Data files imports
import content from "../data/content.json";

export const App = createClass({

    //Initializing the initial state for the app, loading the content.json

    getInitialState(){


            return {
                content
            };
        },

        // render function where it renders the components and html

        render(){

            //variables to handle the routing to be sent to the URL
            let firstPage = 0,
                currentPage = parseInt(this.props.params.index, 10),
                nextPage = (parseInt(this.props.params.index, 10) + 1),
                previousPage = (parseInt(this.props.params.index, 10) - 1),
                lastPage = parseInt(this.state.content["content"].length, 10) - 1;


            return (

                    <div className="app">

                        {/*
                         *
                         *  External library used to collapse and expand the content, couldn't sort out
                         *  some states details to make it working on my own way
                         *
                         */}
                        <Collapsible openedClassName="header"
                                     className="header"
                                     trigger={<HeaderComponent />}
                                     open={true}>
                            {/*
                             *
                             * Content component where all the content is being rendered and handled
                             * passing just to the index from the url's query parameters and the content.json
                             *
                             */}
                            <ContentComponent content={this.state.content}
                                              index={this.props.params.index}/>


                            {/*
                             *
                             * Footer with the navigation controller where the URL is being updated.
                             *
                             */}
                            <nav className="navigation">

                                <div className="arrow-left">
                                    <Link to={`${ currentPage === firstPage ? lastPage : previousPage }`}>
                                        <FaCaretLeft/>
                                        Prev
                                    </Link>
                                </div>

                                <div className="arrow-right">
                                    <Link to={`${ currentPage < lastPage ? nextPage : firstPage }`}>
                                <span className="next-title">
                                    {
                                        this.state
                                            .content["content"][nextPage > lastPage ? firstPage : nextPage]["title"]
                                    }
                                </span>
                                        <span className="next-link">
                                    Next
                                </span>
                                        <FaCaretRight/>
                                    </Link>

                                </div>
                            </nav>
                        </Collapsible>
                    </div>

            )
        }
    }
)