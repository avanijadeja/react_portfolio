import React from "react";
import Nav from "../Nav";

function Header(props){
    const {currentTab, setCurrentTab} = props;

    return(
        <div>
            <section>
                <header className="flex-row px-1">
                    <div>
                        <h1>Avani's Portfolio</h1>
                    </div>
                    <div>
                        <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
                    </div>
                </header>
            </section>
        </div>
    )
}