import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const MyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    window.alert("Form submitted successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          {errors.firstName && <span>First Name is required</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          {errors.lastName && <span>Last Name is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            }}
            render={({ field }) => (
              <div>
                <input {...field} />
                {errors.email && errors.email.type === "required" && (
                  <span>Email is required</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span>Invalid email</span>
                )}
              </div>
            )}
          />
        </div>
        <div>
          <label>Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              minLength: 5,
            }}
            render={({ field }) => (
              <div>
                <input type="password" {...field} />
                {errors.password && errors.password.type === "required" && (
                  <span>Password is required</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span>Password must be more than 4 characters</span>
                )}
              </div>
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default MyForm;
