import React from 'react';

class NewHomePage extends React.Component {
    state = {
        searchResultList: [],
    };
    
//     addCompany = (companyinfo) => {
//       this.setState(prevState => ({
//         companyinfoarray: [...prevState.companyinfoarray, companyinfo],
//     }));
// };

	render() {
  	return (
    	<div>
        <Form onSubmit={this.addCompany} /> // call the
    	</div>
    );
  }
}