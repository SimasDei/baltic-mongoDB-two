import React, {Component} from 'react';
import List from './List';
import './App.css';

// import List from './List';
class App extends Component {

  // state = {
  //   create: {
  //     method: 'POST',
  //     body: {
  //       key: '',
  //       value: ''
  //     },
  //     path: 'createValue'
  //   },
  //   read: {
  //     method: 'GET',
  //     body: {
  //       key: ''
  //     },
  //     path: ''
  //   },
  //   update: {
  //     body: {
  //       key: '',
  //       value: '',
  //       updateValue: ''
  //     },
  //
  //   },
  //   delete: {
  //     key: '',
  //     value: ''
  //   }
  // };

  // handleSubmit(obj) {
  //   fetch(`http://localhost:2000/${obj.path}`, {
  //     method: obj.method,
  //     body: JSON.stringify(obj.body),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => {
  //     //After post
  //   })
  //   console.log(this.state.create)
  // }
  //
  // handleInput(obj, key, e) {
  //   obj.body[key] = e.target.value
  // }

  render() {
    return (
      <div className={'container'}>

        {/*<div className={'row mt-5'}>*/}
          {/*<div className={'col-sm-6 '}>*/}
            {/*<button onClick={this.handleSubmit.bind(this, this.state.create)}>Create</button>*/}
            {/*<div>key</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.create, 'key')}/>*/}
            {/*<div>value</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.create, 'value')}/>*/}
          {/*</div>*/}
          {/*<div className={'col-sm-6 '}>*/}
            {/*<button onClick={this.handleSubmit.bind(this, this.state.read)}>Read</button>*/}
            {/*<div>key</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.read, 'key')}/>*/}
          {/*</div>*/}
        {/*</div>*/}

        {/*<div className={'row mt-5 '}>*/}
          {/*<div className={'col-sm-6'}>*/}
            {/*<button onClick={this.handleSubmit.bind(this, this.state.update)}>Update</button>*/}
            {/*<div>key</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.update, 'key')}/>*/}
            {/*<div>value</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.update, 'value')}/>*/}
            {/*<div>updateValue</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.update, 'updateValue')}/>*/}
          {/*</div>*/}

          {/*<div className={'col-sm-6'}>*/}
            {/*<button onClick={this.handleSubmit.bind(this, this.state.delete)}>Delete</button>*/}
            {/*<div>key</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.delete, 'key')}/>*/}
            {/*<div>value</div>*/}
            {/*<input onChange={this.handleInput.bind(this, this.state.delete, 'value')}/>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className={'row mt-5'}>
          <div className={'col-md-6 mx-auto'}>
            <h2 className={'text-center'}>CRUD Task</h2>
              <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
