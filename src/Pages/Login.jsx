import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function Login({setLogin}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const data = new FormData(form);
      const formEmail = data.get("email");
      const formpassword = data.get("password");

      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email:formEmail,
          password:formpassword
        })
      });

      if (!response.ok) {
        console.log("Error en la respuesta de la API");
        return;
      }
      
      const dataUser = await response.json();
      const {name,email} = dataUser.data;
      const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      console.log("Respuesta de la API", dataUser);
      
      setLogin({
        name,
        email,
        logged: true,
        modo: theme
      });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      noValidate
      validated={true}
      className="w-80 ml-5 mt-5"
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email"/>
        {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;

Login.propTypes = {
  setLogin: PropTypes.func.isRequired
};