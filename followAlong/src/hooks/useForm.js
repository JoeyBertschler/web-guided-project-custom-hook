import { useState } from "react";


export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChanges = e => {
    setLastName(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
  };

  return [firstName, lastName, handleChanges, handleLastNameChanges, clearForm];
}

// We can define any return format we like. Using an array and dereferencing each attribute on the component side is a stylistic choice, which many developers like because it reminds us of the built-in hooks. Do it however you like, but just make sure that your returns here match the dereferencing in your component! It's easy to get out of sync while working on custom hooks :D

// Remember: order matters when dereferencing from an array! (not from an object)