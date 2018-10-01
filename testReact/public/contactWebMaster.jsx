var MessageAll = React.createClass({   
  getInitialState: function () {  
    return { name: '' ,address: '',email:'',contact:'',id:'',Buttontxt:'Send', data1: []};  
  },  
   handleChange: function(e) {  
        this.setState({[e.target.name]: e.target.value});  
    },  
  
  componentDidMount() {  
   
  },  
     
  handleClick: function() {   
   var Url="";  
   if(this.state.Buttontxt=="Send")
    {  
      Url="/api/savedata";  
    }    
    var messagedata = {  
        'name': this.state.name,  
        'address':this.state.address,  
        'email':this.state.email,  
        'contact':this.state.contact,  
        'id':this.state.id,          
    }  
    $.ajax({  
      url: Url,  
      dataType: 'json',  
      type: 'POST',  
      data: messagedata,  
      success: function(data) {         
          alert(data.data);         
          this.setState(this.getInitialState());  
          this.componentDidMount();  
           
      }.bind(this),  
      error: function(xhr, status, err) {  
         alert(err);       
      }.bind(this)  
    });  
  },  
  
  render: function() {  
    return (   
      <div  className="container"  style={{marginTop:'50px'}}>
      <p className="text-center" style={{fontSize:'25px'}}><b>Please fill all the fields to contact the web master</b></p>
      <br/><br/>
      <form>
         <div className="col-sm-12 col-md-12"  style={{marginLeft:'400px'}}>
            <table>
               <tbody>
                  <br/> 
                  <tr>
                     <td><b>Name</b></td>
                     <td>  
                        <input className="form-control" type="text" value={this.state.name}    name="name" onChange={ this.handleChange } />  
                        <input type="hidden" value={this.state.id}    name="id"  />  
                     </td>
                  </tr>
                  <br/> 
                  <tr>
                     <td><b>Address</b></td>
                     <td>  
                        <input type="text" className="form-control" value={this.state.address}  name="address" onChange={ this.handleChange } />  
                     </td>
                  </tr>
                  <br/> 
                  <tr>
                     <td><b>Email</b></td>
                     <td>  
                        <input type="text"  className="form-control" value={this.state.email}  name="email" onChange={ this.handleChange } />  
                     </td>
                  </tr>
                  <br/> 
                  <tr>
                     <td><b>Message</b></td>
                     <td>  
                        <textarea type="text"  className="form-control" value={this.state.contact}  name="contact" onChange={ this.handleChange } ></textarea>  
                     </td>
                  </tr>
                  <br/> 
                  <tr>
                     <td></td>
                     <td>  
                        <input className="btn btn-primary" type="button" value={this.state.Buttontxt} onClick={this.handleClick} />  
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div className="col-sm-12 col-md-12 "  style={{marginTop:'50px',marginLeft:'300px'}} >  
         </div>
      </form>
   </div>  
    );  
  }  
});  
  
ReactDOM.render(<MessageAll  />, document.getElementById('root'))