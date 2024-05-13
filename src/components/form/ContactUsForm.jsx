import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
} from "@material-tailwind/react";
import React from "react";

export default function ContactUsForm() {
    return (
        <Card color="transparent" className="p-5" shadow={true}>
            <Typography variant="h4" color="blue-gray">
                Contact Us
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your review or whatever.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    <Input type="Name" label="Your Name" />
                    <Input type="Name" label="Your Name" />
                    <Textarea size="lg" label="Description" />
                </div>
                <Button className="mt-6" fullWidth>
                    Send
                </Button>
            </form>
        </Card>
    );
}