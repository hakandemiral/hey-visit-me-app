import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormDescription from '../../../../Generic/Forms/FormDescription';
import Button from '../../../../Generic/Inputs/Button';
import Form from './Form';
import { newEducation, deleteEducation } from '../../../../../features/user/userSlice';

const Education = () => {
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.user.educations);

  return (
    <>
      {educations.length === 0 && (
        <>
          <div className="divider" />
          <FormDescription>
            <h3>Education</h3>
            The information here tells people about your education.
            <Button variant="primary" text="Add new education" onClick={() => dispatch(newEducation())} />
          </FormDescription>
        </>
      )}
      {educations && educations.map((item, index) => (
        <React.Fragment key={item._id}>
          <div className="divider" />
          <FormDescription>
            <h3>Education</h3>
            The information here tells people about your education.
            { educations.length - 1 === index && <Button variant="primary" text="Add new education" onClick={() => dispatch(newEducation())} /> }
            <Button text="Delete" onClick={() => dispatch(deleteEducation(item._id))} />
          </FormDescription>
          <Form id={item._id} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Education;
