class Card extends React.Component {
  state = { userName: ""};
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName)
   }
 render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="Your Name" 
          value = {this.state.userName}
          onChange = {event => this.setState({userName: event.target.value})}
          type="text" 
          required
        />
        <button>Submit</button>
        <div className="nameDisplay">{this.state.userName}</div>
      </form>
      
    );
  }  
}

ReactDOM.render(
  <Card />, 
  document.getElementById('mountNode'),
);