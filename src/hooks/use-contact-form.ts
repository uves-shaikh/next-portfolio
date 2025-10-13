import { contactSchema } from "@/schemas";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const useContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof contactSchema>) => {
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Oops! Something went wrong.", {
        description:
          "We're unable to send your message at the moment. Please try again later or contact us at uves.dev@gmail.com.",
      });

      setLoading(false);
      return;
    }

    try {
      const sendFormResponse = await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          message: data.message,
          email: data.email,
        },
        publicKey
      );

      if (sendFormResponse.status === 200) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setIsFormSubmitted(true);
        form.reset();
      } else {
        toast.error("Failed to send message.", {
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch {
      toast.error("Error sending message.", {
        description: "Please check your internet connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    handleSubmit,
    loading,
    isFormSubmitted,
  };
};
