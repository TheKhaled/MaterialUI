import { Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const THELogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        "& .MuiTextField-root": { m: 2 },
        maxWidth: "500px",
        margin: "auto",
        padding: "40px",
        border: "2px solid #4A90E2",
        borderRadius: "12px",
        backgroundColor: "#F5F7FA",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
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
        sx={{
          "& .MuiInputLabel-root": { color: "#333" }, // Label color
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#4A90E2" }, // Border color
            "&:hover fieldset": { borderColor: "#007AFF" }, // Hover color
          },
          "& .MuiFormHelperText-root": { color: "#D32F2F" }, // Helper text color
        }}
        InputProps={{
          style: { fontSize: "1.2rem", color: "#333" }, // Input text style
        }}
        InputLabelProps={{
          style: { fontSize: "1.2rem" }, // Label text style
        }}
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
        sx={{
          "& .MuiInputLabel-root": { color: "#333" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#4A90E2" },
            "&:hover fieldset": { borderColor: "#007AFF" },
          },
          "& .MuiFormHelperText-root": { color: "#D32F2F" },
        }}
        InputProps={{
          style: { fontSize: "1.2rem", color: "#333" },
        }}
        InputLabelProps={{
          style: { fontSize: "1.2rem" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          fontSize: "1.1rem",
          backgroundColor: "#007AFF",
          color: "white",
          padding: "12px 0",
          "&:hover": {
            backgroundColor: "#005BBB",
          },
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default THELogin;
