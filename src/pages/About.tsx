import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-10 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0A0F1C] mb-8 text-center">
                About Us
              </h1>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  WellHouse was established with a simple mission: to make quality accommodation affordable and accessible for everyone. We believe that finding a comfortable place to live shouldn't come with high deposits or hidden costs. That's why we offer flexible rental options and strive to match every tenant with a home that fits their budget.
                </p>
                
                <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  At WellHouse, we go beyond just providing a place to stay. We're committed to offering the best amenities to our guests and tenants, and we're always open to fulfilling specific requirements to make your stay even better. We work hard to ensure your needs are met.
                </p>
                
                <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Our team is dedicated to making your renting experience smooth, flexible, and enjoyable. We listen to our tenants and adapt our offerings to suit your lifestyle and preferences.
                </p>
                
                <p className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  With WellHouse, you can expect transparency, flexibility, and a genuine commitment to your comfort.
                </p>
                
                <p className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  At WellHouse, we're not just providing a space — we're building a community of happy residents who love where they live.
                </p>
                
                <p className="text-lg font-semibold text-[#0A0F1C] text-center mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  Your home, your way — at a price you can afford.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;