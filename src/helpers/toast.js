import { toast } from "bulma-toast";

export const runToast = (message) => {
  toast({
    message,
    type: "is-success is-dark",
    position: "bottom-center",
    dismissible: true,
    pauseOnHover: true,
    animate: { in: "fadeIn", out: "fadeOut" },
  });
};
