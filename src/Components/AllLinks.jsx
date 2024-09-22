import React from "react";
import LinkList from "./LinkList";
import DropDownProject from "./DropdownProject";

function AllLinks() {
    return (
        <div className="flex flex-col items-center gap-4">
            <LinkList />
            <DropDownProject />
        </div>
    );
}

export default AllLinks;