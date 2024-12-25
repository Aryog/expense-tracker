import React from 'react';
import { Link, Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Toaster } from 'sonner';
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
});


export function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const NavLinks = () => (
    <>
      <Link to="/about">
        {({ isActive }) => (
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className="text-sm font-medium transition-colors"
          >
            About
          </Button>
        )}
      </Link>
      <Link to="/expenses">
        {({ isActive }) => (
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className="text-sm font-medium transition-colors"
          >
            Expenses
          </Button>
        )}
      </Link>
      <Link to="/create-expense">
        {({ isActive }) => (
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className="text-sm font-medium transition-colors"
          >
            Create
          </Button>
        )}
      </Link>
      <Link to="/profile">
        {({ isActive }) => (
          <Button
            variant={isActive ? "secondary" : "ghost"}
            className="text-sm font-medium transition-colors"
          >
            Profile
          </Button>
        )}
      </Link>
    </>
  );

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Expense Tracker</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col space-y-4 mt-4">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}


function Root() {
  return (
    <>
      <NavBar />
      <main className="p-4 max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Toaster />
      <TanStackRouterDevtools />
    </>
  );
}

export default Root;
