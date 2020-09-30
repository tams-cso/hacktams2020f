import React from 'react';
import * as typeformEmbed from '@typeform/embed'

class VolunteerForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  componentDidMount() {
    if(this.formRef){
        typeformEmbed.makeWidget(
            this.formRef.current, 
            "https://form.typeform.com/to/sAAICqNe", 
            {
                hideFooter: true,
                hideHeaders: true,
                opacity: 0,
                height: '100%',
                width: '100%'
            }
        );
    }
    
  }
  render() {
    return (
      <div 
        ref={this.formRef} 
        style={{width: '100%', height: '100%'}}
      />
    )
  }
}

export default VolunteerForm;