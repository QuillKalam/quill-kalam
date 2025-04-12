"use client";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavbarList } from "@/constants/navbarList";
import Image from "next/image";

import LogInButton from "../auth/LogInButton";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Search, Book, Trophy, Settings, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const session = await auth();
  return (
    <React.Fragment>
      <Card className="m-2">
        <CardContent>
          <nav className="@container">
            <div className="flex items-center justify-between w-full ">
              <div className="@max-3xl:hidden flex items-center">
                <Link href="/">
                  <Image
                    src="/logov3.png"
                    width={200}
                    height={480}
                    alt="Picture of the Quillkalam logo"
                    className="mix-blend-multiply"
                  />
                </Link>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent focus:shadow-none">
                        <Book className="w-4 h-4 mr-2" />
                        Browse
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <Book className="w-12 h-12 mb-4 text-primary" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Novels
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Search and most attractive novels ever
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <span title="Introduction">placeholder</span>
                          <span title="Introduction">placeholder</span>
                          <span title="Introduction">placeholder</span>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent focus:shadow-none">
                        <Trophy className="w-4 h-4 mr-2" />
                        Rankings
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {NavbarList.map((navItem, index) => (
                            <Link
                              key={navItem.title + index}
                              href={navItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {navItem.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {navItem.description}
                              </p>
                            </Link>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/studio" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-transparent focus:bg-transparent focus:shadow-none"
                          )}
                        >
                          {/* <Pen className="w-4 h-4" /> */}
                          Author Studio
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="@max-xl:ml-8 relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search stories..."
                    className="@max-xl:w-50 pl-8 w-64 h-9 rounded-full bg-muted/40 focus-visible:ring-offset-0"
                  />
                </div>

                {/* Preferences */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>

                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>

                {/* Auth Buttons */}
                {true ? (
                  <div className="@max-xl:hidden flex items-center gap-4">
                    <LogInButton>
                      <Button className={buttonVariants()}>Log In</Button>
                    </LogInButton>

                    <Button className={buttonVariants({ variant: "outline" })}>
                      Sign Up
                    </Button>
                  </div>
                ) : (
                  <div className="@max-xl:hidden flex items-center gap-4">
                    <Button
                      className={buttonVariants({ variant: "secondary" })}
                    >
                      Sign out
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
