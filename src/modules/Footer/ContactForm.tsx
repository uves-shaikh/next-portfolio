import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useContactForm } from "@/hooks";

const ContactForm = () => {
  const { form, handleSubmit, loading } = useContactForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="app__footer-form app__flex space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="app__flex">
                  <input
                    className="p-text"
                    type="text"
                    placeholder="Your Name"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="app__flex">
                  <input
                    className="p-text"
                    placeholder="Your Email"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button className="p-text" disabled={loading}>
          {!loading ? "Send Message" : "Sending..."}
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
