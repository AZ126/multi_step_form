import React, { useState } from "react";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Show from "../components/Show";

const ContactUs = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    age: "",
    address: "",
    userState: "",
    country: "",
    bio: "",
    profession: "",
    hobby: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const onNext = () => {
    setPage(page + 1);
  };

  const onBack = () => {
    setPage(page - 1);
  };

  const {
    userName,
    email,
    age,
    address,
    userState,
    country,
    bio,
    profession,
    hobby,
  } = formData;

  switch (page) {
    case 0:
      return (
        <div>
          <Form1
            onNext={onNext}
            formData={formData}
            onhandleChange={handleChange}
          />
        </div>
      );
    case 1:
      return (
        <div>
          <Form2
            formData={formData}
            onBack={onBack}
            onNext={onNext}
            onhandleChange={handleChange}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <Form3
            formData={formData}
            onBack={onBack}
            onNext={onNext}
            onhandleChange={handleChange}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <Show formData={formData} />
        </div>
      );
    default:
  }
};

export default ContactUs;
