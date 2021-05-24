import React, { useContext, useState }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const rand = () => (
  Math.round(Math.random() * 20) - 10;
)

const getModalStyle = => {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SignInModal = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return (
    <div>

    </div>
  )
};

export default SignInModal;