"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";

const availableTimeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM",
];

export function BookingCalendar() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | undefined>();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) return;

        try {
            const booking = {
                date: format(selectedDate, "yyyy-MM-dd"),
                time: selectedTime,
                ...formData,
                created_at: new Date().toISOString(),
            };
            console.log(booking);
        } catch (error) {
            console.error("Something went wrong!", error);
        } finally {
            setSubmitted(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Calendar + Time Slots */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold mb-6">Select Date & Time</h3>
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    modifiers={{ disabled: { before: new Date() } }}
                    className="rounded-lg border p-4 bg-white shadow-sm"
                />
                {selectedDate && (
                    <div className="mt-8">
                        <h4 className="font-semibold mb-4">Available Times on {format(selectedDate, "MMM dd, yyyy")}</h4>
                        <div className="grid grid-cols-3 gap-3">
                            {availableTimeSlots.map((time) => (
                                <Button
                                    key={time}
                                    variant={selectedTime === time ? "default" : "outline"}
                                    className="h-12"
                                    onClick={() => setSelectedTime(time)}
                                >
                                    {time}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold mb-6">Your Details</h3>
                {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                        <h4 className="text-2xl font-bold text-green-700 mb-4">Thanks! We&apos;re excited.</h4>
                        <p className="text-slate-700">
                            We&apos;ve booked your call for {selectedTime} on {selectedDate && format(selectedDate, "MMM dd, yyyy")}.
                        </p>
                        <p className="text-slate-600 mt-2">We&apos;ll send a confirmation email shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company">Company (optional)</Label>
                            <Input
                                id="company"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="projectType" className="mb-2">Project Type</Label>
                            <Select onValueChange={(val) => setFormData({ ...formData, projectType: val })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select one" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="web">Web Design & Development</SelectItem>
                                    <SelectItem value="growth">Growth & Advertising</SelectItem>
                                    <SelectItem value="analytics">Data Analytics & BI</SelectItem>
                                    <SelectItem value="ai">AI & Automation</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="message" className="mb-2">Brief Message</Label>
                            <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="What's your main goal or challenge?"
                            />
                        </div>

                        <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 w-full">
                            Confirm Booking
                        </Button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}