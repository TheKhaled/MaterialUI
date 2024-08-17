import { useState } from "react";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .matches(/^[0-9a-zA-Z]*$/, "Password can only contain numbers and letters")
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  gender: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

const Registre = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
      city: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/");
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        "& .MuiTextField-root": { m: 1 },
        "& .MuiFormControl-root": { m: 1 },
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "2px solid #4CAF50",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <TextField
        label="Firstname"
        name="firstname"
        fullWidth
        value={formik.values.firstname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.touched.firstname && formik.errors.firstname}
        sx={{ fontSize: "16px" }}
      />
      <TextField
        label="Lastname"
        name="lastname"
        fullWidth
        value={formik.values.lastname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        helperText={formik.touched.lastname && formik.errors.lastname}
        sx={{ fontSize: "16px" }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ fontSize: "16px" }}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        sx={{ fontSize: "16px" }}
      />
      <FormControl>
        <FormLabel sx={{ fontSize: "18px", mb: 1 }}>Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
          />
        </RadioGroup>
        {formik.touched.gender && formik.errors.gender && (
          <div style={{ color: "red", fontSize: "14px" }}>
            {formik.errors.gender}
          </div>
        )}
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 2, fontSize: "16px" }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Registre;
