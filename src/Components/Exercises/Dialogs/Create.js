import React, { Component, Fragment } from "react";
import { Dialog, Button } from "material-ui";
import {Add} from 'material-ui-icons'
import {
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions
} from "material-ui/Dialog";

export default class extends Component {
  
  state= {
    open : false
  }

  handleToggle = () => {
    this.setState({
      open : !this.state.open
    })
  }
  
  render(){

    const { open } = this.state

    return <Fragment>

      <Button variant='fab' onClick={this.handleToggle} mini>
        <Add/>
      </Button>

      <Dialog
        open={open}
        onClose={this.handleToggle}
      >
        <DialogTitle id="form-dialog-title">
          Create
      </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Create a new exercise
        </DialogContentText>
          <form>
          </form>
        </DialogContent>

        <DialogActions>
          <Button color="primary" variant='raised'>
            Create
        </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  }
}

