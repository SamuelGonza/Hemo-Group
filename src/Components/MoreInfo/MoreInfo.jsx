import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MoreInfoButton = () => {
  const whatsappLink = "https://wa.me/message/UKZFP6XX5MPRE1";

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<WhatsAppIcon />}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Más información
    </Button>
  );
};

export default MoreInfoButton;
