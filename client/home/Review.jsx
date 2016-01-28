import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var Review = React.createClass({
  getInitialState(){
    console.log(this.props.hotelInfo);
    return {
      isModalOpen: false,
      hotelInfo: this.props.hotelInfo
    }
  },
  handleChange: function (key,type) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  closeModal() {
    this.setState({
      isModalOpen: false
    })
  },
  submit(e) {
    e.preventDefault()
    window.location = "https://www.youtube.com/watch?v=pFptt7Cargc"
  },
  render() {
    return (
      <form className="form-group">
        <label htmlFor="location">
          <h4>Location</h4>
          <input id="location" className="form-control" placeholder="location" value={this.state.hotelInfo.location} onChange={this.handleChange("location")} readonly/>
        </label>
        <label htmlFor="checkIn">
          <h4>Check In</h4>
          <input id="checkIn" className="form-control" placeholder="checkIn" value={this.state.hotelInfo.checkIn} onChange={this.handleChange("checkIn")} readonly/>
        </label>
        <label htmlFor="checkOut">
          <h4>Check Out</h4>
          <input id="checkOut" className="form-control" placeholder="checkOut" value={this.state.hotelInfo.checkOut} onChange={this.handleChange("checkOut")} readonly/>
        </label>
        <label htmlFor="rooms">
          <h4>Rooms</h4>
          <input id="rooms" className="form-control" placeholder="rooms" value={this.state.hotelInfo.rooms} onChange={this.handleChange("rooms")}></input>
        </label>
        <label htmlFor="guests">
          <h4>Guests</h4>
          <input className="form-control" placeholder="guests" value={this.state.hotelInfo.guests} onChange={this.handleChange("guests")}></input>
        </label>
        <button onClick={this.submit}>Confirm and Pay</button>
      </form>
    )
  }
})

export default Review