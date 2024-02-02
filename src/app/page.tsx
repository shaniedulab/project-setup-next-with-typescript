import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Wrench } from "lucide-react";
import DemoPage from "./payments/page";
import FormicYup from "./formik-yup/page";
import './app.css'

export default function Home() {
  return (
    <main>
      <div>
        {/* <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Wrench /> */}
        {/* <DemoPage /> */}
      </div>
      {/* <FormicYup/> */}
      <div className="container">
        <div className="item1">item 1</div>
        <div className="item2">item 2</div>
        <div className="item3">item 3</div>
        <div className="item4">item 4</div>
      </div>
    </main>
  );
}
