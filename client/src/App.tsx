import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Admin from "@/pages/admin";
import AdminLogin from "@/pages/admin-login";
import IkeaKitchens from "@/pages/ikea-kitchens";
import NotFound from "@/pages/not-found";
import KitchenRemodeling from "@/pages/kitchen-remodeling";
import BathroomRemodeling from "@/pages/bathroom-remodeling";
import HomeAdditions from "@/pages/home-additions";
import BasementFinishing from "@/pages/basement-finishing";
import BethesdaPage from "@/pages/locations/bethesda";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/ikea-kitchens" component={IkeaKitchens} />
      <Route path="/kitchen-remodeling" component={KitchenRemodeling} />
      <Route path="/bathroom-remodeling" component={BathroomRemodeling} />
      <Route path="/home-additions" component={HomeAdditions} />
      <Route path="/basement-finishing" component={BasementFinishing} />
      <Route path="/locations/bethesda" component={BethesdaPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
