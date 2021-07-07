import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import FormDescription from '../../../../Generic/Forms/FormDescription';
import Button from '../../../../Generic/Inputs/Button';
import { newExperience, deleteExperience } from '../../../../../features/user/userSlice';

const Experience = () => {
  const experiences = useSelector((state) => state.user.experiences);
  const dispatch = useDispatch();

  return (
    <>
      {experiences.length === 0 && (
        <>
          <div className="divider" />
          <FormDescription>
            <h3>Experience</h3>
            The information here tells people about your professional experience.
            <Button variant="primary" text="Add new experience" onClick={() => dispatch(newExperience())} />
          </FormDescription>
        </>
      )}
      {experiences && experiences.map((item, index) => (
        <React.Fragment key={item._id}>
          <div className="divider" />
          <FormDescription>
            <h3>Experience</h3>
            The information here tells people about your professional experience.
            { experiences.length - 1 === index && <Button variant="primary" text="Add new experience" onClick={() => dispatch(newExperience())} /> }
            <Button text="Delete" onClick={() => dispatch(deleteExperience(item._id))} />
          </FormDescription>
          <Form id={item._id} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Experience;
