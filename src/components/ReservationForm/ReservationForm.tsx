"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface ReservationFormProps {
  open: boolean;
  onClose: () => void;
  packageName: string;
  onConfirm: (data: any) => void; //eslint-disable-line
  availableHours: string[]; //eslint-disable-line
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  open,
  onClose,
  packageName,
  onConfirm,
  availableHours,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detecta pantallas pequeñas

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numPeople: "",
    reservationDate: "",
    reservationHour: "",
    extras: "",
  });

  const handleChange = (field: string, value: any) => { //eslint-disable-line
    setFormData((prev) => ({ ...prev, [field]: value })); //eslint-disable-line
  };

  const handleSubmit = () => {
    onConfirm({ ...formData, packageName });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        ".MuiDialog-paper": {
          borderRadius: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          padding: isSmallScreen ? 1 : 2, // Reduce padding en pantallas pequeñas
        },
      }}
    >
      <DialogTitle
        textAlign={"center"}
        fontSize={isSmallScreen ? "18px" : "24px"} // Ajusta el tamaño de la fuente
      >
        {`Reservar `}
        <b style={{ color: "#4A9B98" }}>{packageName}</b>
      </DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: isSmallScreen ? 1.5 : 2, // Espaciado entre campos
            mt: 2,
          }}
        >
          {[
            {
              label: "Nombre",
              type: "text",
              value: formData.name,
              field: "name",
            },
            {
              label: "Correo",
              type: "email",
              value: formData.email,
              field: "email",
            },
            {
              label: "Teléfono de contacto (WhatsApp)",
              type: "tel",
              value: formData.phone,
              field: "phone",
            },
            {
              label: "Número de personas",
              type: "number",
              value: formData.numPeople,
              field: "numPeople",
            },
            {
              label: "Fecha de reservación",
              type: "date",
              value: formData.reservationDate,
              field: "reservationDate",
              props: { InputLabelProps: { shrink: true } },
            },
          ].map(({ label, type, value, field, props }, index) => (
            <TextField
              key={index}
              label={label}
              type={type}
              value={value}
              onChange={(e) => handleChange(field, e.target.value)}
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  minHeight: isSmallScreen ? "35px" : "40px", // Ajusta la altura del campo
                  "& fieldset": { borderColor: "#4A9B98" },
                  "&:hover fieldset": { borderColor: "#4A9B98" },
                  "&.Mui-focused fieldset": { borderColor: "#4A9B98" },
                },
                "& .MuiInputLabel-root": {
                  color: "#4A9B98",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#4A9B98",
                },
              }}
              {...props}
            />
          ))}
          <TextField
            select
            label="Hora de reservación"
            value={formData.reservationHour}
            onChange={(e) => handleChange("reservationHour", e.target.value)}
            SelectProps={{
              native: true,
            }}
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                minHeight: isSmallScreen ? "35px" : "40px",
                "& fieldset": { borderColor: "#4A9B98" },
                "&:hover fieldset": { borderColor: "#4A9B98" },
                "&.Mui-focused fieldset": { borderColor: "#4A9B98" },
              },
              "& .MuiInputLabel-root": {
                color: "#4A9B98",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#4A9B98",
              },
            }}
          >
            <option value=""></option>
            {availableHours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}
              </option>
            ))}
          </TextField>
          <TextField
            label="¿Algún extra que te gustaría agregar?"
            value={formData.extras}
            onChange={(e) => handleChange("extras", e.target.value)}
            fullWidth
            multiline
            rows={isSmallScreen ? 2 : 3} // Reduce las filas en pantallas pequeñas
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                minHeight: isSmallScreen ? "35px" : "40px",
                "& fieldset": { borderColor: "#4A9B98" },
                "&:hover fieldset": { borderColor: "#4A9B98" },
                "&.Mui-focused fieldset": { borderColor: "#4A9B98" },
              },
              "& .MuiInputLabel-root": {
                color: "#4A9B98",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#4A9B98",
              },
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "#4A9B98",
            borderColor: "#4A9B98",
            "&:hover": { backgroundColor: "#e8f5e9", borderColor: "#3B8479" },
            borderRadius: "15px",
            minHeight: isSmallScreen ? "35px" : "40px",
            fontSize: isSmallScreen ? "14px" : "16px",
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4A9B98",
            color: "#fff",
            "&:hover": { backgroundColor: "#3B8479" },
            borderRadius: "15px",
            minHeight: isSmallScreen ? "35px" : "40px",
            fontSize: isSmallScreen ? "14px" : "16px",
          }}
          onClick={handleSubmit}
        >
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReservationForm;
