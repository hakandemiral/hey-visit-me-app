import React from 'react';
import { useSelector } from 'react-redux';
import { CONTACT_US, GIVE_FEEDBACK } from '../DialogTypes';
import ContactUs from '../ContactUs';
import GiveFeedback from '../GiveFeedback';

const DialogHandler = () => {
  const { openDialog } = useSelector((state) => state.dialog);

  switch (openDialog) {
    case CONTACT_US:
      return <ContactUs />;
    case GIVE_FEEDBACK:
      return <GiveFeedback />;
    default:
      return null;
  }
};

export default DialogHandler;
