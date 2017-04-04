import React from 'react';

const textAlign = {
  "text-align": "center"
};

const Loading = (props) => (
	<div className="col s1 l5 offset-s5" style={textAlign}> 
		<div className="preloader-wrapper big active">
	    <div className="spinner-layer spinner-blue-only">
	      <div className="circle-clipper left">
	        <div className="circle"></div>
	      </div>
	      <div className="gap-patch">
	        <div className="circle"></div>
	      </div>
	      <div className="circle-clipper right">
	        <div className="circle"></div>
	      </div>
	    </div>
	  </div>
	</div>
);

export default Loading;