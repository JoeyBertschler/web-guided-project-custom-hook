import { useState } from "react";

// right now this just is identical to useState
export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  return [firstName, setFirstName];
}