import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    // Assigning a ref to each input
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    // Prevent submitting to file
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value, // Accessing the ref values
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: 'Yeaa',
    email: '123@gmail.com',
    phone: '55555555'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter name ..."
                name="name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter email ..."
                name="email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter phone number ..."
                name="phone"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
          </form>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-outline-primary btn-block"
          />
        </div>
      </div>
    );
  }
}

export default AddContact;
