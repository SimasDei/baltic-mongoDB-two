import React, {Component} from 'react';
import {getList, addToList, deleteItem, updateItem} from "./ListFunctions";

class List extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      term: '',
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = event => {
    this.setState({term: event.target.value})
  };

  getAll = () => {
  getList().then(data => {
    this.setState({
      term: '',
      items: [...data]
    },
      () => {
      console.log(this.state.items)
      })
  })
  };

  onSubmit = event => {
    event.preventDefault();
    addToList(this.state.term)
      .then(() => {
      this.getAll();
    })
  };

  render() {
    return (
      <div className={'col-md-12'}>
        <form onSubmit={this.onSubmit}>
          <div className={'form-group'}>
            <label htmlFor="taskName">Task Name</label>
            <div className={'row'}>
              <div className={'col-md-9'}>
                <input
                  type="text"
                  className={'form-control'}
                  id={'taskName'}
                  value={this.state.term || ''}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <div className={'col-md-2'}>

              </div>
            </div>
          </div>
          <button
            className={'btn btn-success btn-block'}
            onSubmit={this.onSubmit.bind(this)}
            type={'submit'}>
              Submit ! Crud
          </button>
        </form>
        <table className={'table'}>
          <tbody>
          {this.state.items.map((item,index) => (
            <tr key={index}>
              <td className={'text-left'}>{item[0]}</td>
              <td className={'text-right'}>
                <button
                href=""
                className={'btn btn-info mr-1'}
                onClick={this.onEdit.bind(this, item[0], item[1])}>
                  Edit crUd
                </button>
                <button
                  href=""
                  className={'btn btn-danger'}
                  onClick={this.onDelete.bind(this, item[1])}>
                  Delete cruD
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default List;