import React, {useState} from "react";

// const CommentDetails =  (props) => {
//     console.log(props)
//     return (
//         <div className="comment">
//             <a className="avatar">
//                 <img alt="avatar" src={props.image} />
//             </a>
//             <div className="content">
//                 <a className="author">{props.name}</a>
//                 <div className="metadata">
//                     <span className="date">{props.time}</span>
//                 </div>
//                 <div className="text">
//                     {props.text}
//                 </div>
//             </div>
//         </div>
//     )
// }

class CommentDetails extends React.Component{
   constructor(props)  {
       super(props);
       this.state = {
           isLiked: props.isLiked,
           name: ""
       }
   }
    handleClick() {
       console.log("Clicked")
        this.setState(
            {
            isLiked: !this.state.isLiked
        })
    }
   render(){
       return (
           <div className="comment">
               <a className="avatar">
                   <img alt="avatar" src={this.props.image} />
               </a>
               <div className="content">
                   <a className="author">{this.props.name}</a>
                   <div className="metadata">
                       <span className="date">{this.props.time}</span>
                   </div>
                   <div style={{float: "right"}} onClick={
                       ()=>{
                            this.handleClick()
                        }
                   }>
                       <i className={`heart red ${this.state.isLiked ? "" : "outline"} icon right`}></i>
                   </div>
                   <div className="text">
                       {this.props.text}
                   </div>
               </div>
           </div>
       )
   }
}

export default CommentDetails;

export const CommentDetailsWithHooks =  (props) => {
    
    const [isLiked, setIsLiked] = useState(props.isLiked);

    const liked = isLiked ? '' : 'outline';
    
    return (
        <div className="comment">
            <a className="avatar">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content">
                <a className="author">{props.name}</a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div style={{float: "right"}} onClick={() => {setIsLiked(!isLiked)}} >
                       <i className={`heart red ${liked} icon right`}></i>
                   </div>                
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}