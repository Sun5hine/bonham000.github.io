import React from 'react';

class Certificates extends React.Component {
	render() {
		return (
			<div className = 'certificatesWrapper' id = 'certificatesNav'>
		    
		    <p className = 'certificatesTitle'>These are the three certificates for my completion of Free Code Camp's core curriculum. Through this program I've created several projects and become proficient in HTML, CSS, Sass, JavaScript, Node.js, Express, MongoDB, React, Redux, and Git.</p>
		  
		  	  <div className = 'certificates'>

			      <div className = 'certificateContainer'>
			        <a target = "_blank" href = "/assets/resume/front-end.png">
			          <img className = 'certificateImg' src="/assets/resume/front-end.png" alt="Front End Certificate" />
			        </a>
			      </div>

			      <div className = 'certificateContainer'>
			        <a target = "_blank" href = "/assets/resume/data-viz.png">
			          <img className = 'certificateImg' src="/assets/resume/data-viz.png" alt="Data Visualization Certificate" />
			        </a>
			      </div>

			      <div className = 'certificateContainer'>
			        <a target = "_blank" href = "/assets/resume/back-end.png">
			          <img className = 'certificateImg' src="/assets/resume/back-end.png" alt="Back End Certificate" />
			        </a>
			      </div>        
			    
		    	</div>

		  </div>
		);
	}
};

export default Certificates;