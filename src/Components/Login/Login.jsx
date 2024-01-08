import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3 w-50 mt-5 " controlId="formBasicEmail">
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
          <p className="fw-bold text-danger text-left">It is required</p>
        ) : (
          ""
        )}

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 8,
            })}
          />
        </Form.Group>
        {errors?.password?.type === "required" ? (
          <p className="fw-bold text-danger text-left">It is required</p>
        ) : (
          ""
        )}
        {errors?.password?.type === "minLength" ? (
          <p className="fw-bold text-danger text-left">Min-number is 8</p>
        ) : (
          ""
        )}
        <Button className={styles["button-1"]} role="button" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
