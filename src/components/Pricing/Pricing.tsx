"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { motion } from "framer-motion";
import PricingCard from "@components/PricingCard/PricingCard";
import ReservationForm from "@components/ReservationForm/ReservationForm";
import ConfirmationModal from "@components/ConfirmationModal/ConfirmationModal";
import axolotlIconPrimary from "@assets/icons/pricing/axolotlIconPrimary.svg";
import axolotlIconSecondary from "@assets/icons/pricing/axolotlIconSecondary.svg";
import axolotlIconTertiary from "@assets/icons/pricing/axolotlIconTertiary.svg";
import Link from "next/link";

const pricingData = [
  {
    title: "Paquete Quetzal",
    subtitle: "Experiencia Básica",
    price: "$3,500 MXN",
    features: [
      { text: "2h en trajinera", icon: axolotlIconSecondary },
      { text: "Reptilario y Ajolotario", icon: axolotlIconSecondary },
      { text: "Baños limpios", icon: axolotlIconSecondary },
      { text: "Máximo 20 personas", icon: axolotlIconSecondary },
    ],
    backgroundColor: "#ffffff",
    textColor: "#587542",
    cardIcon: axolotlIconPrimary,
    hours: ["10:00 AM", "12:00 PM", "2:00 PM"],
  },
  {
    title: "Paquete Axolotl",
    subtitle: "Experiencia Intermedia",
    price: "$5,000 MXN",
    features: [
      { text: "Amanecer en trajinera", icon: axolotlIconPrimary },
      { text: "Desayuno incluido", icon: axolotlIconPrimary },
      {
        text: "Reptilario y Ajolotario con explicación",
        icon: axolotlIconPrimary,
      },
      { text: "Interacción con los animales", icon: axolotlIconPrimary },
      { text: "Baños limpios", icon: axolotlIconPrimary },
      { text: "Máximo 20 personas", icon: axolotlIconPrimary },
    ],
    backgroundColor: "#4A9B98",
    textColor: "#ffffff",
    cardIcon: axolotlIconSecondary,
    hours: ["8:00 AM", "10:00 AM", "6:00 PM"],
  },
  {
    title: "Paquete Xóchitl",
    subtitle: "Experiencia Premium",
    price: "$12,500 MXN",
    features: [
      { text: "Atardecer en trajinera", icon: axolotlIconTertiary },
      {
        text: "Reptilario y Ajolotario con explicación",
        icon: axolotlIconTertiary,
      },
      { text: "Interacción con los animales", icon: axolotlIconTertiary },
      {
        text: "Comida (brocheta, quesadillas, mixiote)",
        icon: axolotlIconTertiary,
      },
      {
        text: "Barra libre (Michelada, Cantarito, Mojito, Azulito)",
        icon: axolotlIconTertiary,
      },
      { text: "Baños limpios", icon: axolotlIconTertiary },
      { text: "Máximo 20 personas", icon: axolotlIconTertiary },
    ],
    backgroundColor: "#ffffff",
    textColor: "#89C28C",
    cardIcon: axolotlIconTertiary,
    hours: ["4:00 PM", "6:00 PM", "8:00 PM"],
  },
];

export default function Pricing() {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [reservationFormOpen, setReservationFormOpen] = useState(false); //eslint-disable-line
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null); //eslint-disable-line
  const [reservationData, setReservationData] = useState<any>(null);//eslint-disable-line

  const handleInfoDialogOpen = () => {
    setInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
  };

  const handleReserveClick = (packageData: any) => { //eslint-disable-line
    setSelectedPackage(packageData);
    setReservationFormOpen(true);
  };

  const handleReservationFormClose = () => {
    setSelectedPackage(null);
    setReservationFormOpen(false);
  };

  const handleReservationConfirm = (data: any) => { //eslint-disable-line
    setReservationData(data);
    setReservationFormOpen(false);
    setConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
    setReservationData(null);
  };

  const handleConfirmAndSend = () => {
    const message = `
Reservación:
- Paquete: ${reservationData.packageName}
- Nombre: ${reservationData.name}
- Correo: ${reservationData.email}
- Teléfono: ${reservationData.phone}
- Número de personas: ${reservationData.numPeople}
- Fecha: ${reservationData.reservationDate}
- Hora: ${reservationData.reservationHour}
- Extras: ${reservationData.extras || "Ninguno"}
    `.trim();

    const whatsappUrl = `https://wa.me/525518984355?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    handleCloseConfirmation();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        minHeight: "100vh",
        alignContent: "center",
      }}
    >
      {/* Title Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mr: 1 }}
            className="text-foreground"
          >
            Únete a la Conservación:
            <br />
            Tours por Xochimilco
          </Typography>
          <IconButton onClick={handleInfoDialogOpen} sx={{ color: "#4A9B98" }}>
            <InfoIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            mb: 6,
            lineHeight: 1.6,
          }}
        >
          Descubre la magia de Xochimilco y su riqueza natural a través de
          nuestros tours guiados. Explora la flora y fauna local, conoce el
          hábitat del ajolote y aprende sobre los esfuerzos de conservación que
          realizamos en el Reptilario y Ajolotario Quetzal. Todo lo recaudado se
          reinvierte directamente en el cuidado y protección de las especies,
          ayudando a preservar este ecosistema único para futuras generaciones.
        </Typography>
      </motion.div>

      {/* Grid Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Grid container spacing={4} justifyContent="center">
          {pricingData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PricingCard
                {...data}
                onReserveClick={() => handleReserveClick(data)}
              />
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Typography
        variant="body2"
        sx={{
          mt: 6,
          color: "#777",
          fontSize: "24px",
        }}
      >
        Pregunta por los paquetes en kayak
      </Typography>

      {/* Info Dialog */}
      <Dialog
        open={infoDialogOpen}
        onClose={handleInfoDialogClose}
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
        <DialogTitle variant="h3">Políticas de Reservación</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            - Todas las reservaciones deberán realizarse a través de nuestro
            sitio web. Cada paquete está sujeto a disponibilidad de lugares en
            la trajinera.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            - Al momento de realizar la reservación, deberá pagarse el 50% del
            total del paquete mediante transferencia bancaria.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: "center" }}>
            <span style={{ color: "#0f0f0f", fontWeight: "bold" }}>
              Número de cuenta:
            </span>{" "}
            4152 3142 8557 5067
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            - El comprobante de transferencia deberá enviarse por WhatsApp al
            número:{" "}
            <Link
              href="https://wa.link/ezxixs"
              target="_blank"
              style={{ fontWeight: "bold", color: "#0f0f0f" }}
            >
              +52 55 1898 4355
            </Link>
            .
          </Typography>
          <Typography variant="body1">
            - En caso de cancelación o no asistencia el día de la reservación
            del paquete, el 50% pagado no será{" "}
            <span style={{ color: "#0f0f0f", fontWeight: "bold" }}>
              reembolsable.
            </span>
          </Typography>
        </DialogContent>
      </Dialog>

      {/* Reservation Form */}
      {selectedPackage && (
        <ReservationForm
          open={!!selectedPackage}
          onClose={handleReservationFormClose}
          packageName={selectedPackage.title}
          onConfirm={handleReservationConfirm}
          availableHours={selectedPackage.hours}
        />
      )}

      {/* Confirmation Modal */}
      {reservationData && (
        <ConfirmationModal
          open={confirmationOpen}
          onClose={handleCloseConfirmation}
          data={reservationData}
          onConfirm={handleConfirmAndSend}
        />
      )}
    </Box>
  );
}
