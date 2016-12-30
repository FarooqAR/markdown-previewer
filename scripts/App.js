import React, {Component} from 'react';
import Remarkable from 'remarkable';

export default class App extends Component {
  constructor(props){
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {input : "# Type *markdown* here"};  
  }
  renderMarkup(){
    const md = new Remarkable();
    return {__html : md.render(this.state.input)}; 
  }
  handleOnChange(e){
    this.setState({input: e.target.value});
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Markdown Previewer</h1>
          <h2>By Farooq</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <textarea name="input" id="input" value={this.state.input}  onChange={this.handleOnChange}></textarea>
          </div>
          <div className="col-md-6">
            <div className="content" dangerouslySetInnerHTML={this.renderMarkup()}></div>
          </div>
        </div>
      </div>
      
    );
  }
}
