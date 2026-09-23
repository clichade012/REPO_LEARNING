const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  notificationType: { 
    type: String, 
    enum: ['OPERATIONAL', 'TRACKING', 'ESCALATION', 'REMINDERS', 'PROMOTIONAL'], 
    required: true
  },
  type: { 
    type: String, 
    enum: ['email', 'sms', 'push', 'in-app'], 
    default: 'in-app', // Default to 'in-app' for in-app notifications
  },
  status: { 
    type: String, 
    enum: ['pending', 'sent', 'failed', 'delivered'], 
    default: 'pending',
  },
  isRead: { type: Boolean, default: false },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    default: null, // Set default to null for system-generated notifications
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  deletedAt: { type: Date },
  expiresAt: { type: Date }, // Optional: Add expiration date for notifications
});

// Indexing userId for faster queries
notificationSchema.index({ userId: 1 });

const AppNotification = mongoose.model("Notification", notificationSchema);

module.exports = AppNotification;