const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const seoRoutes = require('./routes/seoRoutes');
const contentRoutes = require('./routes/contentRoutes');
const competitorRoutes = require('./routes/competitorRoutes');
const backlinkRoutes = require('./routes/backlinkRoutes');
const reportRoutes = require('./routes/reportRoutes');
const taskRoutes = require('./routes/taskRoutes');
const localSeoRoutes = require('./routes/localSeoRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});
// app.use('/api/auth', authRoutes);
app.use('/api/seo', seoRoutes);
// app.use('/api/content', contentRoutes);
// app.use('/api/competitors', competitorRoutes);
// app.use('/api/backlinks', backlinkRoutes);
// app.use('/api/reports', reportRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/localseo', localSeoRoutes);

// Error handling middleware
// app.use(errorHandler);

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
