import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { setName, setEmail } from "./formSlice"; 
import Axios from "axios"; 

export function Formulario() {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user); 
  
  const [serverResponse, setServerResponse] = useState(null); 
  const url = ""; 

  const submiForm = async (values) => {
    try {
      const response = await Axios.post(url, values);
      setServerResponse(response.data); 
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const [handleChange,handleSubmit] = useFormik({
    initialValues: {
      nombre: name || "", 
      mensaje: "",
    },
    validationSchema: yup.object({
      nombre: yup
        .string()
        .required("El nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
      email: yup
        .string()
        .required("El email es requerido")
        .email("El email no es válido"),
      mensaje: yup
        .string()
        .required("El mensaje es requerido")
        .min(10, "El mensaje debe tener al menos 10 caracteres"),
    }),
    onSubmit: (values) => {
      
      dispatch(setName(values.nombre));
      dispatch(setEmail(values.email));

      
      submiForm(values);
    },
  });

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ingrese su nombre"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <div className="error">{formik.errors.nombre}</div>
          )}
        </div>

        
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ingrese su email"
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Ingrese su mensaje"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mensaje}
          ></textarea>
          {formik.touched.mensaje && formik.errors.mensaje && (
            <div className="error">{formik.errors.mensaje}</div>
          )}
        </div>

        
        <button type="submit">Enviar</button>
      </form>

      
      {serverResponse && (
        <div className="response">
          <h3>Respuesta del Servidor:</h3>
          <pre>{JSON.stringify(serverResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
