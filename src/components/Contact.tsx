import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Linkedin, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_x59z5je', // Service ID
        'template_3bpjw8m', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Kanchana Rathnayaka'
        },
        'GrbkYUTTLEDZSy4SQ' // Public Key
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "075 - 9065342",
      href: "tel:+94759065342",
      color: "text-accent"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "rmmkr2018@gmail.com",
      href: "mailto:rmmkr2018@gmail.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      color: "text-primary-glow"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
      href: "#",
      color: "text-accent-glow"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">Get In</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project ideas and how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm currently seeking internship opportunities and always excited to discuss 
                new projects. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-gradient-card border border-border/20 rounded-xl backdrop-blur-sm hover:shadow-card transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br from-${contact.color.split('-')[1]}/10 to-transparent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA for quick contact */}
            <div className="bg-gradient-card border border-border/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-3">Quick Response</h4>
              <p className="text-sm text-muted-foreground mb-4">
                For urgent inquiries, feel free to call or message me directly. 
                I typically respond within 24 hours.
              </p>
              <div className="flex gap-3">
                <Button variant="glass" size="sm" className="flex-1">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button variant="accent" size="sm" className="flex-1">
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card border border-border/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;