import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Feedback = () =>{
return (
<>
<div className="container d-flex justify-content-center">
    <div className="card mt-5 pb-5">
        <div className="d-flex flex-row justify-content-between p-3 adiv text-white"> <i className="fas fa-chevron-left"></i> <span className="pb-3">feedback</span> <i className="fas fa-times"></i> </div>
        <div className="mt-2 p-4 text-center">
            <h6 className="mb-0">Your feedback help us to improve.</h6> <small className="px-3">Please let us know about your chat experience.</small>
            <div className="d-flex flex-row justify-content-center mt-2"> <img src="https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png" /> <img src="https://img.icons8.com/fluent/48/000000/sad.png" /> <img src="https://img.icons8.com/color/48/000000/happy.png" /> <img src="https://img.icons8.com/emoji/48/000000/smiling-face.png" /> <img src="https://img.icons8.com/color/48/000000/lol.png" /> </div>
            <div className="form-group mt-4"> <textarea className="form-control" rows="4" placeholder="Message"></textarea> </div>
            <div className="mt-2"> <button type="button" className="btn btn-primary btn-block"><span>Send feedback</span></button> </div>
            <p className="mt-3">Continue without sending feedback</p>
        </div>
    </div>
</div>

</>
);
}

export default Feedback;