"use client";

import React from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  data: any; //eslint-disable-line
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onClose,
  data,
  onConfirm,
}) => {
  const generateWhatsAppMessage = () => {
    return `
Reservación:
- Paquete: ${data.packageName}
- Nombre: ${data.name}
- Correo: ${data.email}
- Teléfono: ${data.phone}
- Número de personas: ${data.numPeople}
- Fecha: ${data.reservationDate}
- Hora: ${data.reservationHour}
- Extras: ${data.extras || "Ninguno"}
    `.trim();
  };

  const handleConfirm = () => {
    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappLink = `https://wa.me/525518984355?text=${message}`;
    window.open(whatsappLink, "_blank");
    onConfirm();
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
          padding: 2,
        },
      }}
    >
      <DialogTitle
        textAlign="center"
        fontSize="24px"
        sx={{ fontWeight: "bold", color: "#4A9B98" }}
      >
        Confirmación de Reservación
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "500",
            color: "#4A9B98",
          }}
        >
          Revisa tu información antes de confirmar:
        </Typography>
        <Box sx={{ mb: 2 }}>
          {[
            { label: "Paquete", value: data.packageName },
            { label: "Nombre", value: data.name },
            { label: "Correo", value: data.email },
            { label: "Teléfono", value: data.phone },
            { label: "Número de personas", value: data.numPeople },
            { label: "Fecha", value: data.reservationDate },
            { label: "Hora", value: data.reservationHour },
            { label: "Extras", value: data.extras || "Ninguno" },
          ].map(({ label, value }, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                mb: 0.5,
                color: "#4A9B98",
                fontWeight: "500",
              }}
            >
              {`${label}: `}
              <span style={{ color: "#000", fontWeight: "400" }}>{value}</span>
            </Typography>
          ))}
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "red",
            textAlign: "center",
            mt: 2,
            fontWeight: "500",
          }}
        >
          * Todas las reservaciones están sujetas a disponibilidad. Te
          confirmaremos por WhatsApp.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: "#fff",
            color: "#4A9B98",
            border: "1px solid #4A9B98",
            borderRadius: "15px",
            minWidth: "120px",
            "&:hover": { backgroundColor: "#f0f8f5" },
          }}
        >
          Editar reservación
        </Button>
        <Button
          variant="contained"
          onClick={handleConfirm}
          sx={{
            backgroundColor: "#4A9B98",
            color: "#fff",
            borderRadius: "15px",
            minWidth: "120px",
            "&:hover": { backgroundColor: "#3B8479" },
          }}
        >
          Confirmar y Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
