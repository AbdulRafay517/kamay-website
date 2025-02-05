import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "../assets/images/logo_v2.png"; // Update with your logo path

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} // Update with your logo path
            className="h-8 w-auto transition-transform hover:scale-105"
          />
          <span className="sr-only">KAMAY Solutions</span>
        </div>

        {/* Navigation + Chat Button */}
        <div className="flex items-center gap-6">
          <Button className="gap-2" variant="default" onClick={() => window.open('https://wa.me/message/5ANCCFINFNNDF1', '_blank')}>
            <MessageCircle className="h-4 w-4" />
            <span>Chat with us</span>
          </Button>
        </div>
      </div>
    </header>
  );
}