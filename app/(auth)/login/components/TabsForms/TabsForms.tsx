"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";


export class TabsForms extends React.Component {
    render() {
      return (
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className="grid w-full ">
            <TabsTrigger value="signin">Ingresar</TabsTrigger>
            {/* <TabsTrigger value="signup">Registrarse</TabsTrigger> */}
          </TabsList>
          <TabsContent value="signin">
            <Card>
              <CardContent className="space-y-2">
                <LoginForm/>
              </CardContent>
            </Card>
          </TabsContent>
          {/* <TabsContent value="signup">
            <Card>
              <CardContent className="space-y-2">
                <RegisterForm/>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>
      );
    }
  }