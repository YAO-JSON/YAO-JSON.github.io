import React from 'react';
import Grid from  'uxcore-grid';
require('./pages.less');
const { Row , Col } = Grid;




class Page01 extends React.Component{
	render(){
		return (
			<Grid fluid ={true} className="main-container">
				<Row className='slogn'>
					<Col className="TC" md={24} xs={24}>
						 The longest journey begins with the first step
					</Col>
					<Col className="TC" md={24} xs={24}>
						 Industry is the parent of success
					</Col>
					<Col className="TC" md={24} xs={24}>
						 Created by YJSON
					</Col>
				</Row>
			</Grid>
		);
	}	
};



export default Page01; 