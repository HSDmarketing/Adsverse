"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessagesSquare, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  contactNo: z.string().min(10, "Contact number must be at least 10 digits."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
})

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNo: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
    });

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxVKzV4JYTrlV-s-a1tglwK_-M_luda5e9k7IGtAWbF2wbTuahrJbul73DKFo1WZJp9/exec", {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not send message. Please try again later.",
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Let's Create a Constellation</h2>
          <p className="mt-4 text-foreground/80">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-foreground/80 text-sm">Send us a message anytime.</p>
                  <a href="mailto:contact@morningstarmedia.com" className="text-accent hover:underline">contact@morningstarmedia.com</a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-foreground/80 text-sm">Mon-Sun from 9am to 11pm.</p>
                  <a href="tel:+919977646156" className="text-accent hover:underline">+91 99776 46156</a>
                </div>
              </CardContent>
            </Card>
             <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="h-8 w-8 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Our Galaxy</h3>
                  <p className="text-foreground/80 text-sm">vijay nagar, indore (452010) madhyapradesh</p>
                </div>
              </CardContent>
            </Card>
            <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
              <a href="https://wa.me/919977646156" target="_blank" rel="noopener noreferrer">
                <MessagesSquare className="mr-2 h-5 w-5" /> Connect on WhatsApp
              </a>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <Card>
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="contactNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact No</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 12345 67890" {...field} />
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
                          <FormLabel>Email Id</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Regarding project..." {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us more about your project..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
