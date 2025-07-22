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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
})

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Here you would typically send the form data to your backend
    alert("Form submitted! We'll get back to you soon.")
    form.reset()
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
                  <a href="mailto:contact@stellarbrand.com" className="text-accent hover:underline">contact@stellarbrand.com</a>
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
                  <p className="text-foreground/80 text-sm">Vijay Nagar, Indore (452010), Madhya Pradesh</p>
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
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
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
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us more about your project..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
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
