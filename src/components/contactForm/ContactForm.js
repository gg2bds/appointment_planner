import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter name" value={name} onChange={({target})=> {setName(target.value)}} />
      <input type="tel" placeholder="Enter phone" value={phone} onChange={({target})=> {setPhone(target.value)}}  />
      <input type="email" placeholder="Enter email" value={email} onChange={({target})=> {setEmail(target.value)}} />
      <input type="submit" value="Submit" />
    </form>    
  );
};

