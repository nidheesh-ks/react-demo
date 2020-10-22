// React, React DOM import

import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetails, {CommentDetailsWithHooks} from "./components/CommentDetails.jsx";
import ApprovalCard from "./components/ApprovalCard";
import Search from "./components/Search";


// Create Component
//props

const Comments = function() {

    const datas = [
        {
            avatar: faker.image.avatar(),
            author: faker.name.firstName(),
            time: formatDate(faker.date.past()),
            text: faker.lorem.text(),
            isLiked: true

        },
        {
            avatar: faker.image.avatar(),
            author: faker.name.firstName(),
            time: formatDate(faker.date.past()),
            text: faker.lorem.text(),
            isLiked: false

        },
        {
            avatar: faker.image.avatar(),
            author: faker.name.firstName(),
            time: formatDate(faker.date.past()),
            text: faker.lorem.text(),
            isLiked: false

        }
        
    ];

    return (
        <>
        <div className="ui grid padded">
            <div className="two column row">
                <div className="ui container comments eight wide column"> ​
                <h1>Functional component with Hooks</h1>       
                {
                    datas.map(function(item, index){
                        return (
                            <ApprovalCard key={index}>
                                <CommentDetailsWithHooks image={item.avatar} name={item.author} time={item.time} text={item.text} isLiked={item.isLiked}/>
                            </ApprovalCard>
                        )
                    })
                }
                </div> 
                <div className="ui container comments eight wide column"> ​
                <h1>Search component</h1>
                <Search />       
                </div>
            </div>
        </div> 
        </>     
    )
};

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}

//Render the component

ReactDOM.render(<Comments />, document.querySelector("#root"))