/**
 * Created by luizcavalieri on 4/4/17.
 */
import React from "react";
import FaFile from "react-icons/lib/fa/file";
import FaCaretDown from "react-icons/lib/fa/caret-down";
import FaCaretUp from "react-icons/lib/fa/caret-up";

export const HeaderComponent = () => (
    <header className="header">
        <div>
                        <span className="icon">
                            <FaFile />
                        </span>
            <span className="text">
                             Buying an iPad Mini?
                        </span>
        </div>

        <div className="header-right">
                        <span className="icon-arrow">

                            {
                                true
                                    ? <FaCaretUp/>
                                    : <FaCaretDown/>
                            }

                        </span>

        </div>
    </header>
);



