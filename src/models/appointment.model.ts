import mongoose, { Schema, Document, Types } from "mongoose";

enum AppointmentStatus {
    Open = "open",
    Pending = "pending",
    Confirmed = "confirmed",
    Canceled = "canceled",
    Completed = "completed"
}

interface IAppointment extends Document {
    memberId: Types.ObjectId,
    services: Types.ObjectId[],
    appointmentDate: Date,
    timeSlot: string,
    status: AppointmentStatus,
    remarks: string,
    createdAt: Date
}

const appointmentSchema = new Schema<IAppointment>({
    memberId: { type: Schema.Types.ObjectId, ref: "member", required: true },
    services: [{ type: Schema.Types.ObjectId, ref: "service" }],
    appointmentDate: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    status: {
        type: String,
        enum: AppointmentStatus,
        default: AppointmentStatus.Open
    },
    remarks: { type: String, maxlength: 500 },
    createdAt: { type: Date, default: Date.now }
});

export const Appointment = mongoose.model<IAppointment>("Appointment", appointmentSchema);