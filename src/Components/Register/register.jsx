import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./styles.module.css";
import React from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

const ageOptions = [
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
];

function Register() {
  const handleAgeChange = (selectedOption) => {
    console.log(selectedOption);
  };
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.errors);
  };
  return (
    <Container>
      <div className="row justify-content-center align-items-center">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            className="mb-3 mt-5 w-50 mx-auto"
            controlId="formBasicName"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                minLength: 8,
              })}
            />
          </Form.Group>
          {errors?.name?.type === "required" ? (
            <p className="fw-bold text-danger text-center">It is required</p>
          ) : (
            ""
          )}
          <Form.Group
            className="mb-3  w-50 mx-auto"
            controlId="formBasicUsername"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              {...register("username", {
                required: true,
                minLength: 8,
              })}
            />
          </Form.Group>
          {errors?.username?.type === "required" ? (
            <p className="fw-bold text-danger text-center">It is required</p>
          ) : (
            ""
          )}
          <Form.Group className="mb-3  w-50 mx-auto" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
              })}
            />
          </Form.Group>
          {errors?.email?.type === "required" ? (
            <p className="fw-bold text-danger text-center">It is required</p>
          ) : (
            ""
          )}
          <Form.Group
            className="mb-3  w-50 mx-auto"
            controlId="formBasicPassword"
            name="password"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              })}
            />
          </Form.Group>
          {errors?.password?.type === "required" ? (
            <p className="fw-bold text-danger text-center">It is required</p>
          ) : (
            ""
          )}
          {errors?.password?.type === "minLength" ? (
            <p className="fw-bold text-danger text-center">min-length is 8</p>
          ) : (
            ""
          )}
          {errors?.password?.type === "pattern" ? (
            <p className="fw-bold text-danger text-center">
              please put at least one lowercase ,one uppercase, number,special
              character
            </p>
          ) : (
            ""
          )}
          <Form.Group
            className="mb-3  w-50 mx-auto"
            controlId="formBasicconfirmPassword"
          >
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "confirm password",
              })}
            />
          </Form.Group>
          {errors?.confirmPassword && (
            <p className="text-danger text-center ">
              {errors.confirmPassword.message}
            </p>
          )}
          {watch("confirmPassword") !== watch("password") &&
          getValues("confirmPassword") ? (
            <p className="text-danger text-center">Password dont match</p>
          ) : (
            ""
          )}

          <Select
            id="ageSelect"
            className="mb-4 w-50 mx-auto"
            options={ageOptions}
            onChange={handleAgeChange}
            placeholder="-- Select your age --"
          />
          <div className="d-flex justify-content-center ">
            <Button className={styles["button-1"]} role="button" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Register;

/* CSS */
